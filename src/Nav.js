import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import bg from "./assets/fibertop.png";
import Logo from "./assets/image.PNG";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Navtop() {
  return (
    <>
      <Container
        fluid="true"
        style={{
          position: "fixed",
          top: "0",
          zIndex: "40",
          width: "100%",
        }}
      >
        <a href="tel:+19177976184" style={{ color: "white" }}>
          <h6 className="centered">
            For Emergency Service Call : 917-797-6184
          </h6>
        </a>
      </Container>

      <Container
        fluid
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="topheader">
          <div
            style={{
              backgroundImage: `url(${Logo})`,
              height: "90%",
              marginTop: "auto",
              width: " clamp(200px, 30vw, 400px)",
              backgroundSize: "100% 100%",
            }}
          ></div>

          <div className="hours">
            <h6>Available 24/7</h6>
            <h6>Have an Emergency?</h6>
            <h6>
              call us at
              <a href="tel:+19177976184"> 917-797-6184</a>
            </h6>
          </div>
        </div>
      </Container>
      <Navbar variant="dark" expand="sm" sticky="top" collapseOnSelect>
        <Container fluid="xl" className="justify-content-end">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Link
                to="Top"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={600}
                offset={-300}
                spyThrottle={500}
                delay={0}
                isDynamic={true}
              >
                <Nav.Link onclickactive={false} active={false} eventKey={1}>
                  Home
                </Nav.Link>
              </Link>

              <Link
                to="About"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={600}
                spyThrottle={500}
                offset={-110}
                isDynamic={true}
              >
                <Nav.Link onclickactive={false} active={false} eventKey={4}>
                  About Us
                </Nav.Link>
              </Link>
              <Link
                to="Services"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={600}
                spyThrottle={500}
                offset={-110}
                isDynamic={true}
              >
                <Nav.Link onclickactive={false} active={false} eventKey={2}>
                  Services
                </Nav.Link>
              </Link>

              <Link
                to="Areas"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={600}
                spyThrottle={500}
                offset={-110}
                isDynamic={true}
              >
                <Nav.Link onclickactive={false} active={false} eventKey={3}>
                  Areas We Serve
                </Nav.Link>
              </Link>

              <Link
                to="Contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={600}
                spyThrottle={500}
                offset={-110}
                isDynamic={true}
              >
                <Nav.Link onclickactive={false} active={false} eventKey={5}>
                  Contact Us
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navtop;
