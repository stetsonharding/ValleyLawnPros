import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import "./Comparison.scss";

function Comparison(props) {
  return (
    <>
      <ReactCompareSlider
        key={props.id}
        itemOne={<ReactCompareSliderImage src={props.before} />}
        itemTwo={<ReactCompareSliderImage src={props.after} />}
        style={{ width: "300px", height: "300px", margin: "8px" }}
      />
    </>
  );
}

export default Comparison;
