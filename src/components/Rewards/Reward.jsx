import React from "react";
import Trophy from "../../assets/images/trophy.png";
import Gold from "../../assets/images/gold.png";
import Silver from "../../assets/images/silver.png";
import Bronze from "../../assets/images/bronze.png";
import BrightFlare from "../../assets/images/PurpleLensFlare.svg";
import { motion } from "framer-motion";
import "./reward.css";
import "./media.css"

const Reward = () => {
  return (
    <section className="card">
      <div className="container">
        <div className="reward-section">
          <div className="reward-heading">
            <div className="spacing-div"></div>
            <div className="reward-header">
              <h3 className="card-heading">
                Prizes and <br /> <span className="primary">Rewards</span>
              </h3>
              <p>
                Highlights of the prizes or rewards for the winners and
                participants.
              </p>
            </div>
          </div>
          <div className="reward-trophy-div">
            <div>
              <motion.img
                whileInView={{
                  y: [0, -50, 0],
                  transition: { yoyo: Infinity, duration: 2 },
                }}
                src={Trophy}
                alt="a-trophy"
                className="trophy-image card-image"
              ></motion.img>
            </div>

            <div className="medal-section">
              <div className="medal-div">
                <img src={Silver} alt="" className="silver" />
                <h4>2nd</h4>
                <p>Runner</p>
                <p className="price">N300,000</p>
              </div>

              <div className="g-medal-div">
                <img src={Gold} alt="" className="gold" />
                <h4>1st</h4>
                <p>Runner</p>
                <p className="price">N500,000</p>
              </div>

              <div className="medal-div">
                <img src={Bronze} alt="" className="silver" />
                <h4>3rd</h4>
                <p>Runner</p>
                <p className="price">N150,000</p>
              </div>
              <img
                src={BrightFlare}
                alt=""
                className="reward-right-flare bright-flare"
              />
            </div>

            <img
              src={BrightFlare}
              alt=""
              className="reward-flare bright-flare"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reward;
