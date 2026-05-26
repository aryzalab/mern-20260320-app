import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <h2>LOGO</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Product</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
