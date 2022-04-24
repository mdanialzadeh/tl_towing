import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import Figure from "react-bootstrap/Figure";
import Logo from "./assets/image.PNG";

function Navtop() {
  return (
    <>
      <Container fluid="true" style={{ marginTop: "10px" }}>
        <h6 className="centered">
          For Emergency Service Call:
          <a href="tel:+15555555555" style={{ color: "white" }}>
            {" "}
            555-555-5555
          </a>
        </h6>
      </Container>
      <Container>
        <div className="topheader">
          <Figure>
            <Figure.Image
              width={150}
              height={180}
              alt="171x180"
              src={Logo}
            ></Figure.Image>
          </Figure>
          <div className="hours">
            <h6>Available 24/7</h6>
            <h6>Have an Emergency or need some help?</h6>
            <h6>
              call us at
              <a href="tel:+15555555555"> 555-555-5555</a>
            </h6>
          </div>
        </div>
      </Container>
      <Navbar
        variant="dark"
        bg="black"
        expand="md"
        sticky="top"
        collapseOnSelect
      >
        <Container
          fluid="xl"
          style={{
            backgroundColor: "black",
          }}
        >
          <Navbar.Brand href="/">T & L Towing</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Services" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">
                  Roadside Assistance
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.2">
                  24 Hour Emergency Towing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.3">
                  Private Transports
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Collision Towing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.3">
                  Blocked Driveways
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Illegally Parked Towing
                </NavDropdown.Item>
              </NavDropdown>{" "}
              <Nav.Item>
                <Nav.Link href="/Towing">Towing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/RoadSide">Road Side Assistance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Transport">Private Transport</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navtop;
