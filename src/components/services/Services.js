import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Service from "../Service/Service";

import GrassMower from "../../assets/GrassMower.jpg";

import "./Services.scss";

const Services = () => {
  return (
    <Container fluid className="p-0 mb-2 mt-4">
      <div className="service-background">
        <p className="services-title d-flex justify-content-center p-5 display-5">
          Our
          <span className="services-span">Services </span>
        </p>
        <Row>
          <Col>
            <Service
              src={GrassMower}
              alt="Grass Mower"
              description="Landscape Design & Installation"
            />
          </Col>
          <Col>
            {" "}
            <Service
              src={GrassMower}
              alt="Grass Mower"
              description="Landscape Design & Installation"
            />
          </Col>
          <Col>
            {" "}
            <Service
              src={GrassMower}
              alt="Grass Mower"
              description="Landscape Design & Installation"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Services;
