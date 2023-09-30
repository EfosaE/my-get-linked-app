import React from "react";
import Padlock from "../../assets/images/padlock.png";
import Shield from "../../assets/images/shield.svg";
import {FaCircleCheck} from 'react-icons/fa6'
import "./privacy.css"
import "./media.css";

const PrivacyPolicy = () => {
  return (
    <section className="card overflow">
      <div className="container">
        <div className="privacy-div">
          <div className="privacy-section">
            <div className="privacy-header">
              <h3 className="card-heading">
                Privacy Policy and <br /> <span className="primary">Terms</span>
              </h3>
              <p className="privacy-date">Last updated on September 12, 2023</p>
              <p className="privacy-text">
                Below are our privacy &amp; policy, which outline a lot of
                goodies. it’s our aim to always take of our participant
              </p>
            </div>

            <article className="privacy-article">
              <p className="privacy-text">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <h4 style={{ fontSize: "1rem" }}>
                <span className="primary">Licensing Policy</span>
              </h4>
              <h5 style={{ fontSize: ".875rem", fontWeight: "700" }}>
                Here are terms of our Standard License:
              </h5>
              <div className="privacy-text-list">
                <FaCircleCheck className="list-terms" />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="privacy-text-list">
                <FaCircleCheck className="list-terms" />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <button className="btn">Read More</button>
            </article>
          </div>

          <div className="image-section">
            <img src={Shield} alt="" className="shield" />
            <img src={Padlock} alt="" className="padlock" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
