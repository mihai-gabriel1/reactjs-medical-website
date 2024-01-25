import React from "react";
import priceLogo from "../assets/img/prices-img-section.jpeg";
import apnee from "../assets/pricesServicesImgs/consult-apnee.jpeg";
import consult from "../assets/pricesServicesImgs/consult-pneumologic.jpeg";
import auto from "../assets/pricesServicesImgs/fisa-auto.jpeg";
import pulsoximetrie from "../assets/pricesServicesImgs/pulsoximetrie.jpeg";
import spirometrie from "../assets/pricesServicesImgs/spirometrie.jpeg";
import theta from "../assets/pricesServicesImgs/terapii-complementare.jpeg";
import adeverinta from "../assets/pricesServicesImgs/adeverinta.jpeg";
import aging from "../assets/pricesServicesImgs/anti-aging.webp";
import cognitiva from "../assets/pricesServicesImgs/cognitiva.jpeg";
import ekg from "../assets/pricesServicesImgs/ekg.jpeg";
import handicap from "../assets/pricesServicesImgs/handicap.jpeg";
import intravenos from "../assets/pricesServicesImgs/intravenos.jpeg";
import testare from "../assets/pricesServicesImgs/testare-injectie.jpeg";

const Prices = () => {
  const services = [
    {
      name: "Consult inițial pneumologie",
      price: "170 RON",
      img: consult,
    },
    {
      name: "Consult inițial geriatrie și evaluare cognitivă",
      price: "140 RON",
      img: cognitiva,
    },
    {
      name: "Consult și evaluare anti-aging",
      price: "140 RON",
      img: aging,
    },
    {
      name: "Control pneumologie",
      price: "100 RON",
      img: consult,
    },
    {
      name: "Control geriatrie",
      price: "80 RON",
      img: consult,
    },
    {
      name: "Spirometrie simplă",
      price: "70 RON",
      img: spirometrie,
    },
    {
      name: "Spirometrie cu bronhodilatator",
      price: "80 RON",
      img: apnee,
    },
    {
      name: "Pulsoximetrie",
      price: "10 RON",
      img: pulsoximetrie,
    },
    {
      name: "Peak-flowmetrie",
      price: "10 RON",
      img: pulsoximetrie,
    },
    {
      name: "EKG",
      price: "30 RON",
      img: ekg,
    },
    {
      name: "Testare subcutanată la medicamente",
      price: "20 RON",
      img: testare,
    },
    {
      name: "Injecție intramusculară",
      price: "30 RON",
      img: intravenos,
    },
    {
      name: "Injecție intravenos",
      price: "50 RON",
      img: intravenos,
    },
    {
      name: "Adeverință medicală A5",
      price: "50 RON",
      img: adeverinta,
    },
    {
      name: "Referat handicap",
      price: "50 RON",
      img: handicap,
    },
    {
      name: "Adeverință medicală simplă",
      price: "50 RON",
      img: theta,
    },
    {
      name: "Consult pneumologic fișă auto profesioniști",
      price: "50 RON",
      img: auto,
    },
  ];

  return (
    <div className="prices-section-wrapper container">
      <div className="price-logo-wrapper">
        <img
          className="price-section-logo img-fluid"
          src={priceLogo}
          alt="a dalle generated pic showing a doctor and a lung, being pretty abstract but friendly"
        />
      </div>
      <p className="section-price-description">
        Bine ați venit la clinica noastră de pneumologie, unde excelența în
        îngrijirea medicală se întâlnește cu prețuri imbatabile. Echipa noastră
        dedicată vă oferă servicii de top la tarife accesibile, reflectând
        angajamentul nostru pentru calitate și accesibilitate.
      </p>
      <p className="section-price-description">
        Descoperiți oferta noastră și alegeți îngrijirea de calitate la prețuri
        competitive:
      </p>
      <div className="services-prices-info row">
        {services.map((service, index) => (
          <div key={index} className="col price-service">
            <img
              className="price-service-img"
              src={service.img}
              alt={service.name}
            />
            <div className="price-service-amount-wrapper">
              <p className="prices-service-title">{service.name}</p>
              <p className="price-service-amount">Pret - {service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
