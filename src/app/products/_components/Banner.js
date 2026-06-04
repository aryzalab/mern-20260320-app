import Image from "next/image";

import watchImage from "@/assets/images/watch.png";

const ProductBanner = () => {
  return (
    <div className="p-10 bg-linear-to-r from-blue-800 via-blue-300 to-blue-700 shadow-xl grid grid-cols-3 items-center">
      <h2 className="font-black text-white text-7xl text-center">
        New Arrival
      </h2>
      <Image
        src={watchImage}
        height={400}
        width={400}
        className="h-64 w-auto mx-auto"
        alt="watch"
      />
      <h4 className="flex flex-col items-center justify-center rounded-full bg-white shadow border-4 border-blue-200 w-40 h-40 font-bold text-2xl text-center">
        <span className="text-5xl text-red-600">50%</span> Off
      </h4>
    </div>
  );
};

export default ProductBanner;
