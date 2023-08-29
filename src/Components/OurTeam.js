import React from "react";
import drali from "../assets/img/drali.webp"; // Import the image
import branzei from "../assets/img/branzei.webp"; // Import the image
import drdruga from "../assets/img/drdruga.jpeg"; // Import the image
import popescu from "../assets/img/popescu.webp"; // Import the image

const OurTeam = () => {
  return (
    <div className="container our-team">
      <h2 className="our-team-h2 section-title">Echipa noastră</h2>
      <div className="row dr-row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 dr-col">
          <img
            className="img-fluid rounded dr-pic"
            src={drali}
            alt="A picture with dr ali cranta"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 dr-description">
          <p className="dr-name">Dr. Ali Cranta</p>
          <p className="dr-title">MEDIC FONDATOR CLINICA</p>
          <p className="dr-title">MEDIC PRIMAR PNEUMOLOG</p>
          <p className="dr-title">
            COMPETENȚĂ EXPLORĂRI FUNCTIONALE RESPIRATORII
          </p>
          <p className="dr-title">COMPETENȚĂ BRONHOSCOPIE</p>
        </div>
      </div>
      <div className="row dr-row mt-4 mt-4">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 dr-col">
          <img
            className="img-fluid rounded dr-pic"
            src={branzei}
            alt="A picture with dr popescu"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 dr-description">
          <p className="dr-name">Dr. Brânzei Speranța Maria</p>
          <p className="dr-title">MEDIC PRIMAR PNEUMOLOG</p>
          <p className="dr-title">
            COMPETENȚĂ EXPLORĂRI FUNCTIONALE RESPIRATORII
          </p>
          <p className="dr-title">COMPETENȚĂ BRONHOSCOPIE</p>
        </div>
      </div>
      <div className="row dr-row mt-4">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 dr-col">
          <img
            className="img-fluid rounded dr-pic"
            src={drdruga}
            alt="A picture with dr druga"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 dr-description">
          <p className="dr-name">Dr. Drugă Oana-Eufrosina</p>
          <p className="dr-title">MEDIC SPECIALIST</p>
          <p className="dr-title">GERIATRIE și GERONTOLOGIE</p>
        </div>
      </div>
      <div className="row dr-row mt-4">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 dr-col">
          <img
            className="img-fluid rounded dr-pic"
            src={popescu}
            alt="A picture with ms popescu"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 dr-description">
          <p className="dr-name">Popescu Cornelia</p>
          <p className="dr-title">CONSILIER THETA HEALING</p>
          <p className="dr-title">
            Descoperiți mai multe despre terapia Theta accesând următorul link -
            <a href="https://vindecareprinterapiatheta.ro/">Theta Healing</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
