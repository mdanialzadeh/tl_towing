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
    <Container style={{ paddingTop: "4em" }}>
      <Row sm={1} md={2}>
        <Col sm="true">
          <div style={{ color: "WHITE" }}>
            BEFORE CONTACTING US Send us your information by filling out the
            short contact form and we will get in touch with you right away or
            you can contact us at (347) 695-8447 CONTACT INFORMATION 14367 226th
            Street Jamaica, NY 11413 (347) 695-8447 24/7 Availability
          </div>
        </Col>
        <Col>
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
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Full Name" />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactus;
