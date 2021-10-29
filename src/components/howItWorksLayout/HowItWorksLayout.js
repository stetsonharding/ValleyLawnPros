import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//components
import LandScapeFlow from "../LandscapeFlow/LandScapeFlow";

function HowItWorksLayout() {
  return (
    <Container
      fluid
      style={{ height: "600px" }}
      className="howItWorks-container d-flex align-items-center justify-content-center"
    >
      <Row>
        <Col className="d-flex  align-items-center justify-content-center">
          <LandScapeFlow
            flowIcon="far fa-comment-dots fa-3x"
            step="Step 1: we come to you"
            flowDescription="You'll get a text when we head your way. Our initial meeting is simply to listen to your desires so we can begin 
            designing a customized plan to fit your budget."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorksLayout;
