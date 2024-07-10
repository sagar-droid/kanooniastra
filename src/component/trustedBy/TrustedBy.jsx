"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./trusteby.css";

// Import your images
import image1 from "../../../public/images/brand1.jpg";
import image2 from "../../../public/images/brand2.jpg";
import image3 from "../../../public/images/brand3.jpg";
import image4 from "../../../public/images/brand4.jpg";
import image5 from "../../../public/images/brand5.jpg";
import image6 from "../../../public/images/brand6.jpg";
import Image from "next/image";

class TrustedBy extends Component {
  render() {
    const images = [image1, image2, image3, image4, image5, image6];

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
        <h2
          className="flex justify-center items-center text-3xl uppercase tracking-wide"
          data-aos="fade-up"
          data-aos-once="true">
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
                className="min-w-[250px] h-[200px]"
              />
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}

export default TrustedBy;
