import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";

import AllServicesList from "../components/allServicesList/AllServicesList";
import Comparison from "../components/comparison/Comparison";

import "../components/allServicesList/AllServicesList.scss";

import { ComparisonImages } from "../components/comparison/ComparisonData";
import { ComparisonImagesTwo } from "../components/comparison/ComparisonData";

import { Container, Row, Col } from "react-bootstrap";
function Services() {
  const [isLoadMoreShown, setIsLoadMoreShown] = useState(false);
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
                Valley Lawn Pro's is here to make you happy about your lawn.
                Sometimes lawn mowing, although important, isn't enough. That's
                why we provide a wide range of services to make sure your lawn
                looks its finest.
              </p>
            </div>
            <div className="service-list-container">
              <h4 id="service-list-title">Our most popular services:</h4>
              <AllServicesList />
            </div>
            <h4 className="service-subheading">Garenteed satisfaction</h4>
            <p className="services-about">
              Valley Lawn Pros is dedicated to serving residential and
              commercial customers with experience and top notch quality.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="comparison-title">
              <h3>We make yards happy and their owners too</h3>
            </div>
            <div
              className="comparison-container"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {ComparisonImages.map((item) => (
                <Comparison
                  before={item.before}
                  after={item.after}
                  key={item.id}
                />
              ))}
            </div>
            {isLoadMoreShown && (
              <div
                className="comparison-container"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                {ComparisonImagesTwo.map((item) => (
                  <Comparison
                    before={item.before}
                    after={item.after}
                    key={item.id}
                  />
                ))}
              </div>
            )}
            <div style={{ width: "100%", textAlign: "center" }}>
              <button onClick={() => setIsLoadMoreShown(!isLoadMoreShown)}>
                {isLoadMoreShown ? "Show Less" : "Show More"}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
