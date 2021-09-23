import React from "react";
import { Button } from "react-bootstrap";

import "./Mission.scss";

function Mission(props) {
  return (
    <div className="mission-container">
      <div className="mission-heading">
        <h1>{props.title}</h1>
      </div>
      <div className="mission-details">
        <p>{props.missionDetails}</p>
      </div>
      <Button
        className="mission-btn mt-1"
        variant="dark"
        href={`tel:4253440797`}
      >
        {props.btnText}
      </Button>
    </div>
  );
}

export default Mission;
