"use client";

import useCartStore from "@/stores/cartStore";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartStore.getState();

  function handleAddToCart() {
    addToCart(product);

    toast.success("Add to cart successful.");
  }

  return (
    <button
      onClick={handleAddToCart}
      className="cursor-pointer bg-primary px-4 py-2 w-full text-center rounded-3xl mt-2 text-sm font-medium transition duration-300 ease text-white flex items-center gap-2 justify-center"
    >
      Add to Cart
      <FaShoppingCart />
    </button>
  );
};

export default AddToCart;
