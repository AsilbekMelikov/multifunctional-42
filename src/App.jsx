import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/shared/footer/Footer";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import globalEng from "./translations/eng/global.json";
import globalRu from "./translations/ru/global.json";
import globalUzb from "./translations/uzb/global.json";

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
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
