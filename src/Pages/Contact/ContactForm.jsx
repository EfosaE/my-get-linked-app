import React, {useState, useEffect} from "react";
import "./contact.css";


const ContactForm = ({showAlert}) => {
  const [showP, setShowP] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the screen width
      setShowP(window.innerWidth <= 600);
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    showAlert()
    e.currentTarget.reset()
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <header className="form-header">
        <h3 className="primary">
          Questions or need assistance? <br />
          Let us know about it
        </h3>
        {showP && <p>Email us below to any question related to our event</p>}
      </header>
      <div className="form-elements">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First-Name"
          required
        ></input>
      </div>
      <div className="form-elements">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Mail"
          required
        ></input>
      </div>
      <div className="form-elements">
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn form-btn">
        submit
      </button>
    </form>
  );
};

export default ContactForm;
