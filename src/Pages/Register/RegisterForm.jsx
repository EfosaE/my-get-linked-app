import { useState } from "react";
import GirlWalking from "../../assets/images/girl-walking.png";
import BoyWalking from "../../assets/images/boywalking.png";
import { formElementInputs, formElementSelects } from "./formData";

const RegisterForm = ({ showModal, setShowModal }) => {
  const [terms, setTerms] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!terms) {
      setShowAlert(true);
    } else {
      setShowModal(true);
      console.log("form has been successfully submitted");
      e.currentTarget.reset();
      setTerms(false);
      setShowAlert(false);
    }
  }
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <header>
        <div className="register-form-header">
          <h3 className="primary" style={{ fontWeight: "600" }}>
            Register
          </h3>
          <p>Be part of this movement!</p>
        </div>

        <div className="img-walk ">
          <img src={BoyWalking} alt="" />
          <img src={GirlWalking} alt="" />
          <hr style={{ border: "1px dotted #D434FE", width: "6.3125rem" }} />
        </div>
      </header>

      <h2>CREATE YOUR ACCOUNT</h2>
      <div className="register-form-elements">
        {formElementInputs.map(({ label, name, type}) => {
          return (
            <div className="form-elements" style={{ margin: "0rem" }} key={label}>
              <label htmlFor={name}>{label}:</label>
              <input type={type} id={name} name={name} required></input>
            </div>
          );
        })}

        {formElementSelects.map(({ label, name, options }) => {
          return (
            <div
              className="form-elements"
              style={{ marginBottom: "1.5rem" }}
              key={label}
            >
              <label htmlFor={name}>{label}:</label>
              <select id={name} name={name}>
                {options.map(({ value}) => {
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
      <p
        style={{
          color: "#FF26B9",
          fontFamily: "Montserrat",
          fontStyle: "italic",
        }}
        className="alert-text"
      >
        {showAlert &&
          "Please review your registration details before submitting"}
      </p>

      <div
        className="terms-conditions"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <input
          type="checkbox"
          name="terms and conditions"
          id=""
          checked={terms}
          onChange={() => {
            setTerms(!terms);
          }}
        />
        <p>I agreed with the event terms and conditions and privacy policy</p>
      </div>

      <button type="submit" className="btn" style={{ width: "100%" }}>
        Register Now
      </button>
    </form>
  );
};

export default RegisterForm;
