import Header from "@/components/Header";
import "./globals.css";

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
