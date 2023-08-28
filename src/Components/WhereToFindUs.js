import findus from "../assets/img/findus.avif"; // Import the image
import React from "react";

const WhereToFindUs = () => {
  return (
    <div className="find-us-section container">
      <h2 className="findus-h2">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12">
            <h2 className="section-title">Unde ne puteți gãsi</h2>
            <img
              className="img-fluid rounded findus-img mb-4"
              src={findus}
              alt="person browsing google maps"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <p className="findus-p">
              Pe langă centrul de la adresa{" "}
              <span className="findus-span">
                Leonte Anastasievici Nr. 11 corp B,
              </span>
              mai puteti beneficia de serviciile noastre in alte două locații.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <p className="findus-p">
              Una dintre acestea poate fi gasită la adresa Jilava,{" "}
              <span className="findus-span">
                str. Magnoliei Nr 1, Dispensar medical Jilava
              </span>
              , iar cea din urmă, la adresa{" "}
              <span className="findus-span">
                Islaz, str. Dunării nr. 71, jud Teleorman
              </span>
              .
            </p>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default WhereToFindUs;
