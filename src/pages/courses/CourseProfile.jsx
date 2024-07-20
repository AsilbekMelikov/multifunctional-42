import CourseContent from "./CourseContent";
import CoursePlan from "./CoursePlan";
import CourseUsers from "./CourseUsers";

const CourseProfile = () => {
  return (
    <>
      <CoursePlan />
      <CourseUsers />
      <CourseContent />
    </>
  );
};

export default CourseProfile;
