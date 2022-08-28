import React, { useState } from "react";
import { animated, useSprings } from "react-spring";
import cards from "./servicecards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Servicesx() {
  const [index, setIndex] = useState(null);
  const [isDelayed, setIsDelayed] = useState(true);

  const springs = useSprings(
    cards.length,
    cards.map((item, i) => ({
      delay: isDelayed ? 250 * i : 0,
      opacity: 1,
      transform: "translateY(0px)",
      overlayOpacity: i === index ? 0.9 : 0.9,
      textOpacity: i === index ? 1 : 0,
      textHeight: i === index ? "240px" : "0px",
      height: i === index ? "160px" : "400px",
      overflow: i === index ? "hidden" : "hidden",

      from: {
        opacity: 0,
        transform: "translateY(10px)",
        overlayOpacity: 0.9,
        textOpacity: 0,
        overflow: "hidden",
        height: "400px",
      },
    }))
  );

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
        Services
      </div>
      <Container style={{ maxWidth: "1800px" }}>
        <Row lg={3} md={2} sm={1} style={{}}>
          {springs.map(
            (
              {
                opacity,
                transform,
                overlayOpacity,
                textOpacity,
                textHeight,
                height,
                overflow,
              },
              i
            ) => (
              <Col sm={true} style={{ boxshadow: "0px 0px 12px 12px white" }}>
                <animated.div
                  style={{
                    opacity,
                    border: "3px solid white",
                    background: "black",
                    overflow,
                  }}
                >
                  <div
                    style={{ height: "400px" }}
                    onClick={() => {
                      setIndex(i);
                      setIsDelayed(false);
                    }}
                    key={i}
                  >
                    <animated.div
                      style={{
                        height,
                        opacity,
                        transform,
                        backgroundImage: `url(${cards[i].url})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <animated.h4
                        className="titlewrapper"
                        style={{ opacity: overlayOpacity }}
                      >
                        {cards[i].title}
                      </animated.h4>
                    </animated.div>
                    <animated.div
                      style={{
                        overflow,
                        height: textHeight,
                        opacity,
                      }}
                    >
                      <animated.div
                        style={{
                          opacity: textOpacity,
                          overflow,
                          height: textHeight,
                        }}
                      >
                        <animated.div
                          classname="textwrapper"
                          style={{
                            opacity: textOpacity,
                            overflow,
                            textAlign: "center",
                            margin: "8% 5% auto 5%",
                          }}
                        >
                          {cards[i].text}
                        </animated.div>
                      </animated.div>
                    </animated.div>
                  </div>
                </animated.div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Servicesx;
