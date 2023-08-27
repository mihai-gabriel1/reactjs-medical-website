import "./App.css";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import OurServices from "./Components/OurServices";
import OurTeam from "./Components/OurTeam";
import Testimonials from "./Components/Testimonials";
import Topbar from "./Components/Topbar";
import WhereToFindUs from "./Components/WhereToFindUs";

function App() {
  return (
    <div className="app-wrapper">
      <Topbar />
      <Navbar />
      <Header />
      <AboutUs />
      <WhereToFindUs />
      <OurServices />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
