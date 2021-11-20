import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuoteModal from "../quoteModal/QuoteModal";

import "./Hero.scss";
const Hero = ({ isServiceImageShown, ...props }) => {
  return (
    <>
      <section
        className={isServiceImageShown ? "hero-image" : "hero-service-image"}
      >
        <Container fluid>
          <Row>
            <Col
              className={
                isServiceImageShown
                  ? "hero-col"
                  : "hero-col-services hero-col h5"
              }
            >
              <h5 className="hero-main-heading display-4 mb-3">
                {props.title}
              </h5>
              <h5 className="hero-subheading display-5 mb-5">
                <span className="span-lawn-care">{props.subHeadingSpan} </span>
                {props.subHeading}
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
