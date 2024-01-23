import React from "react";
import priceLogo from "../assets/img/prices-img-section.jpeg";
import apnee from "../assets/pricesServicesImgs/consult-apnee.jpeg";
import consult from "../assets/pricesServicesImgs/consult-pneumologic.jpeg";
import auto from "../assets/pricesServicesImgs/fisa-auto.jpeg";
import pulsoximetrie from "../assets/pricesServicesImgs/pulsoximetrie.jpeg";
import spirometrie from "../assets/pricesServicesImgs/spirometrie.jpeg";
import theta from "../assets/pricesServicesImgs/terapii-complementare.jpeg";

const Prices = () => {
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
        <div className="col price-service">
          <img className="price-service-img" src={apnee} alt="consult apnee" />
          <div className="price-service-amount-wrapper">
            <p className="prices-service-title">Consult apnee</p>
            <p className="price-service-amount">Pret - 150 RON</p>
          </div>
        </div>
        <div className="col price-service">
          <img
            className="price-service-img"
            src={consult}
            alt="consult pneumologic"
          />
          <div className="price-service-amount-wrapper">
            <p className="prices-service-title">Consult pneumologic</p>
            <p className="price-service-amount">Pret - 150 RON</p>
          </div>
        </div>
        <div className="col price-service">
          <img
            className="price-service-img"
            src={auto}
            alt="logo examen fisa auto"
          />
          <div className="price-service-amount-wrapper">
            <p className="prices-service-title">Examen Fişǎ Auto</p>
            <p className="price-service-amount">Pret - 150 RON</p>
          </div>
        </div>
        <div className="col price-service">
          <img
            className="price-service-img"
            src={pulsoximetrie}
            alt="logo examen pulsoximetrie"
          />
          <div className="price-service-amount-wrapper">
            <p className="prices-service-title">Examen de Pulsoximetrie</p>
            <p className="price-service-amount">Pret - 150 RON</p>
          </div>
        </div>
        <div className="col price-service">
          <img
            className="price-service-img"
            src={spirometrie}
            alt="logo examen spirometrie"
          />
          <div className="price-service-amount-wrapper">
            <p className="prices-service-title">Examen de Spirometrie</p>
            <p className="price-service-amount">Pret - 150 RON</p>
          </div>
        </div>
        <div className="col price-service">
          <img
            className="price-service-img"
            src={theta}
            alt="terapii complementare"
          />
          <div className="price-service-amount-wrapper">
            <p className="prices-service-title">Terapii Complementare</p>
            <p className="price-service-amount">Pret - 150 RON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
