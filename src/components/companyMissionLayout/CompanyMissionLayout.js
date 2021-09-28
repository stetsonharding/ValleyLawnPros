import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//css
import "./CompanyMissionLayout.scss";

//images
import HeroImage from "../../assets/Hero_Image.jpg";

//components
import Mission from "../mission/Mission";
import MissionImage from "../missionImage/MissionImage";
import HeroSpecs from "../heroSpecs/HeroSpecs";

const CompanyMissionLayout = () => {
  return (
    <Container
      fluid
      className="company-mission-layout-container d-flex align-items-center justify-content-center"
    >
      <Row className="company-mission-layout-row flex-column-reverse flex-lg-row">
        <Col
          xs={12}
          lg={6}
          xl={""}
          className="text-center d-flex align-items-center justify-content-center mt-4"
        >
          <MissionImage src={HeroImage} alt={"Valley Lawn Pro's Employee"} />
          <HeroSpecs />
        </Col>
        <Col
          xs={12}
          lg={5}
          xl={""}
          className="text-center d-flex align-items-center mb-5 pt-5"
        >
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
