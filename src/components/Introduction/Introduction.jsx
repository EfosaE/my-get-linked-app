import React from "react";
import BigIdea from "../../assets/images/the big idea.png";
import "./intro.css";
import "./media.css"
import { motion } from "framer-motion";


const Introduction = () => {
  return (
    <section className="card overflow" id="overview">
      <div className="container">
        <div className="introduction">
          <div className="introduction-image">
            <motion.img
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{
                opacity: 1, // Target opacity value when in view
                x: "0%", // Target horizontal position when in view
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              src={BigIdea}
              alt="big-idea"
              className="big-idea"
            />
          </div>

          <div>
            <motion.h4
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{
                opacity: 1, // Target opacity value when in view
                x: "0%", // Target horizontal position when in view
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="card-heading"
            >
              Introduction to getlinked <br></br>
              <span className="primary"> tech Hackathon 1.0</span>
            </motion.h4>

            <p className="card-paragraph">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
