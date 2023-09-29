import React from "react";
import ContactForm from "./ContactForm";
import socialLinks from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import "./media.css";
import BrightFlare from "../../assets/images/purpleLensFlare.svg";
import SmallStar from "../../assets/images/sata gra.png";

const Contact = () => {
  function showAlert() {
    toast.success("Your Message Has Been Received", {
      position: "top-center",
      style: {
        background: "rgb(14, 6, 34)",
        color: "#fff",
        width: "100%",
      },
      progressStyle: {
        background:
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
    });
  }
  return (
    <div className="container">
      <ToastContainer/>
      <img src={BrightFlare} alt="" className="bright-flare contact-flare" />
      <img src={SmallStar} alt="" className="contact-small-star" />

      <div className="contact-div">
        <div className="contact-article">
          <div className="contact-header">
            <h1
              className="contact-title primary"
              style={{ fontSize: "1.5rem", fontWeight: "600" }}
            >
              Get in touch
            </h1>
            <p>
              Contact <br />
              Information
            </p>
            <p>
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>
            <p>Call Us : 07067981819</p>
            <p>
              we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </p>
          </div>
          <div className="contact-links">
            <h5 className="primary" style={{ fontSize: "1 rem" }}>
              Share on
            </h5>
            <ul className="social-links">
              {socialLinks.map((socialLink) => {
                return (
                  <li key={socialLink.url}>
                    <a href="">{socialLink.icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ContactForm showAlert={showAlert} />
      </div>
    </div>
  );
};

export default Contact;
