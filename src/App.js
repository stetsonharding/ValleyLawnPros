import React from "react";
import Header from "./components/header/Header";
import Index from "./pages/index";
import Services from "./pages/Services";
import Footer from "./components/footer/Footer";

//react router imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//app css
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
