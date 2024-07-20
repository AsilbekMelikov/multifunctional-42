const Group = () => {
  const groupCardsData = [
    {
      memberImage:
        "https://42.uz/_next/image?url=%2Fauthors%2Fazimjon.jpg&w=128&q=75",
      memberImageAlt: "Azimjon Po'latov",
      memberName: "Azimjon Po'latov",
      linkedinProfileLink: "https://www.linkedin.com/in/azimjon-pulatov",
      memberPosition: "Software Engineer @ Google, Ex-Amazon, Ex-Facebook",
      pastCompanyImages: [
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75",
          alt: "Google",
        },
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Famazon.png&w=128&q=75",
          alt: "Amazon",
        },
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Fmeta.png&w=128&q=75",
          alt: "Meta",
        },
      ],
    },
    {
      memberImage:
        "https://42.uz/_next/image?url=%2Fauthors%2Fyusuf-mobile.jpg&w=128&q=75",
      memberImageAlt: "Muhammadyusuf Abdullaev",
      memberName: "Muhammadyusuf Abdullaev",
      linkedinProfileLink: "https://www.linkedin.com/in/yusuf-abdullaev",
      memberPosition:
        "Ex-Senior Android Developer @ CAFU, Noon & Super Unlimited Inc.",
      pastCompanyImages: [
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Fcafu.png&w=128&q=75",
          alt: "CAFU",
        },
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Fnoon.png&w=128&q=75",
          alt: "Noon",
        },
      ],
    },
    {
      memberImage:
        "https://42.uz/_next/image?url=%2Fauthors%2Fyusuf-front.jpg&w=128&q=75",
      memberImageAlt: "Mukhammadyusuf Abdurakhimov",
      memberName: "Mukhammadyusuf Abdurakhimov",
      linkedinProfileLink: "https://www.linkedin.com/in/mrabdurakhimov",
      memberPosition:
        "Ex-Software Engineer @ EPAM Systems & Ex-CTO & Optochka Inc.",
      pastCompanyImages: [
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Fepam.png&w=128&q=75",
          alt: "Google",
        },
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Foptochka.png&w=256&q=75",
          alt: "Optochka",
        },
      ],
    },
    {
      memberImage:
        "https://42.uz/_next/image?url=%2Fauthors%2Fyusuf-devops.png&w=128&q=75",
      memberImageAlt: "Muhammadyusuf Saliev",
      memberName: "Muhammadyusuf Saliev",
      linkedinProfileLink: "https://www.linkedin.com/in/muhammadyusuf-saliev",
      memberPosition:
        "Infrastructure Engineering Intern at Toptal & Ex-Proxima",
      pastCompanyImages: [
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Ftoptal.png&w=128&q=75",
          alt: "Toptal",
        },
        {
          src: "https://42.uz/_next/image?url=%2Fcompanies%2Fproxima.png&w=128&q=75",
          alt: "Proxima",
        },
        {
          src: "https://42.uz/companies/udevs.svg",
          alt: "Udevs",
        },
      ],
    },
  ];

  return (
    <section id="group" className="space-y-6 pt-36 dark:bg-transparent">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center ">
        <h2 className="h2-semibold text-dark200_light800">Jamoa</h2>
        <p className="paragraph-medium-18 text-light500_dark600 max-w-[85%]">
          Xalqaro tajribaga ega mutaxassislar bilan birga dasturlashni
          o&apos;rganing
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {groupCardsData.map((data) => {
          return (
            <div
              key={data.memberImage}
              className="light-border background-light900_dark500 cursor-default rounded-lg border shadow-sm transition-all duration-200 ease-in-out hover:bg-light-700 dark:hover:bg-transparent"
            >
              <div className="flex flex-col items-center gap-2 space-y-1.5 p-6 text-center">
                <img
                  src={data.memberImage}
                  alt={data.memberImageAlt}
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <h3 className="h3-semibold-24 text-dark200_light800">
                  {data.memberName}
                  <a
                    href={data.linkedinProfileLink}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 inline-block size-4"
                  >
                    <img
                      src="/assets/linkedin.svg"
                      alt="Linkedin profile"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </h3>
                <p className="text-light500_dark600 base-medium">
                  {data.memberPosition}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 border-t p-6 pt-4">
                {data.pastCompanyImages.map((image) => {
                  return (
                    <img
                      key={image.alt}
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      width={120}
                      height={24}
                      className="h-8 object-contain dark:rounded-md dark:bg-light-700 dark:p-1"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Group;
