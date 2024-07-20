import { Route, Routes } from "react-router-dom";
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
  return (
    <I18nextProvider i18n={i18next}>
      <div className="background-light900_dark200 pt-20">
        <Navbar />
        <div className="container min-h-[60vh] w-full max-w-[1304px] px-5">
          <main className="flex flex-col gap-4 pt-9">
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/courses"} element={<Courses />} />
              <Route path={"/courses/:id"} element={<CourseProfile />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
