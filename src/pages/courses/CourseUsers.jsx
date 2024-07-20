import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseUsers = () => {
  const { id } = useParams();

  const [separateCourseData, setSeperateCourseData] = useState([]);

  const { request } = useFetch();

  useEffect(() => {
    request(`http://localhost:3001/courses/${id}`)
      .then((data) => setSeperateCourseData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="pt-20">
      <div>
        <h2 className="h3-semibold text-dark200_light800 mb-12">
          Kurs kimlar uchun?
        </h2>
        <div className="grid grid-cols-1 gap-6 pt-0 md:gap-8 md:pt-2 lg:grid-cols-2 xl:grid-cols-3 ">
          {separateCourseData?.courseUsers?.map((data, index) => {
            return (
              <div key={data.job} className="flex flex-col items-start">
                <p className="text-dark200_light800 mb-6 text-5xl">{`0${index + 1}`}</p>
                <p className="h3-semibold-24 text-dark200_light800 mb-4">
                  {data.job}
                </p>
                <p className="paragraph-medium-16 text-light500_dark600">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseUsers;
