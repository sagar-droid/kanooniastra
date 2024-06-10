import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-24 flex flex-col gap-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 flex gap-6 justify-center items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={50} />
          </Link>
          <div>
            <p className=" uppercase text-xl">Kanooniastra</p>
            <p className=" text-gray-400">Address</p>
            <p className=" text-gray-400">Email</p>
            <p className=" text-gray-400">Contact</p>
          </div>
        </div>
        <div className="flex flex-col  text-gray-400 gap-6">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-gray-400 mt-10 md:mt-0 flex justify-center items-center text-sm">
        &copy; {new Date().getFullYear()} Divine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
