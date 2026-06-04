"use client";

import { HOME_ROUTE, navMenu } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header>
      <nav className="sticky w-full z-20 top-0 inset-s-0 shadow">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href={HOME_ROUTE}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            Logo
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none"
            >
              Get started
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navMenu.map((menu) => {
                const isActive =
                  pathName == menu.route ||
                  (menu.route !== HOME_ROUTE &&
                    pathName.startsWith(menu.route));

                return (
                  <li key={menu.route}>
                    <Link
                      href={menu.route}
                      className={`block py-2 px-3 text-heading rounded md:p-0 md:dark:hover:bg-transparent ${isActive ? "text-blue-600" : ""}`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
