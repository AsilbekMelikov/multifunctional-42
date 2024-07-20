import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
