import React from "react";
import HeroComponent from "../component/home/heroComponent/HeroComponent";
import AboutUs from "@/component/aboutUs/AboutUs";
import Services from "@/component/services/Services";
import TrustedBy from "@/component/trustedBy/TrustedBy";

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <AboutUs />
      <Services />
      <TrustedBy />
    </div>
  );
};

export default Home;
