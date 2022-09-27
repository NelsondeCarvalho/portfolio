import React from "react";
import "./Contact.css";
import "../assets/yellow-stone-alpha.png"

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
            I'm available for freelance work, drop me a line if you fancy a
            chat.
          </p>
          <p>
            If you’d like to send me a message, I can be reached through various
            ways! If you prefer email, simply fill out the form below or send me
            a message directly at <a href="email">hello@nelsondecarvalho.com</a>
          </p>
          </div>
          </div>

{/* =================== Reft Side ===================== */}

        <div className="container contact__form">
          <form className="form__content">
            <div className="form__div">              
              <input
                required
                type="text"
                placeholder=" "
                className="form__input"
              />
              <label className="form__label">Full Name </label>
            </div>
            <div className="form__div">              
              <input
                required
                type="email"
                placeholder=" "
                className="form__input"
              />
              <label className="form__label">Email</label>
            </div>
            <div className="form__div">                
              <textarea required className="form__input msg__input" placeholder=" "></textarea>
              <label className="form__label">Write your thoughts here</label> 
            </div>
          </form>
          <button type="submit" className="form__button tbn-primary">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
