import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import UpcomingPage from "./pages/UpcomingPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import MainLayout from "./layouts/MainLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="upcoming" element={<UpcomingPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="edit/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
