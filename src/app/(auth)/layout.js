import Image from "next/image";

import hero from "@/assets/images/auth-hero.jpg";

const AuthLayout = ({ children }) => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="h-max lg:h-[80vh] w-full shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Image
              height={600}
              width={600}
              src={hero}
              alt=""
              className="hidden md:block w-full object-cover h-full"
            />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
