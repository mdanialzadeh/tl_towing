import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import road from "./assets/road.png";
import road1 from "./assets/road1.png";
import road2 from "./assets/sport.png";
import road3 from "./assets/tow.png";
import road4 from "./assets/tow3.png";
import road5 from "./assets/trow.png";

function Services() {
  return (
    <div
      style={{
        padding: "0 0 6em 0",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "5rem",
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.8em",
          borderBottom: "2px solid rgb(124, 0, 0)",
          borderTop: "1px solid rgb(124, 0, 0)",
        }}
      >
        Towing Services
      </div>
      <Container
        style={{ color: "black", textAlign: "center", paddingTop: "4rem" }}
      >
        <Row
          lg={3}
          md={2}
          sm={1}
          style={{ justifyContent: "space-around", padding: "20px" }}
        >
          <Col sm={true}>
            <div
              className="srv"
              style={{
                backgroundImage: `url(${road})`,
              }}
            >
              Roadside Assistance
            </div>
          </Col>

          <Col sm={true}>
            <div
              className="srv"
              style={{
                backgroundImage: `url(${road1})`,
              }}
            >
              24 Hour Emergency Towing
            </div>
          </Col>
          <Col sm={true}>
            <div
              className="srv"
              style={{
                backgroundImage: `url(${road2})`,
              }}
            >
              Private Transports
            </div>
          </Col>

          <Col sm={true}>
            <div
              className="srv"
              style={{
                backgroundImage: `url(${road3})`,
              }}
            >
              Collision Towing{" "}
            </div>
          </Col>

          <Col sm={true}>
            <div
              className="srv"
              style={{
                backgroundImage: `url(${road4})`,
              }}
            >
              Blocked Drive Ways
            </div>
          </Col>
          <Col sm={true}>
            <div
              className="srv"
              style={{
                backgroundImage: `url(${road5})`,
              }}
            >
              Illegally Parked Towing
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
