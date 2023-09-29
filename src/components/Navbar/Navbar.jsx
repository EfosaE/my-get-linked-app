import React, { useState } from "react";
import Links from "./Links";
import { links } from "./data";
import { Link } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import "./nav.css";
import "./media.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="nav-header">
            <h3 className="icon">
              get<span className="primary">linked</span>
            </h3>
            <button
              className="menu"
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <HiBars3BottomLeft />
            </button>
          </div>
          <div className={showMenu ? "nav-links show-menu" : "nav-links"}>
            <button
              className="menu cancel-menu"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <MdOutlineClose />
            </button>
            <Links links={links} setRegisterBtn={setIsRegisterActive} setShowMenu={setShowMenu} />
            <div className="nav-btn">
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                className="l-btn"
              >
                <Link
                  to="/register/register"
                  onClick={() => {
                    setIsRegisterActive(true);
                    setShowMenu(false);
                  }}
                  className={isRegisterActive ? "register-active" : ""}
                >
                  Register
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
