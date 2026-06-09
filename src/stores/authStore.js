import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      loginUser: ({ user }) =>
        set({
          user,
          isAuthenticated: true,
        }),

      registerUser: ({ user }) =>
        set({
          user,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    { name: "zustand:auth-storage" },
  ),
);

export default useAuthStore;
