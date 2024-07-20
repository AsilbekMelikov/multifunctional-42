import { footerNavs, socialMediaInfo } from "@/constants/footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer
      id="footer"
      className="background-light900_dark200 light-border border-t"
    >
      <div className="container max-w-[1304px] px-6 py-20 sm:py-12 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNavs.map((nav) => {
            return (
              <div key={nav.path} className="flex-center pb-6">
                <Link
                  to={nav.path}
                  className="inline-flex-center base-medium text-dark200_light800 h-10 px-4 py-2 underline-offset-4 hover:underline"
                >
                  {t(nav.label)}
                </Link>
              </div>
            );
          })}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {socialMediaInfo.map((media) => {
            return (
              <Link to={media.destination} key={media.destination}>
                <span className="sr-only">{media.label}</span>
                <img
                  src={media.image}
                  alt={media.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-6"
                  width={24}
                  height={24}
                />
              </Link>
            );
          })}
        </div>
        <p className="mt-10 text-center text-[12px] leading-5 text-dark-200/60 dark:text-white">
          {t("footer.protection")}
        </p>
        <div className="flex-center gap-2 text-[12px] text-dark-200/80 dark:text-white/70">
          {t("footer.policy")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
