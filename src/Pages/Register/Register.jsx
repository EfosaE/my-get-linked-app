import React, {useState} from "react";
import RegisterForm from "./RegisterForm";
import thumbsUp from "../../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import BrightFlare from "../../assets/images/purpleLensFlare.svg";
import Modal from "./Modal";
import "./media.css"
import "./register.css";

const Register = () => {
   const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section className="register-section">
        <div className="container">
          <div className="register-div">
            <div className="register-img">
              <img
                src={BrightFlare}
                alt=""
                className="bright-flare register-flare"
              />
              <img
                src={thumbsUp}
                className="thumbs-up"
                alt=""
              />
            </div>
            <RegisterForm showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
