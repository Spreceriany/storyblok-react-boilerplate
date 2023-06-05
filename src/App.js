import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Gallery2 from "./pages/Gallery2";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PricePage from "./pages/PricePage";
import FaqPage from "./pages/FaqPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <div className=" flex">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage className="w-full" />}></Route>
          {/* <Route path="/about" element={<AboutPage />}></Route> */}
          <Route path="/gallery" element={<Gallery2 />}></Route>
          {/* <Route path="/contact" element={<ContactPage />}></Route> */}
          {/* <Route path="/price" element={<PricePage />}></Route>
          <Route path="/faq" element={<FaqPage />}></Route>
          <Route path="/philosophy" element={<PhilosophyPage />}></Route>
          <Route exact path="/blogs" element={<BlogPage />}></Route> */}
        </Routes>
      </div>
    </>
  );
}
export default App;
