import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useState } from "react";

import placeholder from "@/assets/images/placeholder.png";
import useAuthStore from "@/stores/authStore";
import { updateUserProfileImage } from "@/api/users";
import { toast } from "react-toastify";

const ProfileImage = () => {
  const user = useAuthStore((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [localImageUrl, setLocalImageUrl] = useState(user?.profileImageUrl);

  const { setUser } = useAuthStore.getState();

  function updateProfileImage() {
    setLoading(true);

    const formData = new FormData();

    formData.append("image", profileImage);

    updateUserProfileImage(formData)
      .then((response) => {
        setUser({ user: response.data });

        toast.success("Updated successfully!");
      })
      .catch((error) => {
        console.log(error);

        toast.error(error.response.data);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Update profile image
      </h1>
      <div className="flex items-center py-5 gap-4">
        <Image
          src={localImageUrl ?? placeholder}
          alt=""
          width={250}
          height={250}
          className="p-1 h-20 w-20 rounded-full border-4 border-primary object-cover"
        />

        <div>
          <label className="block text-sm mb-1 font-medium dark:text-gray-200">
            Upload file
          </label>
          <input
            className="p-2 cursor-pointer border border-gray-500 text-sm  dark:text-gray-200 rounded-lg block w-full shadow-xs"
            type="file"
            accept=".png,.jpg,.jpeg,.webp"
            onChange={(event) => {
              const file = event.target.files[0];

              setProfileImage(file);
              setLocalImageUrl(URL.createObjectURL(file));
            }}
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            PNG, JPG or WEBP (MAX. 800x400px).
          </p>
        </div>
        <button
          onClick={updateProfileImage}
          className="flex gap-2 items-center text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-85"
          disabled={loading || !profileImage}
        >
          Update
          {loading && <Spinner className="w-6! h-6!" />}
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
