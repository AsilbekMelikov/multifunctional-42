import Button from "../shared/button/Button";

const FAQ = () => {
  return (
    <section id="inquiries" className="flex flex-col gap-12 p-8 pb-0 md:pt-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="h2-semibold text-dark300_light800">
          Sizni qiziqtira oldikmi?
        </h2>
        <p className="paragraph-medium-18 text-light500_dark600 max-w-5xl">
          Xalqaro tajribaga ega mutaxassislar bilan birga dasturlashni
          o&apos;rganishni boshlang!
        </p>
        <div className="flex w-full flex-col justify-center gap-1 py-2 md:flex-row md:gap-3">
          <Button className="base-medium btn inline-flex-center text-light800_dark300 h-10 rounded-md px-4 py-2 transition-all duration-200 ease-in-out hover:bg-opacity-90">
            Ishtirok etish
          </Button>
          <span className="light-border border-l"></span>
          <Button
            notlightning={true}
            className="base-medium inline-flex-center light-border text-dark200_light800 h-10 rounded-md border px-4 py-2 transition-all duration-200 hover:bg-light-700"
          >
            Savolingiz bormi?
          </Button>
        </div>
        <img
          src="https://42.uz/home/hero-2.svg"
          alt="Home"
          loading="lazy"
          decoding="async"
          width={620}
          height={200}
          className="mx-auto w-full md:w-3/5"
        />
      </div>
    </section>
  );
};

export default FAQ;
