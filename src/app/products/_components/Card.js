import { PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ name, brand, category, price, _id, imageUrls }) => {
  return (
    <div className="product-card">
      <Image
        className="w-full h-40 object-cover"
        src={imageUrls[0]}
        alt="featured"
        height={300}
        width={400}
      />
      <div className="bg-white dark:bg-gray-900 pt-3 px-4 pb-4">
        <span className="bg-accent text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {category}
        </span>
        <Link href={`${PRODUCTS_ROUTE}/${_id}`}>
          <h4 className="dark:text-white font-semibold text-xl pt-1 pb-2">
            {name}
          </h4>
        </Link>
        <p>
          Brand: <strong>{brand}</strong>
        </p>
        <p className="my-1 font-bold text-2xl text-primary">Rs. {price}</p>
        <div className="grid grid-cols-[auto_1fr] justify-between items-center gap-4">
          <Link
            href={`${PRODUCTS_ROUTE}/${_id}`}
            className="px-10 bg-background dark:bg-gray-800 py-2 w-full text-center rounded-3xl mt-2 text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300"
          >
            View
          </Link>
          <button className="bg-primary px-4 py-2 w-full text-center rounded-3xl mt-2 text-sm font-medium transition duration-300 ease text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
