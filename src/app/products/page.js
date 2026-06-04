const ProductsPage = async () => {
  const products = await fetch(
    "https://mern-20260320-api.vercel.app/api/products",
  ).then((res) => res.json());

  console.log(products);

  return <div>ProductsPage</div>;
};

export default ProductsPage;
