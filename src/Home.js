import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "./assets/pic1.png";
import Pic2 from "./assets/pic2.png";
import Pic3 from "./assets/pic3.png";
import Container from "react-bootstrap/Container";
import Services from "./Services";

function Home() {
  return (
    <>
      <Container
        fluid="false"
        style={{
          marginTop: "10px",
          borderTop: "4px solid black",
          borderBottom: "4px solid black",
        }}
      >
        <Carousel
          variant="dark"
          fade
          controls={false}
          indicators={false}
          interval={4000}
        >
          <Carousel.Item style={{}}>
            <img className="d-block w-100" src={Pic1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Pic2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Pic3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Services />
    </>
  );
}

export default Home;
