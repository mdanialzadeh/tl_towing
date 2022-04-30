import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div
      className="foot"
      style={{
        padding: "0rem 0",
        borderTop: " 3px solid #930000",
        width: "100%",
      }}
    >
      <Container>
        <Row
          xs={1}
          sm={3}
          md={3}
          style={{
            justifyContent: "center",
            color: "grey",
            textAlign: "",
          }}
        >
          {" "}
          <Col lg={{ span: 2, offset: 1 }}>
            <h5>Contact Us</h5>
            <div>
              <h6>T&L Towing</h6>
              Tel: (917)-797-6184
              <br />
              <a
                style={{ color: "grey", textDecoration: "underline" }}
                href="mailto:tltowingny@gmail.com"
              >
                Tltowingny@gmail.com
              </a>
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 1 }}>
            <div style={{}}>
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
          <Col lg={{ span: 2, offset: 1 }}>
            <div style={{}}>
              <h5>Towing Services</h5>
              <ul>
                <li>24 Hour Towing</li>
                <li>Lockouts</li>
                <li>Jump Starts</li>
                <li>Tire Changes</li>
                <li>Collision Towing</li>
                <li>Private Transports</li>
                <li>Container Transports</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
