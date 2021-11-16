import React from "react";
import "./ContactUs.scss";

//components
import ContactForm from "../contactForm/ContactForm";

import { Container, Row, Col } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container fluid style={{ minHeight: "800px" }}>
      <h1 className="contact-title">Contact.</h1>
      <hr />
      <Row>
        <div className="contact-slogan">
          <h4>Let’s talk about your ideas.</h4>
          <p>
            If you have any questions or querires we will always be happy to
            help.
          </p>
        </div>

        {/* form col */}
        <Col
          style={{
            backgroundColor: "pink",
            margin: "0 auto",
            minHeight: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ContactForm />
        </Col>
        {/* company details col */}
        <Col></Col>
      </Row>
    </Container>
  );
}
