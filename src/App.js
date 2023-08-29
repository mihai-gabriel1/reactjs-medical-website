import "./App.css";
// import AboutUs from "./Components/AboutUs";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
// import OurServices from "./Components/OurServices";
// import OurTeam from "./Components/OurTeam";
// import Testimonials from "./Components/Testimonials";
import Topbar from "./Components/Topbar";
// import WhereToFindUs from "./Components/WhereToFindUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Topbar />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/faq" element={<Faq />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
