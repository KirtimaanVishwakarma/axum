import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Investor from "./components/Investor.js";
import Company from "./components/Company.js";
import Enabler from "./components/Enabler.js";
import About from "./components/About.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/company" element={<Company />} />
          <Route path="/enabler" element={<Enabler />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
