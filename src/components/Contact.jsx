import React from "react";
import "./Contact.css";


const Contact = () => {
  return (
    <section id="contact">
      <h5>GET IN TOUCH</h5>
      <h2>Diz Ola!</h2>
      <div className="container contact__container">

        {/* =================== Left Side ===================== */}

        <div className="contact__remarks">
          <div className="remarks__text">
            <p>
              I'm available for freelance work. Drop me a line if you fancy a
              chat.
            </p>
            <br />
            <p>
              If you’d like to contact me, I can be reached through various
              ways! If you prefer email, simply fill out the form or send me
              an email directly at <a href="email">hello@nelsondecarvalho.com</a> for a faster response.
            </p>
          </div>
        </div>

        {/* =================== Reft Side ===================== */}

        <div className="container contact__form">
          <form className="form__content">
            <label className="custom__field">
              <input type="text" required />
              <span className="placeholder">Full Name</span>
            </label>

            <label className="custom__field email__custom__field">
              <input type="text" required />
              <span className="placeholder">Email</span>
            </label>

            <label className="custom__field msg__custom__field">
              <textarea type='text' required className="msg__input" />
              <label className="placeholder">Write your thoughts here...</label>
            </label>
            <button type="submit" className="form__button tbn-primary">Send</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
