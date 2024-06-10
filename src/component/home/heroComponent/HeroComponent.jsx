import Image from "next/image";
import React from "react";
import HeroImage from "../../../../public/images/lawhero.jpg";

const HeroComponent = () => {
  return (
    <div className="h-[90vh] relative overflow-hidden">
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
        <h1 className=" tracking-widest text-4xl font-bold mb-4 text-red-600">
          KANOONIASTRA
        </h1>
        <p className="text-white text-lg">Your subtitle or description</p>
      </div>
    </div>
  );
};

export default HeroComponent;
