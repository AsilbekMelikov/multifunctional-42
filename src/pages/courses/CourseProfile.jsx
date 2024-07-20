import { SignedIn } from "@clerk/clerk-react";
import CourseContent from "../../components/courses/CourseContent";
import CoursePlan from "../../components/courses/CoursePlan";
import CourseUsers from "../../components/courses/CourseUsers";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseProfile = () => {
  const [myCoursesData, setMyCourseData] = useState([]);
  const [disableButton, setDisableButton] = useState("");
  const { id } = useParams();

  const { request } = useFetch();

  const [separateCourseData, setSeperateCourseData] = useState([]);

  useEffect(() => {
    request(`http://localhost:3001/courses/${id}`)
      .then((data) => setSeperateCourseData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    request(`http://localhost:3001/my-courses`)
      .then((data) => setMyCourseData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = () => {
    request(
      "http://localhost:3001/my-courses",
      "POST",
      JSON.stringify(separateCourseData)
    )
      .then((response) => setDisableButton("Success"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <CoursePlan />
      <CourseUsers separateCourseData={separateCourseData} />
      <CourseContent />
      <SignedIn>
        <button
          type="button"
          onClick={handleSubmit}
          className="base-semibold btn inline-flex-center text-light800_dark300 h-11 rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90 disabled:bg-dark-200/80 disabled:dark:bg-light-800/80 md:py-8"
          disabled={
            myCoursesData.find((item) => item.id === id) ||
            disableButton === "Success"
          }
        >
          Mening kurslarim qo&apos;shish
        </button>
      </SignedIn>
    </>
  );
};

export default CourseProfile;
