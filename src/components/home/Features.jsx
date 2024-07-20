import { useTranslation } from "react-i18next";
import Button from "../shared/button/Button";

const Features = () => {
  const [t] = useTranslation("global");

  const featuresCards = [
    {
      imageUrl: "https://42.uz/home/features/interactive.svg",
      alt: "Interaction",
      title: t("features.cards.interaction.title"),
      description: t("features.cards.interaction.description"),
    },
    {
      imageUrl: "https://42.uz/home/features/books.svg",
      alt: "Books",
      title: t("features.cards.books.title"),
      description: t("features.cards.books.description"),
    },
    {
      imageUrl: "https://42.uz/home/features/mix.svg",
      alt: "Frontend and Backend",
      title: t("features.cards.full.title"),
      description: t("features.cards.full.description"),
    },
    {
      imageUrl: "https://42.uz/home/features/backend.svg",
      alt: "Backend",
      title: t("features.cards.backend.title"),
      description: t("features.cards.backend.description"),
    },
    {
      imageUrl: "https://42.uz/home/features/frontend.svg",
      alt: "Frontend",
      title: t("features.cards.frontend.title"),
      description: t("features.cards.frontend.description"),
    },
    {
      imageUrl: "https://42.uz/home/features/mobile.svg",
      alt: "Mobile",
      title: t("features.cards.mobile.title"),
      description: t("features.cards.mobile.description"),
    },
  ];

  return (
    <section
      id="features"
      className="py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="flex flex-col items-end md:flex-row">
        <div className="flex flex-col items-start space-y-4 py-4 text-left">
          <h2 className="h2-semibold text-dark200_light800">
            {t("features.title")}
          </h2>
          <p className="text-light500_dark600 paragraph-medium-18 max-w-[65%] text-left">
            {t("features.paragraph")}
          </p>
        </div>
        <img
          loading="lazy"
          decoding="async"
          src="https://42.uz/home/look_down.svg"
          alt="Features section"
          width={200}
          height={200}
          className="relative -mb-4 dark:invert-[0.9] "
        />
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        {featuresCards.map((feature) => {
          return (
            <div
              key={feature.alt}
              className="background-light900_dark500 light-border cursor-default rounded-lg border p-2 transition-all duration-200 ease-in-out hover:shadow-lg"
            >
              <div className="flex flex-col justify-between gap-3 rounded-md p-6">
                <img
                  src={feature.imageUrl}
                  alt={feature.alt}
                  decoding="async"
                  loading={"lazy"}
                  width={200}
                  height={200}
                  className="size-20 dark:invert-[0.9]"
                />
                <div className="space-y-2">
                  <h5 className="base-bold text-dark200_light800">
                    {feature.title}
                  </h5>
                  <p className="base-medium text-light500_dark600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto pb-4 pt-12 text-center md:max-w-2xl">
        <p className="paragraph-medium-18 text-light500_dark600">
          {t("features.subParagraph")}
        </p>
      </div>
      <div className="flex w-full justify-center py-2">
        <Button> {t("features.button")}</Button>
      </div>
    </section>
  );
};

export default Features;
