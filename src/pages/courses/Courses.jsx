// import React from "react";

import { useEffect, useState } from "react";
import Button from "../../components/shared/button/Button";
import { courses } from "@/constants/courses/courseInfo";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    setCoursesData(courses);
  }, []);

  return (
    <section id="courses" className="flex flex-col gap-5 pb-10">
      <h2 className="h2-semibold-30 text-dark200_light800">Kurslar</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {coursesData?.map((data) => {
          return (
            <div
              key={data.id}
              className="light-border background-light900_dark500 flex flex-col justify-between rounded-lg border shadow-sm"
            >
              <img
                src={data.imageUrl}
                alt={data.imageAlt}
                srcSet={data.imageSrcset}
                loading="lazy"
                decoding="async"
                className="w-full rounded-t-md object-cover"
                width={300}
                height={300}
              />
              <div className="flex flex-col space-y-2 p-6">
                <h3 className="h3-semibold-24 text-dark200_light800">
                  {data.title}
                </h3>
                <p className="base-medium text-light500_dark600">
                  Mentor: {data.mentor}
                </p>
                <p className="paragraph-medium-16 text-dark200_light800 flex flex-wrap items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M2 3h20"></path>
                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                    <path d="m7 21 5-5 5 5"></path>
                  </svg>
                  Darslar soni: {data.lessonCount}
                </p>
              </div>
              <div className="p-6 pt-0">
                <Button
                  notlightning={true}
                  navigation={`/courses/${data.id}`}
                  // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                  className="base-medium btn inline-flex-center text-light800_dark300 h-11 w-full rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90"
                >
                  Kursga o&apos;tish
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
