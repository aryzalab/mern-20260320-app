import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="products" element={<Outlet />}>
            <Route index element={<ProductPage />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>404 page not found.</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
