// import React from "react";
import { Link, useLocation } from "react-router-dom";
import Theme from "./Theme";

const Navbar = () => {
  const pathname = useLocation().pathname;

  const navigationLinks = [
    {
      label: "Bosh sahifa",
      path: "/",
    },
    {
      label: "Kurslar",
      path: "/courses",
    },
    {
      label: "Taklifimiz",
      path: "/suggestions",
    },
    {
      label: "Jamoa",
      path: "/group",
    },
    {
      label: "O'quvchilar",
      path: "/students",
    },
    {
      label: "FAQ",
      path: "/faq",
    },
  ];

  return (
    <header className="background-light900_dark200 light-border fixed top-0 z-50 w-full border-b">
      <div className="container max-w-[1304px] py-4">
        <nav className="flex items-center justify-between">
          <div className="">
            <Link to={"/"} className="">
              <img
                src="/assets/42-logo.svg"
                className="size-12 dark:invert-[1]"
                alt="site logo"
                width={48}
                height={48}
              />
            </Link>
          </div>
          <ul className="flex gap-1">
            {navigationLinks.map((link) => {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`base-medium inline-flex-center h-10 ${pathname === link.path ? "bg-light-700 text-dark-200" : "text-dark200_light800 bg-transparent"} rounded-md px-4 py-2`}
                >
                  {link.label}
                </Link>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <Link
              to={"/"}
              className="btn base-medium text-light800_dark300 inline-flex-center h-11 rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90"
            >
              <img
                src="/assets/lightning.svg"
                alt="lightning"
                className="mr-2 size-4 dark:invert-[0.9]"
              />
              Kirish
            </Link>
            <Theme />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
