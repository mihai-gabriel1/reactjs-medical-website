import consult from "../assets/img/consult.jpeg";
import fisa from "../assets/img/fisa-auto.jpeg";
import React from "react";

const OurServices = () => {
  return (
    <div className="container our-services">
      <h2 className="our-services-h2 section-title">
        Serviciile oferite de catre noi
      </h2>
      <div className="row text-center">
        <div className="col-6">
          <p>Constult medical pneumologic</p>
          <img
            className="img-fluid rounded"
            src={consult}
            alt="doctor's appointment"
          />
        </div>
        <div className="col-6">
          <p>Fișă auto și consult psihologic</p>
          <img
            className="img-fluid rounded"
            src={fisa}
            alt="driving's license medical exam"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
