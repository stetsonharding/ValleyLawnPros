import React from "react";

import "./LandscapeFlow.scss";

export default function LandScapeFlow(props) {
  return (
    <div className="flow-container">
      <div className="flow-icon">
        <i class={props.flowIcon}></i>
      </div>
      <div className="flow-steps">
        {props.step}
        <span style={{ color: "green", fontSize: "50px" }}> .</span>
      </div>
      <div className="flow-description">{props.flowDescription}</div>
    </div>
  );
}
