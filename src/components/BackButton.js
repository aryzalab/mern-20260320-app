"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="flex items-center gap-2 text-sm cursor-pointer"
    >
      <FaArrowLeft /> Back
    </button>
  );
};

export default BackButton;
