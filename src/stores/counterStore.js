import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounterState = create(
  persist(
    (set) => ({
      count: 10,
      name: "ram",
      age: 20,
      increaseCount: () => {
        // set(function) => function (state) { return {value: updated value}}
        function increment(state) {
          return {
            count: state.count + 1,
          };
        }

        set(increment);
      },
      decreaseCount: () => {
        set((state) => ({ count: state.count - 1 }));
      },
      resetCount: () => {
        set({ count: 10 });
      },
    }),
    {
      name: "persist:count",
    },
  ),
);
