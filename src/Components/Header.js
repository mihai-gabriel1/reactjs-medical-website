import React from "react";

const Header = () => {
  return (
    <div
      className="header-container container-fluid"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="header-h1-btn-wrapper">
        <h1 className="header-h1">
          Bun venit la AliCranta <br /> Medical Center
        </h1>
        <a href="#about" class="btn-get-started">
          Află mai multe
        </a>
      </div>
    </div>
  );
};

export default Header;
