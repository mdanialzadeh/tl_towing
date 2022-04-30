import React from "react";
import Container from "react-bootstrap/Container";

function RoadSide() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Container fluid style={{ padding: "10vh 0" }}>
        <div className="headers">Road Side Assistance</div>
      </Container>
      <Container
        fluid
        style={{
          height: "100%",
          color: "white",
          padding: "2em",
        }}
      >
        <div>
          Has your vehicle broken down in the middle of the road? Require
          roadside assistance? If your answer to any of these questions is yes,
          then you don’t need to worry. Towing Queens is ready to provide its
          service of Roadside Assistance.
        </div>
        <h4>Services Include:</h4>
        <ul>
          <li>Lock out Services</li>
          <li>Tire Changes / Plugs</li>
          <li>Jump Starts</li>
        </ul>
      </Container>
    </div>
  );
}

export default RoadSide;
