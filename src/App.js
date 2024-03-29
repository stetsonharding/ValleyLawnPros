import React, { useState } from "react";
import Header from "./components/header/Header";
import Index from "./pages/index";
import Services from "./pages/Services";
import Footer from "./components/footer/Footer";

//react router imports
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

//app css
import "./App.css";

function App() {
  const [isServiceImageShown, setIsServiceImageShown] = useState(true);

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Index isServiceImageShown={isServiceImageShown} />}
        ></Route>

        <Route
          path="/Services"
          element={<Services setIsServiceImageShown={setIsServiceImageShown} />}
        ></Route>
      </Routes>

      {/* <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            exact
            path="/"
            element={<Index isServiceImageShown={isServiceImageShown} />}
          />
          <Route
            path="/Services"
            element={
              <Services setIsServiceImageShown={setIsServiceImageShown} />
            }
          />
        </Routes>
      </Router> */}
      <Footer />
    </>
  );
}

export default App;
