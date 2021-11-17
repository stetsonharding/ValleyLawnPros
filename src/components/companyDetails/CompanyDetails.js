import React from "react";

import "./CompanyDetails.scss";

function CompanyDetails() {
  return (
    <div className="company-details-container">
      {/* Details components */}
      <Details detailIcon="fas fa-map-marker-alt" detail="Monroe, Washington" />
      <Details detailIcon="fas fa-mobile-alt" detail="(425)330-9709" />
      <Details
        detailIcon="far fa-envelope"
        detail="thevalleylawnpros@mail.com"
      />
      {/* ==== */}
      <hr className="horizontal-line" />
      {/* Social Media Icons */}
      <div className="company-details-social">
        <i className="fab fa-instagram fa-2x"></i>
        <i className="fab fa-facebook-square fa-2x"></i>
      </div>
      {/* === */}
    </div>
  );
}

//contact details component
function Details(props) {
  return (
    <div className="company-details">
      <div className="company-details-flex">
        <i className={props.detailIcon + " fa-2x"}></i>
        <p>{props.detail}</p>
      </div>
    </div>
  );
}

export default CompanyDetails;
