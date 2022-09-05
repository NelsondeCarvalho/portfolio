import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h3>GET IN TOUCH</h3>
      <h2>Diz Ola!</h2>
      <div className="container contact__container">
        <div className="contact__remarks">
          <p>
            I'm available for freelance work, drop me a line if you fancy a
            chat.
          </p>
          <p>
            If you’d like to send me a message, I can be reached through various
            ways! If you prefer email, simply fill out the form below or send me
            a message directly at <a href="email">hello@nelsondecarvalho.com</a>
          </p>
        </div>
        
        <div className="contact__form">
          <form className="form__content">
            <div className="form">
              <label htmlFor="one">Full Name: </label>
              <input
                required
                type="text"
                placeholder="Your Name"
                className="InputClass"
              />
            </div>
            <div className="form">
              <label htmlFor="one">email: </label>
              <input
                required
                type="email"
                placeholder="someone@somedomain.something"
                className="InputClass"
              />
            </div>
            <div className="form">
              <label htmlFor="one">Message: </label>
              <input
                required
                type="text"
                placeholder="Write your message here"
                className="message__Input"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
