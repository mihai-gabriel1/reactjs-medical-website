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
      <div id="topbar" className="d-flex align-items-center d-xs-none">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3fbbc0" }} />
            <a href="pneumotherapy@yahoo.com">pneumotherapy@yahoo.com</a>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#3fbbc0" }} /> 0725
            596 895
            <FontAwesomeIcon icon={faPhone} style={{ color: "#3fbbc0" }} /> 0724
            284 956
          </div>

          <div className="d-lg-flex social-links align-items-center">
            <a
              href="https://www.facebook.com/drAliCrantaPneumolog/"
              className="facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="facebook">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="facebook">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="facebook">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
