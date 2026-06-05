import Link from "next/link";

export const metadata = {
  title: "Products",
};

const ProductsPage = async ({ searchParams }) => {
  const products = await fetch(
    "https://mern-20260320-api.vercel.app/api/products",
  ).then((res) => res.json());

  return (
    <>
      <h1 className="text-3xl">Products</h1>
      {products.map((product, index) => (
        <li key={index}>
          <Link href={`/products/${product._id}`}>{product.name}</Link>
        </li>
      ))}
    </>
  );
};

export default ProductsPage;
