import React from "react";
import Container from "react-bootstrap/Container";

function RoadSide() {
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
        <h3 style={{ textDecoration: "underline" }}>Road Side Assistance</h3>
      </div>
      <Container></Container>
    </>
  );
}

export default RoadSide;
