import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import "./App.css";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Careers from "./Components/Careers";
import Bookings from "./Components/Bookings";
import Articles from "./Components/Articles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <Topbar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/bookings" element={<Bookings />} />
          <Route exact path="/articles" element={<Articles />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
