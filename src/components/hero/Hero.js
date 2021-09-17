import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Hero.scss";
const Hero = () => {
  return (
    <>
      <section className="hero-image">
        <Container fluid>
          <Row>
            <Col className="hero-col">
              <h5 className="hero-main-heading display-3 mb-3">
                Quality Service. Excellent Care. Every Time.
              </h5>
              <h5 className="display-5 mb-5">
                <span style={{ color: "forestgreen" }}>Lawn Care </span>
                Specialists
              </h5>
              <p>
                <Button bg="success">Contact Us</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
