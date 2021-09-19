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
              <h5 className="hero-main-heading display-4 mb-3">
                Quality Service. Excellent Care. Every Time.
              </h5>
              <h5 className="hero-subheading display-5 mb-5">
                <span className="span-lawn-care">Lawn Care </span>
                Specialists
              </h5>
              <div className="hero-btn-container">
                <Button className="hero-btn">Get A Lawn Service Quote</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
