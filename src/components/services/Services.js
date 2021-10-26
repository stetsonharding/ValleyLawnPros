import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Service from "../Service/Service";

import GrassMower from "../../assets/GrassMower.jpg";
import HolidayLightings from "../../assets/holidayLightings.jpg";
import GardeningAndTreatment from "../../assets/GardeningAndTreatment.jpg";

import "./Services.scss";

const Services = () => {
  return (
    <Container fluid className="mt-5 p-0">
      <div className="service-background">
        <Row
          style={{ minHeight: "700px" }}
          className="d-flex justify-content-center align-items-center p-0 m-0"
        >
          <div className="m-0">
            <p className="services-title d-flex justify-content-center m-4">
              Our
              <span className="services-span">Services </span>
            </p>
          </div>
          <Col>
            <Service
              src={GrassMower}
              alt="Employee maintaining lawn"
              description="Landscape Design & Installation"
            />
          </Col>
          <Col>
            {" "}
            <Service
              src={HolidayLightings}
              alt="Holday lights on house"
              description="Lighting and fixtures"
            />
          </Col>
          <Col>
            {" "}
            <Service
              src={GardeningAndTreatment}
              alt="Organized and maintained garden"
              description="Gardening and treatment"
            />
          </Col>
          <div style={{ textAlign: "center" }} className="m-3">
            <Button style={{ backgroundColor: "rgb(92, 15, 92)" }}>
              View All Services
            </Button>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default Services;
