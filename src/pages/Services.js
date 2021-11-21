import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";

import AllServicesList from "../components/allServicesList/AllServicesList";

import "../components/allServicesList/AllServicesList.scss";

import { Container, Row, Col } from "react-bootstrap";
function Services() {
  //Start on top of the page when navigated to Services page.
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <Hero title="Valley Lawn Pros Services" />
      <Container>
        <Row>
          <Col>
            <div className="service-intro">
              <h4 className="service-subheading">Leave It To The Pro's</h4>
              <p className="services-about">
                Valley Lawn Pros is here to make you happy about your lawn.
                Sometimes lawn mowing, although important, isn't enough. That's
                why we provide a wide range of services to make sure your lawn
                looks its finest.
              </p>
            </div>
            <div className="service-list-container">
              <h4 id="service-list-title">Our most popular services:</h4>
              <AllServicesList />
            </div>
            <h4 className="service-subheading">Garenteed satisfaction.</h4>
            <p className="services-about">
              Valley Lawn Pros is dedicated to serving residential and
              commercial customers with experience and top notch quality.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
