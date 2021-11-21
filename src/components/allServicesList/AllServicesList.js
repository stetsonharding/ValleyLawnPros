import React from "react";

import "./AllServicesList.scss";

function AllServicesList() {
  return (
    <div
      className="service-list"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ul className="services-list">
        <li>Lawn Mowing</li>
        <li>Trimming and Edging</li>
        <li>Gardening</li>
        <li>Bed Maintence</li>
      </ul>
      <ul className="services-list">
        <li>Weed & leaf control</li>
        <li>Sod Installation</li>
        <li>Yard Cleanup</li>
        <li>Planting of trees, flowers and shrubs</li>
      </ul>
      <ul className="services-list">
        <li>Holiday Lighting and fixtures</li>
        <li>Snow Removal</li>
        <li>De-icing </li>
        <li>Fertilization</li>
      </ul>
    </div>
  );
}

export default AllServicesList;
