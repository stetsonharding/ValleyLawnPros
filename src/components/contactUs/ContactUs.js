import React from "react";
import "./ContactUs.scss";

//components
import ContactForm from "../contactForm/ContactForm";
import CompanyDetails from "../companyDetails/CompanyDetails";

import { Container, Row, Col } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container fluid style={{ minHeight: "800px", backgroundColor: "#4b604f" }}>
      <h1 className="contact-title">Contact.</h1>
      <hr className="contact-horizontal-line" />
      <Row>
        <div className="contact-slogan">
          <h4>Let’s talk about your ideas.</h4>
          <p>
            If you have any questions or queries we will always be happy to
            help.
          </p>
        </div>

        {/* form col */}
        <Col className="contact-form-column" sm={12} lg={6}>
          <ContactForm />
        </Col>
        {/* company details col */}
        <Col className="company-details-column" sm={12} lg={6}>
          <CompanyDetails />
        </Col>
      </Row>
    </Container>
  );
}
