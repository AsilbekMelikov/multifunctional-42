// import { Link } from 'react-router-dom';

import Button from "../shared/button/Button";

const Features = () => {
  const featuresCards = [
    {
      imageUrl: "https://42.uz/home/features/interactive.svg",
      alt: "Interaction",
      title: "Interaktiv darslar",
      description: "O'zingizga qulay vaqtingizda dasturlashni o'rganing",
    },
    {
      imageUrl: "https://42.uz/home/features/books.svg",
      alt: "Books",
      title: "Yuqori sifatdagi darslar",
      description: " Qiziqarli darslarni 42 kun mobaynida o'rganing",
    },
    {
      imageUrl: "https://42.uz/home/features/mix.svg",
      alt: "Frontend and Backend",
      title: "Kross o'rganish imkoniyati",
      description:
        "42 kun ichida 3 yo'nalishda dasturlash asoslarini o'rganing",
    },
    {
      imageUrl: "https://42.uz/home/features/backend.svg",
      alt: "Backend",
      title: "Backend asoslari",
      description: "Backend asoslari bilan tanishing",
    },
    {
      imageUrl: "https://42.uz/home/features/frontend.svg",
      alt: "Frontend",
      title: "Frontend asoslari",
      description: "Frontend asoslari bilan tanishing",
    },
    {
      imageUrl: "https://42.uz/home/features/mobile.svg",
      alt: "Mobile",
      title: "Mobil dasturlash asoslari",
      description: "Mobil dasturlash asoslari bilan tanishing",
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
            Sizni nima kutmoqda?
          </h2>
          <p className="text-light500_dark600 paragraph-medium-18 max-w-[65%] text-left">
            Interaktiv dasturlashni o&apos;rganish muhiti orqali
            proffessionallardan dasturlash asoslarini 42 kun ichida
            o&apos;rganing!
          </p>
        </div>
        <img
          loading="lazy"
          decoding="async"
          src="https://42.uz/home/look_down.svg"
          alt="Features section"
          width={200}
          height={200}
          className="relative -mb-4 "
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
          42 kundan so&apos;ng siz dasturlash asoslari bilan tanishasiz va 3
          yo&apos;nalishdan birini tanlaysiz!
        </p>
      </div>
      <div className="flex w-full justify-center py-2">
        <Button></Button>
      </div>
    </section>
  );
};

export default Features;
