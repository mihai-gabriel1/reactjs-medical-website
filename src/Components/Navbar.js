import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
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
              <Link to="/">Acasa</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Despre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services-wrapper">
                Servicii
              </a>
            </li>
            <li className="nav-item">
              <Link to="/careers">Cariere</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#our-team">
                Echipa
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://vindecareprinterapiatheta.ro/"
              >
                Terapie Theta
              </a>
            </li>
            <li className="nav-item">
              <Link to="/articles">Articole</Link>
            </li>
            <li className="nav-item">
              <Link to="/prices">Prețuri</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookings">
                <button className="btn btn-primary appointment-button">
                  FĂ O PROGRAMARE LA NOI
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
