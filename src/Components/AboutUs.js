import React from "react";
import cabinet1Image from "../assets/img/cabinet1.webp"; // Import the image
import cabinet2Image from "../assets/img/cabinet2.webp"; // Import the image

const AboutUs = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-12">
          <h2 className="about-h2 section-title">Cine suntem</h2>
          <p className="about-p">
            Conceptul modern aplicat în tratarea fiecărui caz asigura
            redobândirea sănătății pacientului și promovează un stil de viață
            sănătos.
          </p>
          <p className="about-p">
            La centrul medical ALI CRANTA, primordial în filosofia clinicii
            noastre este redobândirea sănătății pacientului și asigurarea
            vitalității acestuia prin prevenție și adopatarea unui stil de viață
            sănătos și echilibrat fizic și emoțional.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3 mt-xs-2">
          <img
            className=" rounded cabinet-img"
            src={cabinet1Image}
            alt="Cabinet 1"
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3 mt-xs-2">
          <img
            className=" rounded cabinet-img"
            src={cabinet2Image}
            alt="Cabinet 1"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
