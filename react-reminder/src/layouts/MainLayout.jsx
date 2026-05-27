import Header from "../components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <section className="container mx-auto py-24 px-4">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
