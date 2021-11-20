import React from "react";
import Hero from "../components/hero/Hero";

import AllServicesList from "../components/allServicesList/AllServicesList";

import { Container, Row, Col } from "react-bootstrap";
function Services() {
  return (
    <>
      <Hero title="Valley Lawn Pros Services" />
      <Container>
        <Row>
          <Col>
            <div className="service-intro">
              <h3 id="intro">
                Valley Lawn Pros is dedicated to serving residential and
                commercial customers with experience and quality.
              </h3>
            </div>
            <div className="service-list-container">
              <h4 id="service-list-title">Our Most popular services:</h4>
              {/* <h5 id="service-list-title">
                We are dedicated to making your landscape look exactly how you
                picture it. We are open to customized services if possible.
              </h5> */}
              <AllServicesList />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
