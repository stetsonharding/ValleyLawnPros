import React from "react";

//components
import Hero from "../components/hero/Hero";
import CompanyMission from "../components/companyMissionLayout/CompanyMissionLayout";
import Services from "../components/services/Services";

const Index = () => {
  return (
    <>
      <Hero />
      <CompanyMission />
      <Services />
    </>
  );
};

export default Index;
