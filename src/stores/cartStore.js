import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      products: [],
      totalPrice: 0,

      addToCart: (product) => {
        const products = get().products;
        const totalPrice = get().totalPrice;

        const existingProduct = products.find(
          (item) => item._id == product._id,
        );

        if (existingProduct) {
          set({
            products: products.map((item) => {
              if (item._id == product._id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              }

              return item;
            }),
            totalPrice: totalPrice + product.price,
          });

          return;
        }

        set({
          products: [...products, { ...product, quantity: 1 }],
          totalPrice: totalPrice + product.price,
        });
      },
      removeFromCart: (product) => {
        const products = get().products;
        const totalPrice = get().totalPrice;

        set({
          products: products.filter((item) => item._id !== product._id),
          totalPrice: totalPrice - product.price * product.quantity,
        });
      },
      increaseQuantity: (product) => {
        const products = get().products;
        const totalPrice = get().totalPrice;

        const currentProduct = products.find((item) => item._id == product._id);

        if (currentProduct.quantity >= 10) return;

        set({
          products: products.map((item) => {
            if (item._id == product._id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }

            return item;
          }),
          totalPrice: totalPrice + product.price,
        });
      },
      decreaseQuantity: (product) => {
        const products = get().products;
        const totalPrice = get().totalPrice;

        const currentProduct = products.find((item) => item._id == product._id);

        if (currentProduct.quantity <= 1) return;

        set({
          products: products.map((item) => {
            if (item._id == product._id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }

            return item;
          }),
          totalPrice: totalPrice - product.price,
        });
      },
      clearCart: () => {
        set({
          products: [],
          totalPrice: 0,
        });
      },
    }),
    { name: "zustand:cart-storage" },
  ),
);

export default useCartStore;
