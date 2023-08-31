import consult from "../assets/img/consult.jpeg";
import fisa from "../assets/img/fisa-auto.jpeg";
import pulsoximetrie from "../assets/img/pulsoximetrie.jpeg";
import apnee from "../assets/img/apnee.webp";
import spirometrie from "../assets/img/spirometrie.jpeg";
import masaj from "../assets/img/masaj.jpeg";
import React from "react";

const OurServices = () => {
  return (
    <div
      className="container-fluid services-wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="container our-services"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          className="our-services-h2 section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Serviciile oferite de catre noi
        </h2>
        <div
          className="row text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Consult medical pneumologic</p>
            <img
              className="img-fluid rounded services-img"
              src={consult}
              alt="doctor's appointment"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Fișă auto și consult psihologic</p>
            <img
              className="img-fluid rounded services-img"
              src={fisa}
              alt="driving's license medical exam"
            />
          </div>
        </div>
        <div
          className="row text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Pulsoximetrie</p>
            <img
              className="img-fluid rounded services-img"
              src={pulsoximetrie}
              alt="doctor's appointment"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Consult apnee</p>
            <img
              className="img-fluid rounded services-img"
              src={apnee}
              alt="driving's license medical exam"
            />
          </div>
        </div>
        <div
          className="row text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Spirometrie</p>
            <img
              className="img-fluid rounded services-img"
              src={spirometrie}
              alt="doctor's appointment"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="service-title">Terapii complementare</p>
            <img
              className="img-fluid rounded services-img"
              src={masaj}
              alt="driving's license medical exam"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
