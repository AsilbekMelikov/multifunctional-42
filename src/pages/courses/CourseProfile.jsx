import { useAuth } from "@clerk/clerk-react";
import CourseContent from "../../components/courses/CourseContent";
import CoursePlan from "../../components/courses/CoursePlan";
import CourseUsers from "../../components/courses/CourseUsers";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { courses } from "@/constants/courses/courseInfo";
import { myCourseInfo } from "@/constants/my-courses/myCoursesInfo";

const CourseProfile = () => {
  const [disableButton, setDisableButton] = useState("");
  const { id } = useParams();
  const { isLoaded, userId } = useAuth();
  const navigate = useNavigate();

  const [courseDetailData, setCourseDetailData] = useState([]);

  useEffect(() => {
    const courseDetailOne = courses.find((item) => item.id === id);
    setCourseDetailData(courseDetailOne);
  }, [id]);

  const handleSubmit = () => {
    if (isLoaded && !userId) {
      navigate("/sign-up");
    } else {
      myCourseInfo.push(courseDetailData);
      setDisableButton("Success");
    }
  };
  console.log(myCourseInfo);

  return (
    <>
      <CoursePlan />
      <CourseUsers separateCourseData={courseDetailData} />
      <CourseContent />
      <Button
        type="button"
        onClick={handleSubmit}
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className="base-semibold btn inline-flex-center text-light800_dark300 mb-5 h-11 rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90 disabled:bg-dark-200/80 disabled:dark:bg-light-800/80 md:py-8"
        disabled={
          myCourseInfo.find((item) => item.id === id) ||
          disableButton === "Success"
        }
      >
        {myCourseInfo.find((item) => item.id === id) ||
        disableButton === "Success"
          ? "Qo'shildi"
          : "Mening kurslarimga qo'shish"}
      </Button>
    </>
  );
};

export default CourseProfile;
