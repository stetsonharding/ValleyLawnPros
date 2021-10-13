import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Service from "../Service/Service";

import GrassMower from "../../assets/GrassMower.jpg";

import "./Services.scss";

const Services = () => {
  return (
    <Container fluid className="mb-2 mt-4">
      <div className="service-background">
        <Row
          style={{ height: "100%" }}
          className="d-flex justify-content-center align-items-center "
        >
          <div>
            <p className="services-title d-flex justify-content-center">
              Our
              <span className="services-span">Services </span>
            </p>
          </div>
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
              description="Lighting and fixtures"
            />
          </Col>
          <Col>
            {" "}
            <Service
              src={GrassMower}
              alt="Grass Mower"
              description="Gardening and treatment"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Services;
