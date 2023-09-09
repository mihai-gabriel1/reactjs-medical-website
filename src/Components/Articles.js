import React from "react";
import tbcLogo from "../assets/logos/tbc-logo.jpeg";

const Articles = () => {
  return (
    <div
      className="articles-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="article-img container d-flex align-items-center justify-content-center">
        <img src={tbcLogo} alt="" className="img-fluid rounded text-center" />
      </div>
      <h1 className="section-title mt-2 mb-2">Tuberculoza (TBC)</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="custom-section">
              <h2 className="custom-heading">Cum o putem detecta</h2>
              <ol className="custom-list">
                <li>Examen bacteriologic direct si cultura</li>
                <li>Radiografie pulmonara</li>
                <li>
                  Analize uzuale: hemoleucograma cu formula leucocitara, VSH.
                </li>
                <li>
                  Anumite diete excesive care duc la înfometare și scăderea
                  imunității.
                </li>
                <li>Alte boli cronice precum diabetul zaharat etc.</li>
              </ol>
            </div>
          </div>
          <div className="col">
            <div className="custom-section">
              <h2 className="custom-heading">Factori adjuvanți</h2>
              <ol className="custom-list">
                <li>Antecedente heredo–colaterale</li>
                <li>Alcoolismul cronic</li>
                <li>Fumatul intensiv</li>
                <li>
                  Anumite diete excesive care duc la înfometare și scăderea
                  imunității.
                </li>
                <li>Alte boli cronice precum diabetul zaharat etc.</li>
              </ol>
            </div>
          </div>
          <div className="col">
            <div className="custom-section">
              <h2 className="custom-heading">
                Simptomatologie și debutul afecțiunii
              </h2>
              <ol className="custom-list">
                <li>
                  <p className="custom-paragraph">Tuse seaca, iritativa</p>
                </li>
                <li>
                  <p className="custom-paragraph">Subfebrilitate</p>
                </li>
                <li>
                  <p className="custom-paragraph">Inapetenta</p>
                </li>
                <li>
                  <p className="custom-paragraph">Scadere ponderala</p>
                </li>
                <li>
                  <p className="custom-paragraph">Transpiratii profuse</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
