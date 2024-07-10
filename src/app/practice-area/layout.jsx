"use client";
import { practiceAreaData } from "../../component/page-components/practice-area/utils";
import Tabs from "../../component/page-components/practice-area/tabs";
import { usePathname } from "next/navigation";
import React from "react";
import HeroComponent from "../../component/home/heroComponent/HeroComponent";

function Layout({ children }) {
  const pathname = usePathname();
  const currentMinister = practiceAreaData.find(
    (minister) => "/practice-area/" + minister.slug === pathname
  );
  console.log(currentMinister);

  return (
    <>
      <HeroComponent title={"Practice Area"} desc={"We excel in"} />
      <section className="container px-24  mt-10 mb-40 grid grid-cols-12 gap-x-10 text-md font-raleway ">
        {/* <h1 className="col-span-12  mt-5 mb-20 heading-2 flex justify-center items-center text-3xl text-red-600">
        Practice Area of Our Firm
        </h1> */}
        <aside className="col-span-4 body-2 ">
          <Tabs />
        </aside>
        <div className="col-span-8  body-2 ">{children}</div>
      </section>
    </>
  );
}

export default Layout;
