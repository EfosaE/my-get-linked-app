import React from "react";
import Content from "./Content";
import criterium from "./CriteriaData";
import ManAndWoman from "../../assets/images/man and woman.png";
import { motion } from "framer-motion";
import "./criteria.css";
import "./media.css"

const Criteria = () => {
  return (
    <section className="card">
      <div className="container">
        <div className="criteria-card">
            <img src={ManAndWoman} alt="Man and Woman" className="card-image" />

          <article className="criteria">
            <Content criterium={criterium} />
            <button className="btn">Read More</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
