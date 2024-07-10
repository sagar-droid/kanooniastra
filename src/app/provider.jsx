"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Provider = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 200,
      duration: 500,
      easing: "ease",
      // once:true,
    });
  }, []);
  // return (
  //   <div>{children}</div>
  // )
  return null;
};

export default Provider;
