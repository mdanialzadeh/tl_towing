import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Contact from "./Contactus";
import Areas from "./Areas";
import { BrowserRouter as Router } from "react-router-dom";
import bg from "./assets/fiber.png";
import { Element, animateScroll as scroll } from "react-scroll";
import Services from "./Servicesx";
import About from "./About";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div
          className="App"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(20px)",
          }}
        >
          <Element name="Top" className="element">
            <Home />
          </Element>
          <Element name="About" className="element">
            <About />
          </Element>
          <Element name="Services" className="element">
            <Services />
          </Element>
          <Element name="Areas" className="element">
            <Areas />
          </Element>
          <Element name="Contact" className="element">
            <Contact />
          </Element>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
