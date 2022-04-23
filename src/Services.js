import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Services() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "10vh",
          background: "black",
          marginTop: "4em",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ textDecoration: "underline" }}>Towing Services</h4>
      </div>
      <Container
        fluid="xl"
        style={{ padding: "4rem 0rem", color: "white", textAlign: "center" }}
      >
        <Row className="justify-content-md-center">
          <Col>
            <div
              style={{
                height: "300px",
                width: "300px",
                background: "black",
                margin: "20px auto",
              }}
            >
              Roadside Assistance
            </div>
          </Col>
          <Col>
            <div
              style={{
                height: "300px",
                width: "300px",
                background: "black",
                margin: "20px auto",
              }}
            >
              24 Hour Emergency Towing
            </div>
          </Col>
          <Col>
            <div
              style={{
                height: "300px",
                width: "300px",
                background: "black",
                margin: "20px auto",
              }}
            >
              Private Transports
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <div
              style={{
                height: "300px",
                width: "300px",
                background: "black",
                margin: "20px auto",
              }}
            >
              Collision Towing{" "}
            </div>
          </Col>
          <Col>
            <div
              style={{
                height: "300px",
                width: "300px",
                background: "black",
                margin: "20px auto",
              }}
            >
              Blocked Drive Way Towing
            </div>
          </Col>
          <Col>
            <div
              style={{
                height: "300px",
                width: "300px",
                background: "black",
                margin: "20px auto",
              }}
            >
              Illegally Parked Towing
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
