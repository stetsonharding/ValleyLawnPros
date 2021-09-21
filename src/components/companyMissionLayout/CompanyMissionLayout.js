import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./CompanyMissionLayout.scss";

//components
import Mission from "../mission/Mission";
import MissionImage from "../missionImage/MissionImage";

const CompanyMissionLayout = () => {
  return (
    <Container fluid className="company-mission-layout-container">
      <Row
        className="company-mission-layout-row"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        <Col className="text-center"></Col>
        <Col className="text-center">
          <Mission />
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyMissionLayout;
