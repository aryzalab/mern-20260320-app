"use client";

import useAuthStore from "@/stores/authStore";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROLE_ADMIN, ROLE_MERCHANT } from "@/constants/userRoles";
import Sidebar from "./_components/Sidebar";

const MerchantLayout = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // redirect to login page
      return router.replace(LOGIN_ROUTE);
    }

    if (
      !user.roles.includes(ROLE_MERCHANT) &&
      !user.roles.includes(ROLE_ADMIN)
    ) {
      return router.push(HOME_ROUTE);
    }
  }, []);

  if (!isAuthenticated) return;

  return (
    <>
      <Sidebar />
      <div className="p-6 sm:ml-64 min-h-screen dark:bg-gray-800">{children}</div>
    </>
  );
};

export default MerchantLayout;
