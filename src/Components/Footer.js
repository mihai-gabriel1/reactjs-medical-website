import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer p-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h4>Centrul Medical Ali Cranta</h4>
            <p>Strada Doctor Leonte Anastasievici nr 11 Sector 5, Bucuresti</p>
            <p className="footer-phone mb-0">
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#3fbbc0" }}
              />{" "}
              0725 596 895
            </p>
            <p className="footer-phone mb-0">
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#3fbbc0" }}
              />{" "}
              0724 284 956
            </p>
            <p className="footer-mail">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3fbbc0" }} />
              <span className="px-1">Email:</span>
              <a className="px-1" href="pneumotherapy@yahoo.com">
                pneumotherapy@yahoo.com
              </a>
            </p>
            <p className="schedule-title mb-0">Program:</p>
            <p className="schedule-hours">Luni-Vineri: 08:00 – 21:00</p>
          </div>
          <div className="col-md-4 text-center facebook-widget">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#3fbbc0", fontSize: "24px" }}
            />
            <p className="follow-p px-1">Urmareste-ne pe Facebook:</p>

            <div className="iframe-container">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FdrAliCrantaPneumolog%2F&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                max-width="500"
                height="200"
                style={{
                  border: "none",
                  overflow: "hidden",
                }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page Plugin"
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h4>Contact Us</h4>
            <p>123 Street, City</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>
              &copy; 2023 AliCranta Medical Center. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
