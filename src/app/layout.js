import "./globals.css";
import Header from "@/components/Header";
import MainLayout from "@/layouts/MainLayout";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: {
    default: "E-fashion",
    template: "%s | E-fashion",
  },
  description: "Online ecommerce platform for clothes and shoes.",
  keywords: "Online shopping in Nepal, Best clothing items",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <MainLayout>
        <Header />
        {children}
      </MainLayout>

      <ToastContainer position="top-center" autoClose={2000} />
    </body>
  </html>
);

export default RootLayout;
