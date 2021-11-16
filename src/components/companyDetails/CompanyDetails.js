import React from "react";

import "./CompanyDetails.scss";

function CompanyDetails() {
  return (
    <div
      className="company-details-container"
      style={{
        // backgroundColor: "blueviolet",
        width: "550px",
        height: "300px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Details detailIcon="fas fa-map-marker-alt" detail="Monroe, Washington" />

      <Details detailIcon="fas fa-mobile-alt" detail="(425)330-9709" />

      <Details
        detailIcon="far fa-envelope"
        detail="thevalleylawnpros@mail.com"
      />
      <hr className="new" />
      <div className="company-details-social" style={{ display: "flex" }}>
        <i
          style={{ paddingRight: "10px" }}
          className="fab fa-instagram fa-2x"
        ></i>
        <i className="fab fa-facebook-square fa-2x"></i>
      </div>
    </div>
  );
}

//contact details component
function Details(props) {
  return (
    <div
      className="company-details"
      style={{
        display: "flex",
        width: "400px",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <i className={props.detailIcon + " fa-2x"}></i>
        <p style={{ padding: "0", margin: "10px" }}>{props.detail}</p>
      </div>
    </div>
  );
}

export default CompanyDetails;
