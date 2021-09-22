import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./CompanyMissionLayout.scss";

//components
import Mission from "../mission/Mission";
// import MissionImage from "../missionImage/MissionImage";

const CompanyMissionLayout = () => {
  return (
    <Container
      fluid
      className="company-mission-layout-container d-flex align-items-center justify-content-center"
    >
      <Row className="company-mission-layout-row ">
        <Col xs={12} lg={6} xl={""} className="text-center">
          <h1>Hello i am content</h1>
        </Col>
        <Col xs={12} lg={4} xl={""} className="text-center">
          <Mission />
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyMissionLayout;
