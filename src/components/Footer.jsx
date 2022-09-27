import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container foot__container">
        <label className="custom__field">
          <input type="text" required />
          <span className="placeholder">Full Name</span>
        </label>

        <label className="custom__field email__custom__field">
          <input type="text" required />
          <span className="placeholder">Email</span>
        </label>
      
        <label className="custom__field msg__custom__field">
          <textarea type='text' required className="msg__input"/>
          <label className="placeholder">Write your thoughts here</label>
        </label>
      </div>
    </section>
  );
};

export default Footer;
