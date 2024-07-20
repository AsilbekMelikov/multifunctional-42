import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/shared/footer/Footer";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import globalEng from "./translations/eng/global.json";
import globalRu from "./translations/ru/global.json";
import globalUzb from "./translations/uzb/global.json";
import Courses from "./pages/courses/Courses";
import CourseProfile from "./pages/courses/CourseProfile";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import MyCourses from "./pages/my-courses/MyCourses";
import MyCoursesProfile from "./pages/my-courses/MyCoursesProfile";
import FaqPage from "./pages/FaqPage";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "uz",
  resources: {
    uz: {
      global: globalUzb,
    },
    ru: {
      global: globalRu,
    },
    eng: {
      global: globalEng,
    },
  },
});

function App() {
  const pathname = useLocation().pathname;
  return (
    <I18nextProvider i18n={i18next}>
      <div className="background-light900_dark200 pt-20">
        {pathname === "/sign-up" || pathname === "/sign-in" ? "" : <Navbar />}
        <div className="container  min-h-[60vh] w-full max-w-[1304px] px-5">
          <main
            className={`flex flex-col ${(pathname === "/sign-up" || pathname === "/sign-in") && "items-center justify-center"} gap-4 pt-9`}
          >
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path={"/courses"} element={<Courses />} />
              <Route path={"/my-courses"} element={<MyCourses />} />
              <Route path={"/my-courses/:id"} element={<MyCoursesProfile />} />
              <Route path={"/courses/:id"} element={<CourseProfile />} />
              <Route path={"/faq"} element={<FaqPage />} />
            </Routes>
          </main>
        </div>
        {pathname === "/sign-up" || pathname === "/sign-in" ? "" : <Footer />}
      </div>
    </I18nextProvider>
  );
}

export default App;
