import React from "react";

import "./MissionImage.scss";

function MissionImage(props) {
  return (
    <div className="mission-image-container p-2">
      <div className="mission-image">
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}

export default MissionImage;
