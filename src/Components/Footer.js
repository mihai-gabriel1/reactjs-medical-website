import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer p-5" data-aos="fade-up" data-aos-duration="1000">
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 d-flex flex-column justify-content-center">
            <h4>Centrul Medical Ali Cranta</h4>
            <p>Strada Doctor Leonte Anastasievici nr 11 Sector 5, Bucuresti</p>
            <p className="footer-phone mb-0">
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#3fbbc0" }}
              />{" "}
              <a
                className="footer-phone"
                href="tel:0725596895"
                style={{ textDecoration: "none" }}
              >
                0725 596 895
              </a>
            </p>
            <p className="footer-phone mb-0">
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#3fbbc0" }}
              />{" "}
              <a
                className="footer-phone"
                href="tel:0724284956"
                style={{ textDecoration: "none" }}
              >
                0724 284 956
              </a>
            </p>
            <p className="footer-mail">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3fbbc0" }} />{" "}
              <a href="mailto:pneumotherapy@yahoo.com">
                pneumotherapy@yahoo.com
              </a>
            </p>
            <p className="schedule-title mb-0">Program:</p>
            <p className="schedule-hours">Luni-Vineri: 08:00 – 21:00</p>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 text-center facebook-widget">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#3fbbc0", fontSize: "24px" }}
            />
            <p className="follow-p px-1">Urmareste-ne pe Facebook:</p>

            <div className="iframe-container">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FdrAliCrantaPneumolog%2F&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="250"
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
          <div className="col-xl-4 col-lg-12 col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
            <div
              id="custom_html-2"
              className="widget_text widget footer-widget widget_custom_html"
            >
              <p className="text-center">Locatia Noastră</p>
              <div className="textwidget custom-html-widget">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.866047857008!2d26.065376851304006!3d44.43590987899974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201801952d2f7%3A0x4959a25917499106!2sAli%20Cranta%20Medical%20Center!5e0!3m2!1sen!2sro!4v1669669163274!5m2!1sen!2sro"
                  width="300"
                  height="250"
                  title="Location of Ali Cranta Medical Center on Google Maps"
                  style={{
                    border: "none",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>
              &copy; 2023 AliCranta Medical Center. Toate drepturile rezervate.
            </p>
            <p>
              Website created and maintained by Mihai Gabriel -{" "}
              <a href="https://www.linkedin.com/in/gabriel-mihai-924042234/">
                webdesign / administrare web
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
