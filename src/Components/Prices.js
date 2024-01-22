import React from "react";
import priceLogo from "../assets/img/prices-img-section.jpeg";

const Careers = () => {
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
    </div>
  );
};

export default Careers;
