import React from "react";

//components
import Hero from "../components/hero/Hero";
import CompanyMission from "../components/companyMissionLayout/CompanyMissionLayout";
import Services from "../components/services/Services";
import HowItWorks from "../components/howItWorksLayout/HowItWorksLayout";
import ContactUs from "../components/contactUs/ContactUs";

const Index = () => {
  return (
    <>
      <Hero />
      <CompanyMission />
      <Services />
      <HowItWorks />
      <ContactUs />
    </>
  );
};

export default Index;
