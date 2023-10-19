import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div id="topbar" className="d-flex align-items-center">
        <div
          className="container d-flex justify-content-between"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="contact-info d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3fbbc0" }} />
            <a href="mailto:pneumotherapy@yahoo.com">pneumotherapy@yahoo.com</a>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#3fbbc0" }} />{" "}
            <a href="tel:0725596895">0725 596 895</a>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#3fbbc0" }} />{" "}
            <a href="tel:0724284956">0724 284 956</a>
          </div>

          <div className="d-lg-flex social-links align-items-center">
            <button className="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button className="facebook">
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button className="facebook">
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button className="facebook">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
