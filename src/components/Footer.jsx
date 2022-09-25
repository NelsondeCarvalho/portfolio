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

        <label className="custom__field">
          <input for="email" required type="email"/>
          <span className="placeholder">Email</span>
        </label>
      
        <label className="msg__custom__field custom__field">
          <textarea  for="comp" required className="msg__input"/>
          <label className="placeholder">Write your thoughts here</label>
        </label>
      </div>
    </section>
  );
};

export default Footer;
