"use client";

import useAuthStore from "@/stores/authStore";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROLE_MERCHANT } from "@/constants/userRoles";

const MerchantLayout = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // redirect to login page
      return router.replace(LOGIN_ROUTE);
    }

    if (!user.roles.includes(ROLE_MERCHANT)) {
      return router.push(HOME_ROUTE);
    }
  }, []);

  if (!isAuthenticated) return;

  return <>{children}</>;
};

export default MerchantLayout;
