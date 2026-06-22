"use client";
import Image from "next/image";

import hero from "@/assets/images/auth-hero.jpg";
import useAuthStore from "@/stores/authStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/constants/routes";

const AuthLayout = ({ children }) => {
  const { isAuthenticated } = useAuthStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      // redirect to homepage
      router.push(HOME_ROUTE);
    }
  }, []);

  if (isAuthenticated) return;

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="lg:min-h-[70vh] w-full shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Image
              height={600}
              width={600}
              src={hero}
              alt=""
              className="hidden md:block w-full object-cover h-full"
            />
            <div className=" dark:bg-gray-900">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
