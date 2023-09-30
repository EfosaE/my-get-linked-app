import React from "react";
import woman from "../../assets/images/woman.png";
import blur from "../../assets/images/purpleLensFlare.svg";
import { motion } from "framer-motion";
import "./rules.css";
import "./media.css";

const RulesSection = () => {
  return (
    <section className="card overflow">
      <div className="container">
        <div className="rules">
          <div>
            <img src={blur} alt="blur" className="bright-flare rules-flare" />
            <motion.h4
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{
                opacity: 1, // Target opacity value when in view
                x: "0%", // Target horizontal position when in view
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="card-heading"
            >
              Rules and <br/> <span className="primary">Guidelines</span>
            </motion.h4>

            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
            <img src={blur} alt="blur" className="side-flare bright-flare" />
          </div>
          <div>
            <motion.img
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{
                opacity: 1, // Target opacity value when in view
                x: "0%", // Target horizontal position when in view
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              src={woman}
              alt="woman"
              className="card-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
