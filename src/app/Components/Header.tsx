import React from "react";
import Image from "next/image";
import Link from "next/link";

import atk_logo from "@public/atk_logo.svg";

const Header = () => {
  return (
    <div className="flex items-end justify-between md:px-6 sm:px-2 border-b-custom mb-6">
      <Link href="/">
        <Image src={atk_logo} alt="atk logo" className="mb-4 w-32" />
      </Link>

      <div
        className={`md:justify-between sm:space-around space-x-6 pb-3 underline`}
      >
        <Link href="/" className="hover:underline">
          home
        </Link>
        <Link href="/contact" className="">
          contact
        </Link>
      </div>
    </div>
  );
};
export default Header;
