import React from "react";

import "./Service.scss";

function Service(props) {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <div className="service-image">
          <img
            loading="lazy"
            src={props.src}
            alt={props.alt}
            width="320"
            height="316"
          />
        </div>
      </div>
      <p className="service-description pt-2">{props.description}</p>
    </div>
  );
}

export default Service;
