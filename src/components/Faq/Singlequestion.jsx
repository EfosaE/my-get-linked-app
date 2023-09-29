import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Singlequestion = ({ question }) => {
  const { id, title, info } = question;
  const [showInfo, setShowInfo] = useState(false);

  function toggleInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{
        opacity: 1, // Target opacity value when in view
        x: 0, // Target horizontal position when in view
        transition: {
          duration: 1,
        },
      }}
      className="question"
    >
      <header className="flex-container">
        <h5>{title}</h5>
        <button
          className="btn-faq"
          onClick={() => {
            toggleInfo();
          }}
        >
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>

      <p className="accordion-p">{showInfo ? info : ""}</p>
    </motion.div>
  );
};

export default Singlequestion;
