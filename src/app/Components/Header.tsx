import React from "react";
import Image from "next/image";

import atk_logo from "@public/atk_logo.svg";

const Header = () => {
  return (
    <div className="flex items-end justify-between px-6 border-b-custom">
      <a href="/">
        <Image src={atk_logo} alt="atk logo" className="mb-4 w-32" />
      </a>

      <div className="flex justify-between space-x-6 mb-3">
        <a href="/about">about</a>
        <a href="/contact">contact</a>
      </div>
    </div>
  );
};

export default Header;
