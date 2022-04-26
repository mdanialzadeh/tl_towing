import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "./assets/map.png";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Container
      className="foot"
      fluid
      style={{
        background: "rgb(0 0 0)",
        padding: "1rem 0",
        borderTop: " 3px solid red",
      }}
    >
      <Container>
        <Row
          style={{
            padding: "1rem 0rem",
            color: "white",
            bottom: "0",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Col lg={3} style={{ margin: "1rem 0" }}>
            <h5>Contact Us</h5>
            <div>
              <h6>T&L Towing</h6>
              1123 Adress street <br />
              City, New York 12345
              <br />
              Tel: 555-555-5555
              <br />
              Email: Email@adress.com
            </div>
          </Col>

          <Col lg={3} style={{ margin: "0rem 0" }}>
            <Figure>
              <Figure.Image width={300} height={300} alt="171x180" src={map} />
            </Figure>
          </Col>
          <Col lg={4} style={{ margin: "1rem 0" }}>
            <h5>About Us</h5>
            <div>
              Serving Your Community for 40 Years. Ray's Towing proudly serves
              Sea Cliff, Glen Cove, Glenwood Landing, Glen Head, Brookville Old
              Brookville, Locust Valley, Lattingtown, Matinecock, Bayville,
              Roslyn, and the surrounding communities for over 40 years.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
