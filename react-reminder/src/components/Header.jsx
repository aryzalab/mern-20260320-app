import { ADD_ROUTE, navMenu } from "../contants/routes";
import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white fixed w-full z-20 top-0 inset-s-0 shadow">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="text-orange-500 text-xl font-semibold">Reminders</h1>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to={ADD_ROUTE}
            className="text-white bg-orange-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none"
          >
            Add Reminder
          </Link>
          <button type="button" className="text-3xl md:hidden">
            ☰
          </button>
        </div>
        <nav
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
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
