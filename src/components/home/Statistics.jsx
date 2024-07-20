import { useTranslation } from "react-i18next";

const Statistics = () => {
  const [t] = useTranslation("global");

  const statisticsData = [
    {
      label: t("statistics.cards.experience.term"),
      data: t("statistics.cards.experience.data"),
    },
    {
      label: t("statistics.cards.studentCount.term"),
      data: t("statistics.cards.studentCount.data"),
    },
    {
      label: t("statistics.cards.lessonCount.term"),
      data: t("statistics.cards.lessonCount.data"),
    },
  ];

  return (
    <section id="statistics">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="h2-semibold text-dark200_light800">
          {t("statistics.title")}
        </h2>
        <p className="text-light500_dark600 paragraph-medium-18">
          {t("statistics.paragraph")}
        </p>
      </div>
      <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {statisticsData.map((statistic) => {
          return (
            <div
              key={statistic.data}
              className="background-light700_dark500 flex cursor-default flex-col gap-4 rounded-lg px-4  py-5 transition-all duration-200 hover:shadow-md"
            >
              <dt className="text-dark200_light800 paragraph-medium truncate">
                {statistic.label}
              </dt>
              <dd className="h3-semibold text-dark200_light800 mt-1">
                {statistic.data}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
};

export default Statistics;
