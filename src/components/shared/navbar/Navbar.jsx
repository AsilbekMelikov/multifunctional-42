// import React from "react";
import { Link, useLocation } from "react-router-dom";
import Theme from "./Theme";
import { useTranslation } from "react-i18next";
import Translation from "./Translation";
import { navigationLinks } from "@/constants/navbar";

const Navbar = () => {
  const pathname = useLocation().pathname;

  const [t] = useTranslation("global");

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
                  className={`base-medium inline-flex-center h-10 ${pathname === link.path || (pathname.includes(link.path) && link.path.length > 1) ? "bg-light-700 text-dark-200" : "text-dark200_light800 bg-transparent"} rounded-md px-4 py-2`}
                >
                  {t(link.label)}
                </Link>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            <Link
              to={"/"}
              className="btn base-medium text-light800_dark300 inline-flex-center h-11 rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90"
            >
              <img
                src="/assets/lightning.svg"
                alt="lightning"
                className="mr-2 size-4 dark:invert-[0.9]"
              />
              {t("navbar.button.name")}
            </Link>
            <Theme />
            <Translation />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
