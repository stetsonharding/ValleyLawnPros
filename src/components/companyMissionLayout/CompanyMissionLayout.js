import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./CompanyMissionLayout.scss";

//components
import Mission from "../mission/Mission";
import MissionImage from "../../assets/MissionImage-test.jpg";

const CompanyMissionLayout = () => {
  return (
    <Container
      fluid
      className="company-mission-layout-container d-flex align-items-center justify-content-center"
    >
      <Row className="company-mission-layout-row ">
        <Col xs={12} lg={6} xl={""} className="text-center">
          <img
            style={{
              borderRadius: "50%",
              width: "340px",
              boxShadow: "1px 1px 1px black",
            }}
            src={MissionImage}
            alt="glaks"
          />
        </Col>
        <Col xs={12} lg={4} xl={""} className="text-center">
          <Mission
            title="Valley Lawn Pro's"
            missionDetails=" At Valley Lawn Pro's, it is our mission to provide our clients with
          unmatched levels of excellence and expertise in every aspect of your
          home's landscape. Building and sustaining lifelong relationships by
          listening to our clients' needs, we will transform your vision into
          reality, adding beautiful outdoor living spaces to your home."
            btnText="Call Now!"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyMissionLayout;
