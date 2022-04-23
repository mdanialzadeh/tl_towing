import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Nav from "./Nav";
import Transport from "./Transport";
import Footer from "./Footer";
import Towing from "./Towing";
import RoadSide from "./RoadSide";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Towing" element={<Towing />} />
          <Route path="/RoadSide" element={<RoadSide />} />
          <Route path="/Transport" element={<Transport />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
