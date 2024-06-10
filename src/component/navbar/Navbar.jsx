import Links from "./links/Links";
import React from "react";
import "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../../utils/auth";

const Navbar = async () => {
  const session = await auth();
  // console.log(session);

  return (
    <div className=" flex justify-between sticky px-24 bg-gray-900 py-4 !z-[999999]">
      <div className=" flex items-center justify-center">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo__"
            width={55}
            height={55}
            className=" flex justify-center items-center min-w-[55px]"
          />
        </Link>
      </div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
