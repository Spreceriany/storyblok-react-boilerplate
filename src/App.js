import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Gallery2 from "./pages/Gallery2";

function App() {
  return (
    <>
      <div className=" flex">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage className="w-full" />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery2 />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
