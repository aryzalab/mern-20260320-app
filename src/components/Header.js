"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import useAuthStore from "@/stores/authStore";
import { HOME_ROUTE, LOGIN_ROUTE, navMenu } from "@/constants/routes";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const { isAuthenticated, logout } = useAuthStore.getState();

  const router = useRouter();

  function handleLogout() {
    logout();

    router.replace(LOGIN_ROUTE);
  }

  useEffect(() => {}, [isAuthenticated]);

  return (
    <header className="py-4 shadow-md bg-white dark:bg-gray-950 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FashionWear"
              height={32}
              width={32}
              className="h-9"
            />
            <h1 className="text-2xl font-bold mt-1 text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text">
              FashionWear
            </h1>
          </div>
          <nav className="items-center gap-3 hidden md:flex">
            {navMenu.map((menu) => {
              const isActive =
                pathName == menu.route ||
                (menu.route !== HOME_ROUTE && pathName.startsWith(menu.route));

              return (
                <Link
                  key={menu.route}
                  className={`text-dark dark:text-gray-200 px-2 py-1 hover:text-primary ${isActive ? "text-primary" : ""}`}
                  href={menu.route}
                >
                  {menu.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <button
              id="lightThemeSwitcher"
              className="hidden dark:block px-2 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700"
            >
              🌞
            </button>
            <button
              id="darkThemeSwitcher"
              className="dark:hidden px-2 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700"
            >
              🌙
            </button>

            {isAuthenticated ? (
              <>
                <button className="px-4 pt-1 pb-2 rounded-3xl bg-gray-100 dark:bg-gray-700 h-auto">
                  🛒
                  <span className="bg-primary px-2 py-0.5 text-xs rounded-xl text-white">
                    5
                  </span>
                </button>
                <button
                  type="button"
                  className="hover:bg-primary text-white px-5 py-1.5 rounded-lg bg-primary-dark cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                className="hover:bg-primary text-white px-5 py-1.5 rounded-lg bg-primary-dark"
                href={LOGIN_ROUTE}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
