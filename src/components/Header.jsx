import { ADD_ROUTE, navMenu } from "../contants/routes";
import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white fixed w-full z-20 top-0 inset-s-0 shadow">
      <div className="container max-w-3xl mx-auto flex flex-wrap items-center justify-between p-4">
        <h1 className="text-orange-500 text-xl font-semibold">Reminders</h1>
        <div className="flex sm:order-2 space-x-3 sm:space-x-0 rtl:space-x-reverse">
          <Link
            to={ADD_ROUTE}
            className="text-white bg-orange-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none"
          >
            Add Reminder
          </Link>
        </div>
        <nav
          className="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 sm:p-0 mt-4 font-medium border border-default rounded-base sm:space-x-8 rtl:space-x-reverse sm:flex-row sm:mt-0 sm:border-0">
            {navMenu.map((menu, index) => {
              const active = location.pathname == menu.route;

              return (
                <li key={index} className={active ? "text-orange-500" : ""}>
                  <Link to={menu.route}>{menu.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="sm:hidden w-full">
          <ul className="flex mt-2 pt-2 border-t border-gray-100 font-medium gap-5">
            {navMenu.map((menu, index) => {
              const active = location.pathname == menu.route;

              return (
                <li key={index} className={active ? "text-orange-500" : ""}>
                  <Link to={menu.route}>{menu.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
