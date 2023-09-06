import React from "react";
import Image from "next/image";
import atk_portrait from "@public/atk_portrait.svg";

const Footer = () => {
  return (
    <div className="text-white h-60 w-page bottom-0 bg-primary-red -ml-5 -mr-5 -mb-5 mt-6">
      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
        <Image src={atk_portrait} alt="atk logo" className="w-28 h-28" />
      </div>
      <p>Los Angeles, CA</p>
      <p>© 2023 alex t. klein. all rights reserved.</p>
    </div>
  );
};

export default Footer;
