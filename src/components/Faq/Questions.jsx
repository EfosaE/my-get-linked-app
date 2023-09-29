import React from "react";
import Singlequestion from "./Singlequestion";
import { motion } from "framer-motion";

const Questions = ({ questions }) => {
  return (
    <div className="faq-main">
    <div className="faq-header">
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
        Frequently Asked <span className="primary">Question</span>
      </motion.h4>
      <p>
        We got answers to the questions that you might want to ask about
        getlinked Hackathon 1.0
      </p>  
      </div>
      {questions.map((question) => {
        return <Singlequestion question={question} key={question.id} />;
      })}
  </div>
  );
};

export default Questions;
