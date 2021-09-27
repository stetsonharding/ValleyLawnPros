import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//css
import "./CompanyMissionLayout.scss";

//images
import HeroImage from "../../assets/Hero_Image.jpg";

//components
import Mission from "../mission/Mission";
import MissionImage from "../missionImage/MissionImage";

const CompanyMissionLayout = () => {
  return (
    <Container
      fluid
      className="company-mission-layout-container d-flex align-items-center justify-content-center"
    >
      <Row className="company-mission-layout-row ">
        <Col
          xs={12}
          lg={6}
          xl={""}
          className="text-center d-flex align-items-center justify-content-center"
        >
          <MissionImage src={HeroImage} alt={"Valley Lawn Pro's Employee"} />
          <div className="d-flex align-items-center justify-content-center flex-column">
            <ul>
              <li>Design</li>
              <li>Install</li>
              <li>Maintain</li>
            </ul>
          </div>
        </Col>
        <Col
          xs={12}
          lg={4}
          xl={""}
          className="text-center d-flex align-items-center"
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
