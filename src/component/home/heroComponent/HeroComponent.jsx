import Image from "next/image";
import React from "react";
import HeroImage from "../../../../public/images/lawhero.jpg";

const HeroComponent = ({ title, desc }) => {
  return (
    <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden">
      <div className="z-0 w-full">
        <Image
          src={HeroImage}
          alt="image"
          // fill
          width={1200}
          height={1200}
          className="object-cover w-full h-[100vh]"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className=" tracking-widest text-[40px] md:text-[60px] lg:text-[100px] font-bold mb-4 text-red-600 uppercase">
          {title}
        </h1>
        <p className="text-white text-xl">{desc}</p>
      </div>
    </div>
  );
};

export default HeroComponent;
