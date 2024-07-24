import React from "react";
import HeroComponent from "../component/home/heroComponent/HeroComponent";
import AboutUs from "../component/aboutUs/AboutUs";
import Services from "../component/services/Services";
import TrustedBy from "../component/trustedBy/TrustedBy";
import Testimonial from "../component//home/testimonial/Testimonial";

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <HeroComponent title={"kanooniastra"} />
      <AboutUs />
      <Services />
      <Testimonial />
      <TrustedBy />
    </div>
  );
};

export default Home;
