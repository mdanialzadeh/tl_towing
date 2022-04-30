import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./assets/image.PNG";
import { useSpring, animated } from "react-spring";

function About() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <div
      style={{
        color: "white",
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(180deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.85) 100%)",
        padding: "2rem 0",
      }}
    >
      <div
        style={{ paddingBottom: "2rem", fontSize: "1.72rem" }}
        className="divider"
      >
        About Us
      </div>
      <Container>
        <Row
          md={2}
          className="justify-content-between"
          style={{ alignItems: "center" }}
        >
          <Col md={4}>
            {" "}
            <animated.div
              style={{
                props,
                backgroundImage: `url(${Logo})`,
                height: " clamp(200px, 20vw, 300px)",
                marginTop: "auto",

                backgroundSize: "100% 100%",
              }}
            ></animated.div>
          </Col>
          <Col md={8}>
            <p style={{ width: "90%", margin: "auto" }}>
              We are T & L Towing, a roadside assistance and towing company
              serving the NY Tri-state Area and Long Island. We provide towing
              services for all vehicles including large trucks heavy duty towing
              and medium duty towing. If you own it we can tow it. We are your
              one stop shop for all your tow truck company and towing service
              needs. Our reputation for quality towing and excellent roadside
              assistance has consistently made us the best-rated tow truck
              company in the Tri-state Area. Our customers are always surprised
              when they receive both fast and cheap towing.
            </p>
          </Col>
        </Row>
        <div style={{ textAlign: "", width: "90%", margin: "auto" }}>
          We Accept all major insurances including but not limited to Geico,
          Allstate, and State Farm.{" "}
        </div>
      </Container>
    </div>
  );
}

export default About;
