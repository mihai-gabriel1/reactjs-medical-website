import React from "react";
import person1 from "../assets/img/person1.png"; // Import the image
import person2 from "../assets/img/person2.webp"; // Import the image
import person3 from "../assets/img/person3.png"; // Import the image

const Testimonials = () => {
  return (
    <div
      className="testmonials-section container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2
        className="section-title testimonials-title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Testimoniale
      </h2>
      <div
        className="row testimonials-row"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card">
            <div className="wrapper">
              <img src={person1} alt="" className="card-img img-fluid" />
              <p className="person-name">Moise Gina</p>
            </div>
            <p className="testimonial-p">
              Înainte de a fi medic, doamna Ali Cranta este OM! Un om minunat,
              empatic cat si un specialist desăvârșit!
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card">
            <div className="wrapper">
              <img src={person2} alt="" className="card-img img-fluid" />
              <p className="person-name">Liliana Vrăjitoru</p>
            </div>
            <p className="testimonial-p">
              Mii de mulțumiri pentru profesionalism! Personal, oricând voi avea
              nevoie, aici voi merge. Recomand cu maaare drag!
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card">
            <div className="wrapper">
              <img src={person3} alt="" className="card-img img-fluid" />
              <p className="person-name">Alexandra Țugui</p>
            </div>
            <p className="testimonial-p">
              Dna dr Cranta Ali este un medic extraordinar, aproape de pacient,
              empatic, accesibil și răspunde la telefon întotdeauna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
