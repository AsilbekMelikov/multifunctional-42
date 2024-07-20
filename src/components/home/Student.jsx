import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Student = () => {
  const studentsData = [
    {
      studentImageUrl:
        "https://42.uz/_next/image?url=%2Fstudents%2F1580794557770.jpeg&w=128&q=75",
      studentImageSrcset:
        "https://42.uz/_next/image?url=%2Fstudents%2F1580794557770.jpeg&w=128&q=75 1x, https://42.uz/_next/image?url=%2Fstudents%2F1580794557770.jpeg&w=256&q=75 2x",
      studentImageAlt: "Shukhrat Mirrakhimov",
      studentName: "Shukhrat Mirrakhimov",
      studentPosition: "Backend Developer Intern @",
      companyImgUrl:
        "https://42.uz/_next/image?url=%2Fcompanies%2Ftoptal.png&w=128&q=75",
      companyImgSrcset:
        "https://42.uz/_next/image?url=%2Fcompanies%2Ftoptal.png&w=128&q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Ftoptal.png&w=256&q=75 2x",
      companyAlt: "TopTal brand",
      comment:
        "I am delighted to announce that I will be joining TopTal as a Back-end Engineering Intern. I would like to thank my recruiter Silvana Palacios and Azimjon Pulatov for supporting me through the whole i...",
      linkedinLink:
        "https://www.linkedin.com/posts/shux121995_internship-toptal-activity-6835889893911105536-Ojj1/?utm_source=share&utm_medium=member_desktop",
    },
    {
      studentImageUrl:
        "https://42.uz/_next/image?url=%2Fstudents%2F1652076819849.jpeg&w=128&q=75",
      studentImageSrcset:
        "https://42.uz/_next/image?url=%2Fstudents%2F1652076819849.jpeg&w=128&q=75 1x, https://42.uz/_next/image?url=%2Fstudents%2F1652076819849.jpeg&w=256&q=75 2x",
      studentImageAlt: "Mirvohid Azimov",
      studentName: "Mirvohid Azimov",
      studentPosition: "Software Engineer Intern @",
      companyImgUrl:
        "https://42.uz/_next/image?url=%2Fcompanies%2Fyandex.png&w=128&q=75",
      companyImgSrcset:
        'https://42.uz/_next/image?url=%2Fcompanies%2Fyandex.png&w=128&q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fyandex.png&w=256&q=75 2x"',
      companyAlt: "Yandex brand",
      comment:
        "I'm starting a new position as a Software Engineer Intern at Yandex! Also, my special thanks to Azimjon Pulatov and all YBKY team members for creating a pleasant community to enjoy coding!",
      linkedinLink:
        "https://www.linkedin.com/posts/ugcPost-7074797410685759488-77RB/?utm_source=share&utm_medium=member_desktop",
    },
    {
      studentImageUrl:
        "https://42.uz/_next/image?url=%2Fstudents%2F1688940135044.jpeg&w=256&q=75",
      studentImageSrcset:
        "https://42.uz/_next/image?url=%2Fstudents%2F1688940135044.jpeg&w=128&q=75 1x, https://42.uz/_next/image?url=%2Fstudents%2F1688940135044.jpeg&w=256&q=75 2x",
      studentImageAlt: "Begnazar Akhmadjonov",
      studentName: "Begnazar Akhmadjonov",
      studentPosition: "Student Developer @",
      companyImgUrl:
        "https://42.uz/_next/image?url=%2Fcompanies%2Fericsson.png&w=128&q=75",
      companyImgSrcset:
        "https://42.uz/_next/image?url=%2Fcompanies%2Fericsson.png&w=128&q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fericsson.png&w=256&q=75 2x",
      companyAlt: "Ericsson brand",
      comment:
        "I am thrilled to announce that I have embarked on a new journey as a Student Developer at Ericsson. Additionally, I am immensely grateful to Azimjon Pulatov and Mukhammadyusuf S. for providing me wit...",
      linkedinLink:
        "https://www.linkedin.com/posts/begnazarakh_bizyutdik-ericsson-activity-7079105208248598528-lQFc/?utm_source=share&utm_medium=member_desktop",
    },
    {
      studentImageUrl:
        "https://42.uz/_next/image?url=%2Fstudents%2F1688970568501.jpeg&w=128&q=75",
      studentImageSrcset:
        "https://42.uz/_next/image?url=%2Fstudents%2F1688970568501.jpeg&w=128&q=75 1x, https://42.uz/_next/image?url=%2Fstudents%2F1688970568501.jpeg&w=256&q=75 2x",
      studentImageAlt: "Javokhirbek Khaydaraliev",
      studentName: "Javokhirbek Khaydaraliev",
      studentPosition: "STEP Intern",
      companyImgUrl:
        "https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75",
      companyImgSrcset:
        'https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=256&q=75 2x"',
      companyAlt: "Google brand",
      comment:
        "I'm so excited to announce that I will be joining Google Assistant team at Google Zürich as a STEP Intern this summer.I have always been so curious about working at Google and now I am super excited",
      linkedinLink:
        "https://www.linkedin.com/posts/javokhirbek-kh_coding-google-intern-activity-7038846041785307136-_APB/?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <section id="students" className="pt-36">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="h2-semibold text-dark200_light800">
          Bizning o&apos;quvchilar
        </h2>
        <p className="paragraph-medium-18 text-light500_dark600">
          O&apos;quvchilarimiz nima deydi va ularning natijalari bilan
          tanishing.
        </p>
      </div>
      <img
        src="https://42.uz/home/heads.svg"
        alt="Student images"
        loading="lazy"
        decoding="async"
        width={820}
        height={200}
        className="mx-auto w-full md:w-2/3"
      />
      <div className="mt-8 outline-none">
        <Carousel className="w-full" plugins={[Autoplay({ delay: 2000 })]}>
          <CarouselContent>
            {studentsData.map((data, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <li
                    key={data.studentImageUrl}
                    className=" min-w-[60%] text-center"
                  >
                    <div className="px-2">
                      <div className="rounded-lg rounded-b-none border border-none shadow-sm">
                        <div className="flex flex-col items-start gap-2 rounded-b-none rounded-t-lg border bg-light-700 p-6 pt-5 dark:bg-light-500">
                          <div className="flex items-center gap-4">
                            <img
                              src={data.studentImageUrl}
                              alt={data.studentImageAlt}
                              srcSet={data.studentImageSrcset}
                              loading="lazy"
                              decoding="async"
                              width={100}
                              height={100}
                              className="size-[72px] rounded-full"
                            />
                            <div className="flex flex-col text-left">
                              <h2 className="base-semibold text-dark-200">
                                {data.studentName}
                              </h2>
                              <p className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                                <span>Student Developer @</span>
                                <img
                                  src={data.companyImgUrl}
                                  alt={data.companyAlt}
                                  srcSet={data.companyImgSrcset}
                                  loading="lazy"
                                  decoding="async"
                                  width={100}
                                  height={100}
                                  className="h-6 w-auto"
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 pb-12">
                      <div className="w-full cursor-default rounded-lg rounded-t-none border border-t-0 shadow-sm">
                        <div className="flex flex-col gap-2 p-6 pt-5 text-left">
                          <p className="base-regular text-dark200_light800">
                            {data.comment}
                          </p>
                          <div className="paragraph-semibold text-dark200_light800 flex flex-col items-start gap-1 md:flex-row md:items-center">
                            <span className="mr-2">5.0</span>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((_, index) => (
                                <svg
                                  key={index}
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  className="size-4 fill-yellow-400"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                  ></path>
                                </svg>
                              ))}
                            </div>
                            <a
                              href={data.linkedinLink}
                              className="flex items-center gap-1"
                            >
                              on LinkedIn
                              <img
                                src="/assets/send-icon.svg"
                                alt="send icon"
                                loading={"lazy"}
                                decoding="async"
                                className="size-4 dark:invert-[1]"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Student;
