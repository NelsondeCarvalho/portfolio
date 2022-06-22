import React from "react";
import "./Nav.css";
import { BiHome } from "react-icons/bi"
import { BiUser } from "react-icons/bi"
import { GiNotebook } from "react-icons/gi"
import { GiSkills } from "react-icons/gi"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { TiMessages } from "react-icons/ti"
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiNotebook /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineHomeRepairService /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages /></a>
  </nav>
  );
};

export default Nav;
