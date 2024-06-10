"use client";
import NavLink from "./navLink/NavLink";
import React, { useState } from "react";
// import styles from "./navbar.module.css";
import styles from "./links.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { handleGithubLogout } from "@/lib/action";

if (module.hot) {
  module.hot.accept("./links.module.css", () => {
    console.log("CSS Module Hot Reloaded");
  });
}

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  //temporary

  // const isAdmin = true;

  return (
    <div className="">
      <div className="md:flex md:gap-2 lg:gap-6 hidden items-center justify-center">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleGithubLogout}>
              <button
                // onClick={handleGithubLogout}
                className=" bg-white px-2 py-2 text-red-600 cursor-pointer font-bold">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex md:hidden">
        <AiOutlineMenu size={25} />
      </button>
      {open && (
        <div className={`!flex !md:hidden z-[99999] ${styles.mobilelinks}`}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
