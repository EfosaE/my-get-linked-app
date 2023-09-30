import React from "react";
import winWise from "../../assets/images/Winwise logo White colour.png";
import wisper from "../../assets/images/wisper logo white.png";
import liberty from "../../assets/images/Liberty company logo white.png";
import libertyWhite from "../../assets/images/libertyLogo.png";
import "./partners.css";
import "./media.css";


const Partners = () => {
  return (
    <section className="card">
      <div className="container">
        <div className="partner-div" style={{ textAlign: "center" }}>
          <header className="partner-header" style={{ marginBottom: "4rem" }}>
            <h3 className="card-heading">Partners and Sponsors</h3>
            <p>
              Getlinked Hackathon 1.0 is honored to have the following major{" "}
              <br />
              companies as its partners and sponsors
            </p>
          </header>
          <div className="partner-logos">
            <div className="grid-items">
              <div className="grid-item-img">
                <img src={libertyWhite} alt="" className="liberty-white" />
              </div>
              <div className="horizontal-line"></div>
            </div>

            <div className="vertical-line"></div>

            <div className="grid-items">
              <div className="grid-item-img">
                <img src={liberty} alt="" className="liberty" />
              </div>
              <div className="horizontal-line"></div>
            </div>

            <div className="vertical-line"></div>

            <div className="grid-items">
              <div className="grid-item-img">
                <img src={winWise} alt="" className="win-wise" />
              </div>
              <div className="horizontal-line"></div>
            </div>

            <div className="grid-items">
              <div className="grid-item-img">
                <img src={wisper} alt="" className="wisper" />
              </div>
            </div>

            <div className="vertical-line"></div>

            <div className="grid-items">
              <div className="grid-item-img">
                <p className="paybox">
                  Pay<span style={{ color: "blue" }}>box</span>
                </p>
              </div>
            </div>

            <div className="vertical-line"></div>
            <div className="grid-items">
              <div className="grid-item-img">
                <p
                  className="vuzual"
                >
                  Vuzual&nbsp;
                  <span
                   className="vuzual-span"
                  >
                    Plus
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
