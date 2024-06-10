"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./trusteby.css";

// Import your images
import image1 from "../../../public/images/logo.png";
import Image from "next/image";

class TrustedBy extends Component {
  render() {
    const images = [image1, image1, image1, image1];

    const settings = {
      dots: false,
      //   infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <section className="p-24 flex flex-col justify-center items-center gap-10">
        <h2 className="flex justify-center items-center text-3xl uppercase tracking-wide">
          Trusted By
        </h2>
        <Slider
          {...settings}
          className="trusted-carousel w-screen overflow-hidden ">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center px-24">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={200}
                height={200}
                className="w-[100px] h-[100px]"
              />
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}

export default TrustedBy;
