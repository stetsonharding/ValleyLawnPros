import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./LandscapeFlow.scss";

export default function LandScapeFlow(props) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="flow-container"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
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
