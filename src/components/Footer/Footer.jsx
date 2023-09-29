import React from "react";
import "./footer.css";
import "./media.css"
import Link from "./Link";
import { links, socialLinks } from "./data";
import SocialLinks from "./SocialLinks";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-divs">
          <header className="footer-header">
            <h3 className="icon">
              get<span className="primary">linked</span>
            </h3>
            <p>
              Getlinked Tech Hackathon is a technology innovation program <br />
              established by a group of organizations with the aim of showcasing{" "}
              <br />
              young and talented individuals in the field of technology
            </p>
            <p className="terms">
              Terms of Use <span className="primary pipe">|</span> Privacy
              Policy
            </p>
          </header>

          <div>
            <Link links={links} />
            <div className="follow-us">
              <p className="e-small-text follow" style={{marginRight:"1rem"}}>Follow us</p>
              <SocialLinks socialLinks={socialLinks} />
            </div>
          </div>

          <address className="contact">
            <h4 className="footer-div-title">Contact us</h4>
            <p className="e-small-text">
              <FaPhoneVolume /> +234 6707653444
            </p>
            <p className="e-small-text">
              <FaLocationDot /> 27,Alara Street Yaba 100012 Lagos State
            </p>
          </address>
        </div>
      </div>
      <div>
        <p style={{textAlign:"center", marginBottom:"0rem" ,fontSize:".75rem"}}>All Rights Reserved. &copy; getLinked Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
