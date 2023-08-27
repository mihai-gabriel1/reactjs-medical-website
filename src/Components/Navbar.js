import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a
          className="navbar-brand"
          href="https://www.alicrantamedicalcenter.com/"
        >
          <img
            src="https://i.ibb.co/6BzcyRK/logo.png"
            alt="Logo"
            className="header-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.alicrantamedicalcenter.com/"
              >
                Acasă
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Despre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicii
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cariere
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Echipa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Terapie Theta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Articole
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary appointment-button">
                FĂ O PROGRAMARE LA NOI
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// asd
