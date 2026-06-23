import { createOrder } from "@/api/orders";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE, ORDERS_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const CheckoutButton = ({ products, totalPrice }) => {
  const [loading, setLoading] = useState(false);
  const { clearCart } = useCartStore.getState();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const router = useRouter();

  function checkoutOrder() {
    if (!isAuthenticated) {
      router.replace(LOGIN_ROUTE);

      toast.info("Please login to checkout products.")

      return;
    }

    setLoading(true);

    createOrder({
      totalPrice,
      orderItems: products.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
    })
      .then(() => {
        toast.success("Order created successfully.");

        // redirect to orders page
        router.push(ORDERS_ROUTE);

        // clear cart
        clearCart();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to checkout!");
      })
      .finally(() => setLoading(false));
  }

  return (
    <button
      type="button"
      onClick={checkoutOrder}
      disabled={loading}
      className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20"
    >
      Proceed to Checkout
      {loading && <Spinner className="h-6! w-6! ml-2" />}
    </button>
  );
};

export default CheckoutButton;
