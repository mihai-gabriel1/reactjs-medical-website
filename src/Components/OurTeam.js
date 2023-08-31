import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import drali from "../assets/img/drali.webp";
import branzei from "../assets/img/branzei.webp";
import drdruga from "../assets/img/drdruga.jpeg";
import popescu from "../assets/img/popescu.webp";

const TeamMember = ({ imageSrc, name, description }) => (
  <div className="dr-member">
    <img
      className="img-fluid rounded dr-pic"
      src={imageSrc}
      alt={`A picture with ${name}`}
    />
    <div className="dr-description">
      <p className="dr-name">{name}</p>
      <div className="dr-paragraphs">
        {description.map((paragraph, index) => (
          <p key={index} className="dr-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const OurTeam = () => {
  return (
    <div
      className="container our-team "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="our-team-h2 section-title"
      >
        Echipa noastră
      </h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        className="custom-carousel"
      >
        <TeamMember
          imageSrc={drali}
          name="Dr. Ali Cranta"
          description={[
            "MEDIC FONDATOR CLINICA",
            "MEDIC PRIMAR PNEUMOLOG",
            "COMPETENȚĂ EXPLORĂRI FUNCTIONALE RESPIRATORII",
            "COMPETENȚĂ BRONHOSCOPIE",
          ]}
        />
        <TeamMember
          imageSrc={branzei}
          name="Dr. Brânzei Speranța Maria"
          description={[
            "MEDIC PRIMAR PNEUMOLOG",
            "COMPETENȚĂ EXPLORĂRI FUNCTIONALE RESPIRATORII",
            "COMPETENȚĂ BRONHOSCOPIE",
          ]}
        />
        <TeamMember
          imageSrc={drdruga}
          name="Dr. Drugă Oana-Eufrosina"
          description={["MEDIC SPECIALIST", "GERIATRIE și GERONTOLOGIE"]}
        />
        <TeamMember
          imageSrc={popescu}
          name="Popescu Cornelia"
          description={[
            "CONSILIER THETA HEALING",
            "Descoperiți mai multe despre terapia Theta accesând următorul link -",
            <a
              href="https://vindecareprinterapiatheta.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Theta Healing
            </a>,
          ]}
        />
      </Carousel>
    </div>
  );
};

export default OurTeam;
