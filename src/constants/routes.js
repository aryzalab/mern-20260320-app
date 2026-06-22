import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaChartPie, FaUsers } from "react-icons/fa6";
import { ROLE_ADMIN } from "./userRoles";

export const HOME_ROUTE = "/";
export const ABOUT_ROUTE = "/about";
export const PROFILE_ROUTE = "/profile";
export const CONTACT_ROUTE = "/contact";
export const PRODUCTS_ROUTE = "/products";
export const ORDER_ROUTE = "/orders";
export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";
export const FORGOT_PASSWORD_ROUTE = "/forgot-password";
export const RESET_PASSWORD_ROUTE = "/reset-password";
export const CART_ROUTE = "/cart";
export const ORDERS_ROUTE = "/orders";

// Admin routes
export const PRODUCT_MANAGEMENT_ROUTE = "/admin/product-management";
export const DASHBOARD_ROUTE = "/admin/dashboard";
export const ORDER_MANAGEMENT_ROUTE = "/admin/order-management";
export const USER_MANAGEMENT_ROUTE = "/admin/user-management";

export const navMenu = [
  {
    label: "Home",
    route: HOME_ROUTE,
  },
  {
    label: "About",
    route: ABOUT_ROUTE,
  },
  {
    label: "Products",
    route: PRODUCTS_ROUTE,
  },
  {
    label: "Contact",
    route: CONTACT_ROUTE,
  },
];

export const adminMenu = [
  {
    label: "Dashboard",
    route: DASHBOARD_ROUTE,
    Icon: FaChartPie,
  },
  {
    label: "Product Management",
    route: PRODUCT_MANAGEMENT_ROUTE,
    Icon: FaShoppingBag,
  },
  {
    label: "Order Management",
    route: ORDER_MANAGEMENT_ROUTE,
    Icon: FaShoppingCart,
  },
  {
    label: "User Management",
    route: USER_MANAGEMENT_ROUTE,
    Icon: FaUsers,
    allowedRole: ROLE_ADMIN,
  },
];
