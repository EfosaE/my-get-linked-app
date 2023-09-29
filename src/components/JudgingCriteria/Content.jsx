import React from "react";
import { motion } from "framer-motion";

const Content = ({ criterium }) => {
  return (
    <div>
      <div>
        <motion.h4
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: "0%",
            transition: {
              duration: 1,
            },
          }}
          className="card-heading"
        >
          Judging Criteria <br></br>
          <span className="primary">Key Attributes</span>
        </motion.h4>
      </div>

      {criterium.map((criteria) => {
        const { text, title } = criteria;

        const animationProps = {
          initial: { x: "100%", opacity: 0 },
          whileInView: {
            opacity: 1,
            x: "0%",
            transition: {
              duration: 1,
            },
          },
        };

        return (
          <div key={title}>
            <motion.p {...animationProps}>
              <span className="points">{title}:</span> {text}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
