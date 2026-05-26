import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const [query] = useSearchParams();
  const path = useLocation();

  console.log(query.get("category"));

  console.log(path);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Product page</h1>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}> {product.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProductPage;
