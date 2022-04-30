import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      fluid
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(180deg, rgba(0,0,0,.85) 0%, rgba(0,0,0,.9) 100%)",
        paddingBottom: "4em",
      }}
    >
      <div
        style={{ padding: "2em 0 1em 0", fontSize: "1.62rem" }}
        className="divider"
      >
        Contact Us
      </div>
      <Container style={{ display: "flex !important", alignItems: "center" }}>
        <Row md={1} lg={2} className="justify-content-center">
          <Col sm="true" lg={3}>
            <div
              style={{
                color: "white",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p>
                Questions? Comments? Concerns? <br />
                Please fill out the form and someone will get back to you as
                soon as possible. or Email us directly at{" "}
                <a
                  style={{ color: "white", textDecoration: "underline" }}
                  href="mailto:tltowingny@gmail.com"
                >
                  Tltowingny@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col sm="true" lg={6}>
            <div>
              <form
                ref={form}
                onSubmit={sendEmail}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAllign: "center",
                }}
              >
                <input
                  className="txtinput"
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                />

                <input
                  className="txtinput"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                />
                <input
                  className="txtinput"
                  type="phone"
                  name="user_phone"
                  placeholder="Email"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  className="txtinput"
                  style={{ minHeight: "200px" }}
                />
                <input className="submitbtn" type="submit" value="Send" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contactus;
