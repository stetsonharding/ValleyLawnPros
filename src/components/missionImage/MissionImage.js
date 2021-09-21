import React from "react";

import "./MissionImage.scss";

import MissionImageTest from "../../assets/MissionImage-test.jpg";

function MissionImage() {
  return (
    <div classname="mission-image-container">
      <div classname="mission-image">
        <img className="landscape-image" src={MissionImageTest} alt="" />
      </div>
    </div>
  );
}

export default MissionImage;
