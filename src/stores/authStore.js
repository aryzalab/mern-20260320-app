import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      loginUser: ({ user }) => {
        set({
          user,
          isAuthenticated: true,
        });

        localStorage.setItem("authToken", user.token);
      },

      registerUser: ({ user }) => {
        set({
          user,
          isAuthenticated: true,
        });

        localStorage.setItem("authToken", user.token);
      },

      setUser: ({ user }) => {
        set({ user });
      },

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
