import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "./assets/pic1.png";
import Pic2 from "./assets/pic2.png";
import Pic3 from "./assets/pic3.png";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <div>
      <Container
        fluid="true"
        style={{
          padding: "2em 0",
          background:
            "linear-gradient(180deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.9) 100%)",
        }}
      >
        <Carousel
          style={{
            maxWidth: "2000px",
            margin: "auto",
          }}
          variant="dark"
          fade
          controls={false}
          indicators={false}
          interval={4000}
        >
          <Carousel.Item>
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
    </div>
  );
}

export default Home;
