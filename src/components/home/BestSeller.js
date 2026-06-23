import { getProductById } from "@/api/products";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const bestProductId = "6a39585d4099014dff5ad87e";

const BestSeller = async () => {
  const product = await getProductById(bestProductId);

  return (
    <section id="best-seller" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-primary/5 dark:bg-primary-dark p-8 rounded-3xl grid grid-cols-1 sm:grid-cols-2 md:px-12 gap-8 gap-4 items-center">
          <Image
            className="max-w-full h-full rounded-2xl object-cover"
            src={product?.imageUrls[0]}
            height={600}
            width={800}
            alt="bestseller"
          />
          <div>
            <h2 className="dark:text-white font-bold text-3xl">
              {product?.name}
            </h2>
            <p className="text-light dark:text-white py-2">
              {product?.description?.slice(0, 300)}...
            </p>
            <h3 className="dark:text-white text-2xl font-semibold">
              Rs. {product.price}
            </h3>
            <Link
              href={`${PRODUCTS_ROUTE}/${bestProductId}`}
              className="inline-block bg-primary dark:bg-white rounded-3xl font-medium text-white dark:text-primary px-8 py-3 transition duration-300 ease mt-4"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
