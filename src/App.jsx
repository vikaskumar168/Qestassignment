import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/LandingPage/Hero";
import Onboard from "./components/LandingPage/Onboard";
import Rmax from "./components/LandingPage/Rmax";
import Empowering from "./components/LandingPage/Empowering";
import Plan from "./components/LandingPage/Plan";
import Manage from "./components/LandingPage/Manage";
import Frequently from "./components/LandingPage/Frequently";
import Footer from "./components/LandingPage/Footer";
import Pricing from "./components/Pricing";
import Support from "./components/Support"; // Import the Support component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Onboard />
              <Rmax />
              <Empowering />
              <Plan />
              <Manage />
              <Frequently />
              <Footer />
            </>
          }
        />

        {/* Pricing Page */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Support Page */}
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;
