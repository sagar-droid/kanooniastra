"use client";
import NavLink from "./navLink/NavLink";
import React, { useState } from "react";
// import styles from "./navbar.module.css";
import styles from "./links.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { handleGithubLogout } from "../../../lib/action";
import { practiceAreaData } from "../../../component/page-components/practice-area/utils";

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
    title: "Services",
    path: "/services",
    dropdown: practiceAreaData.map((area) => ({
      title: area.topic,
      path: `/practice-area/${area.slug}`,
    })),
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
          <div
            key={link.title}
            className="relative group text-white hover:bg-white hover:text-black rounded-full">
            <NavLink item={link} />
            {link.dropdown && (
              <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-md mt-1 min-w-[300px] py-2 rounded-md">
                {link.dropdown.map((subLink) => (
                  <NavLink
                    key={subLink.title}
                    item={subLink}
                    className="block px-4 py-2 text-black hover:bg-black hover:text-white"
                  />
                ))}
              </div>
            )}
          </div>
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
            <React.Fragment key={link.title}>
              <NavLink item={link} />
              {link.dropdown && (
                <div className="pl-4">
                  {link.dropdown.map((subLink) => (
                    <NavLink
                      key={subLink.title}
                      item={subLink}
                      className="block py-2"
                    />
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
