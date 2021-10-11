import React from "react";
import { Container } from "react-bootstrap";

import "./Services.scss";

const Services = () => {
  return (
    <Container fluid className="p-0 mb-2 mt-4">
      <div className="service-background">
        <h1 className="our-services-title d-flex justify-content-center p-5">
          Our
          <span className="services-span">Services </span>
        </h1>
      </div>
    </Container>
  );
};

export default Services;
