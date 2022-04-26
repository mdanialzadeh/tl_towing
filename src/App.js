import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Nav from "./Nav";

import Footer from "./Footer";
import Contact from "./Contactus";
import Towing from "./Towing";
import RoadSide from "./RoadSide";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bg from "./assets/fiber.png";

function App() {
  return (
    <Router>
      <Nav />
      <div
        className="App"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Towing" element={<Towing />} />
          <Route path="/RoadSide" element={<RoadSide />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
