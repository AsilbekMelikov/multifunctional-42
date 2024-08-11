/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { useTranslation } from "react-i18next";
import Button from "../shared/button/Button";

export const FAQ = () => {
  const [t] = useTranslation("global");

  return (
    <section id="inquiries" className="flex flex-col gap-12 p-8 pb-0 md:pt-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="h2-semibold text-dark200_light800">{t("faq.title")}</h2>
        <p className="paragraph-medium-18 text-light500_dark600 max-w-5xl">
          {t("faq.paragraph")}
        </p>
        <div className="flex w-full flex-col justify-center gap-1 py-2 md:flex-row md:gap-3">
          <Button className="base-medium btn inline-flex-center text-light800_dark300 h-10 rounded-md px-4 py-2 transition-all duration-200 ease-in-out hover:bg-opacity-90">
            {t("faq.button1")}
          </Button>
          <span className="light-border border-l"></span>
          <Button
            notlightning={true}
            className="base-medium inline-flex-center light-border text-dark200_light800 h-10 rounded-md border px-4 py-2 transition-all duration-200 hover:bg-light-700 dark:hover:bg-dark-500"
          >
            {t("faq.button2")}
          </Button>
        </div>
        <img
          src="https://42.uz/home/hero-2.svg"
          alt="Home"
          loading="lazy"
          decoding="async"
          width={620}
          height={200}
          className="mx-auto w-full dark:invert-[0.9] md:w-3/5"
        />
      </div>
    </section>
  );
};
