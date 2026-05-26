import React from "react";
import { useLocation, useParams } from "react-router";

const ProductDetailsPage = () => {
  const params = useParams();

  const productId = params.id;

  const path = useLocation();

  console.log(path);

  return (
    <div>
      <h1>Product details page</h1>
      <h2>Product id: {productId}</h2>
    </div>
  );
};

export default ProductDetailsPage;
