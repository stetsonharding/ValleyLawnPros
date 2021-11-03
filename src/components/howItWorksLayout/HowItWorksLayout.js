import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//components
import LandScapeFlow from "../LandscapeFlow/LandScapeFlow";

function HowItWorksLayout() {
  return (
    <Container
      fluid
      style={{ minHeight: "600px" }}
      className="howItWorks-container d-flex align-items-center justify-content-center mt-5 mb-5"
    >
      <Row className="mt-5">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "75px",
            color: "#4b604f",
            fontFamily:
              "Cambria, Cochin, Georgia, Times, Times New Roman, serif;",
          }}
        >
          How It Works.
        </h1>

        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex  align-items-center justify-content-center mb-2"
        >
          <LandScapeFlow
            flowIcon="far fa-comment-dots fa-3x"
            step="Step 1: We come to you"
            flowDescription="You'll get a text when we head your way. Our initial meeting is simply to listen to your desires so we can begin 
            designing a customized plan to fit your budget."
          />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex  align-items-center justify-content-center mb-2"
        >
          <LandScapeFlow
            flowIcon="far fa-eye fa-3x"
            step="Step 2: Presentation"
            flowDescription="Your landscape design will get lots of attention as we personally design your plan by hand. 
           We then present you with a clear picture of how your landscape look and feel."
          />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex  align-items-center justify-content-center mb-2"
        >
          <LandScapeFlow
            flowIcon="far fa-bell fa-3x"
            step="Step 3: Transformation"
            flowDescription="It's time to say goodbye to the old and welcome the new. We move quick and keep in touch at all times while 
            we transform your original landscape"
          />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex  align-items-center justify-content-center mb-2"
        >
          <LandScapeFlow
            flowIcon="far fa-smile fa-3x"
            step="Step 4: Enjoy"
            flowDescription="Relax and invite friends and family over to enjoy your new outdoor atmosphere! You will have the best looking lawn on the block, satisfaction garenteed."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorksLayout;
