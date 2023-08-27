import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" alt="Logo" className="logo" />
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
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 5
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 6
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 7
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 8
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 9
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary ml-2">Book Now</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
