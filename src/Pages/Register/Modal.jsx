import React from "react";
import successMan from "../../assets/images/success-man.png";
import successDone from "../../assets/images/success-done.png";

const Modal = ({showModal, setShowModal}) => {
  return (
    <div className={showModal ? "show-modal modal-bg" : "modal-bg"}>
      <div className="modal-container">
        <div className="modal-img">
          <img src={successDone} alt="" />
          <img src={successMan} alt="" />
        </div>
        <div className="modal-text">
          <h4 style={{ fontSize: "1.5rem" }}>
            Congratulations <br /> you have successfully Registered!
          </h4>
          <p style={{ fontSize: ".875rem" }}>
            Yes, it was easy and you did it! <br /> check your mail box for next
            step.
          </p>
        </div>
        <button className="btn" style={{ width: "100%" }} onClick={()=>{setShowModal(false)}}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Modal;
