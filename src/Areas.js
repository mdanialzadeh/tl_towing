import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "./assets/map.png";

function Areas() {
  return (
    <div
      style={{
        color: "white",

        background:
          "linear-gradient(180deg, rgba(0,0,0,.85) 0%, rgba(0,0,0,.85) 100%)",
        padding: "2rem 0",
      }}
    >
      <div
        style={{ paddingBottom: "2rem", fontSize: "1.62rem" }}
        className="divider"
      >
        Service Areas
      </div>
      <div
        style={{
          paddingBottom: "2rem",
          textAlign: "center",
          width: "90%",
          margin: "auto",
        }}
      >
        Our Trucks are always around when you need us and quick to respond to
        any emergency.{" "}
      </div>
      <Container>
        <Row
          md={2}
          className="justify-content-between"
          style={{ alignItems: "center" }}
        >
          <Col md={{ span: 3, offset: 2 }}>
            <div style={{ width: "90%", margin: "auto" }}>
              <h5>Service Areas</h5>
              <ul>
                <li>Nassau County</li>
                <li>Suffolk County</li>
                <li>Bronx</li>
                <li>Brooklyn</li>
                <li>Manhattan</li>
                <li>Queens</li>
                <li>Staten Island</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            {" "}
            <div
              style={{
                backgroundImage: `url(${Map})`,
                height: " clamp(300px, 20vw, 300px)",
                maxWidth: "400px",
                marginTop: "auto",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Areas;
