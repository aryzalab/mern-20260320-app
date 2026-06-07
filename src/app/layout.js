import Header from "@/components/Header";
import "./globals.css";

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
    <body className="light">
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
