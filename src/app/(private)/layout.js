"use client";

import useAuthStore from "@/stores/authStore";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateLayout = ({ children }) => {
  const { isAuthenticated } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // redirect to login page
      router.push(LOGIN_ROUTE);
    }
  }, []);

  if (!isAuthenticated) return;

  return <>{children}</>;
};

export default PrivateLayout;
