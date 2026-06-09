"use client";

import useAuthStore from "@/stores/authStore";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROLE_CUSTOMER } from "@/constants/userRoles";

const CustomerLayout = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // redirect to login page
      return router.replace(LOGIN_ROUTE);
    }

    if (!user.roles.includes(ROLE_CUSTOMER)) {
      return router.push(HOME_ROUTE);
    }
  }, []);

  if (!isAuthenticated) return;

  return <>{children}</>;
};

export default CustomerLayout;
