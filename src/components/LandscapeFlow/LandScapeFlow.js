import React from "react";

export default function LandScapeFlow(props) {
  return (
    <div className="flow-container">
      <div className="flow-icon">
        <i class={props.flowIcon}></i>
      </div>
      <div className="flow-steps">{props.step}</div>
      <div className="flow-description">{props.flowDescription}</div>
    </div>
  );
}
