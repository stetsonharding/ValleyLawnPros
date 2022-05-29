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
            width="220"
            height="236"
          />
        </div>
      </div>
      <p className="service-description pt-2">{props.description}</p>
    </div>
  );
}

export default Service;
