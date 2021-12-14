import React from "react";

import "./CompanyDetails.scss";

function CompanyDetails() {
  return (
    <div className="company-details-container">
      {/* Details components */}
      <Details
        detailIcon="fas fa-map-marker-alt"
        detail="Snohomish, Washington"
      />
      <Details detailIcon="fas fa-mobile-alt" detail="(425)330-9709" />
      {/* ==== */}
      <hr className="horizontal-line" />
      {/* Social Media Icons */}
      <div className="company-details-social">
        <a href="https://www.google.com/search?q=valley+lawn+pros&sxsrf=AOaemvJyN_CMmZ_2LgZpfjjAmPAHyQAu3g%3A1637166152233&source=hp&ei=SCyVYYnmC9Dc-gSQsISgDA&iflsig=ALs-wAMAAAAAYZU6WLfzJdVegcQB073IYgTlVBzb2ngj&oq=valley+lawn+pros&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCwguEIAEEMcBEK8BMgYIABAWEB4yBggAEBYQHjICCCY6BQgAEJECOg4ILhCABBCxAxDHARCjAjoOCC4QgAQQsQMQxwEQ0QM6CAguEIAEELEDOgsILhCABBDHARCjAjoLCAAQgAQQsQMQgwE6BwguELEDEEM6BAgAEEM6CAgAEIAEELEDOgoILhDHARCvARBDOgQILhBDOgUIABCABDoNCC4QsQMQxwEQowIQQzoICAAQgAQQyQM6CQgAEMkDEBYQHlAAWOIMYLwNaABwAHgAgAGNAYgB4wuSAQQxMC42mAEAoAEB&sclient=gws-wiz&ved=0ahUKEwiJqsKX55_0AhVQrp4KHRAYAcQQ4dUDCAk&uact=5">
          {" "}
          <i className="fab fa-google-plus-square fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/Valley-Lawn-Pros-101806418729695">
          {" "}
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
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
        <a href={`tel:4253309709`}>
          <i className={props.detailIcon + " fa-2x"}></i>
        </a>
        <div>{<p>{props.detail}</p>}</div>
      </div>
    </div>
  );
}

export default CompanyDetails;
