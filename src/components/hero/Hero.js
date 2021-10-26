import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuoteModal from "../quoteModal/QuoteModal";

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
                {/* Quote Modal */}
                <QuoteModal />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
