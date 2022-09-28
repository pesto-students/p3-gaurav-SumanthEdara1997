/*import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
import Home from "./Home";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Home />
      <div className="container">
        <InputShortener setInputValue={setInputValue} />
        <BackgroundAnimate />
        <LinkResult inputValue={inputValue} />
      </div>
    </>
  );
}

export default App;*/
import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      <div className="container">
        <InputShortener setInputValue={setInputValue} />
        <BackgroundAnimate />
        <LinkResult inputValue={inputValue} />
      </div>
    </>
  );
}

export default App;
