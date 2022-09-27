import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../assets/nelson1.png";

const Header = () => {
  return (
    <div className="container">
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Nelson de Carvalho</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <h2>this is me</h2>
        <CTA />
        <div className="me">
          <img src={ME} alt="Nelson profile pic" />
        </div>

        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Header;
