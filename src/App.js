import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Gallery2 from "./pages/Gallery2";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PricePage from "./pages/PricePage";

function App() {
  return (
    <>
      <div className=" flex">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage className="w-full" />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/gallery" element={<Gallery2 />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/price" element={<PricePage />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
