import React from "react";
import Header from "../Components/Header";
import AboutUs from "../Components/AboutUs";
import OurServices from "../Components/OurServices";
import OurTeam from "../Components/OurTeam";
import WhereToFindUs from "../Components/WhereToFindUs";
import Testimonials from "../Components/Testimonials";
export const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <WhereToFindUs />
      <OurServices />
      <OurTeam />
      <Testimonials />
    </>
  );
};
