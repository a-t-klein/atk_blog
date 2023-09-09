import React from "react";
import Image from "next/image";
import atk_portrait from "@public/atk_portrait.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-primary-red -ml-5 -mr-5 -mb-5 mt-6 p-6">
      <div className="max-w-screen-xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        <p className="text-center mt-2 text-white md:flex md:items-center">
          © {year} alex t. klein all rights reserved
        </p>
        <div className="md:border-l md:border-background-white flex flex-col items-center justify-center ">
          <Image
            src={atk_portrait}
            alt="atk logo"
            className="w-36 h-36 p-1 bg-background-light rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
