import React from "react";
import { TbGavel } from "react-icons/tb";
import { CiBank } from "react-icons/ci";
import { MdOutlinePolicy } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { GiThunderSkull } from "react-icons/gi";
import { IoDocumentsOutline } from "react-icons/io5";
import {
  FaHandsHelping,
  FaHandHoldingHeart,
  FaCalculator,
} from "react-icons/fa";
import { IoMdMan } from "react-icons/io";
import {} from "react-icons/fa";
import Link from "next/link";

const images = [
  {
    image: <TbGavel />,
    practices: "Litigation",
    link: "/litigation",
  },
  {
    image: <CiBank />,
    practices: "Bank & Finance",
    link: "/banking-sector",
  },
  {
    image: <MdOutlinePolicy />,
    practices: "Corporate Compliance",
    link: "/corporate-law",
  },
  { image: <BsCart4 />, practices: "E-Commerce" },
  {
    image: <GiThunderSkull />,
    practices: "Disputes",
    link: "/dispute-resolution",
  },
  {
    image: <IoDocumentsOutline />,
    practices: "Labour Employment",
    link: "/labour-law",
  },
  {
    image: <FaHandHoldingHeart />,
    practices: "NGO/INGOs & NPOs",
    link: "/ngo-ingo-registration",
  },
  { image: <FaHandsHelping />, practices: "Merger & Acquisition" },
  {
    image: <FaCalculator />,
    practices: "Taxation",
    link: "/taxation-laws",
  },
  { image: <IoMdMan />, practices: "Pro bono" },
];

const Services = () => {
  return (
    <section className=" p-24 flex flex-col gap-10 bg-gray-900">
      <div
        className=" flex justify-center items-center text-3xl font-semibold tracking-widest uppercase"
        data-aos="fade-up"
        data-aos-once="true">
        Practice Area
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center"
        data-aos="fade-up"
        data-aos-once="true">
        {images.map((image, index) => (
          <div
            key={index}
            className=" bg-gray-700 w-[200px] h-[150px] flex justify-center items-center rounded hover:bg-white hover:text-black">
            <Link href={`/practice-area/${image.link}`}>
              <div
                key={index}
                className=" flex flex-col gap-4 items-center justify-center">
                <div className=" w-[64px] h-[64px] text-[64px] flex justify-center text-red-600">
                  {image.image}
                </div>
                <div className=" text-xl tracking-wide text-center">
                  {image.practices}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
