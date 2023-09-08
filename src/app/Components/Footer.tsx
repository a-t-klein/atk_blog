import React from "react";
import Image from "next/image";
import atk_portrait from "@public/atk_portrait.svg";

const Footer = () => {
  return (
    <div className="flex text-white h-60 w-page bottom-0 bg-primary-red -ml-5 -mr-5 -mb-5 mt-6 p-6">
      <div className="md:ml-96 border-r border-solid border-background-light md:pr-52">
        <p>Los Angeles, CA</p>
        <p>© 2023 alex t. klein</p>
        <p>all rights reserved.</p>
      </div>
      <div className="w-36 h-36 bg-background-light rounded-full flex items-center justify-center md:ml-6">
        <Image src={atk_portrait} alt="atk logo" className="w-32 h-32" />
      </div>
    </div>
  );
};

export default Footer;
