import React from "react";
import purpleImg from "../../assets/images/purpleLensFlare.svg";
import star from "../../assets/images/star.png";
import manGlasses from "../../assets/images/man-glasses.svg";
import blueGlobe from "../../assets/images/Image 1.svg";
import curve from "../../assets/images/Vector 4.svg";
import bulb from "../../assets/images/Creative 1.png";
import chain from "../../assets/images/chain.png";
import spark from "../../assets/images/spark.png";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import "animate.css";
import "./hero.css";
import "./media.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-italic-heading">
        <h4
          className="animate__animated animate__backInRight"
          style={{ fontFamily: "Montserrat", fontWeight: "700" }}
        >
          Igniting a Revolution in HR Innovation
        </h4>
        <img src={curve} alt="curve" className="curve" />
      </div>
      <img
        src={purpleImg}
        alt="purple-blur"
        className="bright-flare hero-flare"
      />
      <img
        src={star}
        alt="star"
        className="star animate__animated  animate__heartBeat animate__repeat-2"
      />

      <div className="container">
        <div className="section-heading">
          <img
            src={bulb}
            alt="bulb"
            className="bulb animate__animated animate__bounceInDown animate__delay-2s"
          />
          <h2>getlinked Tech</h2>
          <h2>
            Hackathon<span className="primary">1.0</span>
            <div style={{ marginTop: "4rem", display: "inline" }}>
              <img
                src={chain}
                alt="chain"
                className="chain animate__animated animate__backInRight"
              />
              <img
                src={spark}
                alt="spark"
                className="spark animate__animated animate__backInRight animate__delay-2s"
              />
            </div>
          </h2>
          <p>
            Participate in getlinked tech Hackathon 2023 stand <br></br> a
            chance to win a Big prize
          </p>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="btn"
          >
            <Link to="/register">Register</Link>
          </motion.button>
          <h3 style={{ fontFamily: "Unica One" }} className="counter">
            00<sub className="sub">H</sub> 00<sub className="sub">M</sub> 00
            <sub className="sub">S</sub>
          </h3>
        </div>
      </div>
      <div className="man-globe">
        <img src={manGlasses} alt="man-with-VR glasses" className="vr-glass" />
        <img src={blueGlobe} alt="blue-globe" className="blue-globe" />
      </div>
    </section>
  );
};

export default Hero;
