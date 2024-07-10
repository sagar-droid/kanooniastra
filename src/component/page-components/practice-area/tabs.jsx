"use client";
import React from "react";
import { practiceAreaData } from "./utils";
import Link from "next/link";
import { cn } from "../../../../utils/cn";
import { usePathname } from "next/navigation";

function Tabs() {
  const pathname = usePathname();

  return (
    <ul className="space-y-4 ">
      {practiceAreaData?.map((item, index) => (
        <Link href={"/practice-area/" + item.slug} key={item.slug}>
          <li
            className={cn(
              "py-4 rounded-primary px-5 cursor-pointer rounded-md hover:bg-red-500 hover:text-white",
              pathname === "/practice-area/" + item.slug &&
                "bg-red-600 text-white"
            )}>
            {item?.topic}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Tabs;
