import React from "react";

import "./LandscapeFlow.scss";

export default function LandScapeFlow(props) {
  return (
    <div className="flow-container">
      <div className="flow-icon">
        <i className={props.flowIcon}></i>
      </div>
      <div className="flow-steps">
        {props.step}
        <span style={{ color: "rgb(92, 15, 92)", fontSize: "40px" }}>.</span>
        <hr
          style={{
            color: "#4b604f",
            height: "5px",
          }}
        />
      </div>
      <div className="flow-description">{props.flowDescription}</div>
    </div>
  );
}
