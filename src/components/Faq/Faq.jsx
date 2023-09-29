import questionData from "./data";
import { useState, useEffect } from "react";
import Questions from "./Questions";
import ManThinking from "../../assets/images/man-thinking.png";
import { motion } from "framer-motion";
import "./faq.css";
import "./media.css"


const Faq = () => {
  const [questions, setQuestions] = useState(questionData);

  return (
    <section className="card" id="faq">
      <div className="container">
        <div className="faq-card">
          <Questions questions={questions} />

          <div className="faq-img-section">
            <div className="question-marks"></div>
            <div>
              <motion.img
                whileInView={{
                  y: [0, -50, 0],
                  transition: { yoyo: Infinity, duration: 2 },
                }}
                src={ManThinking}
                className="card-image clouds"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
