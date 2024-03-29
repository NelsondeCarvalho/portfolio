import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderShared } from "react-icons/md";
import ME2 from "../assets/yellow-stone-alpha.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__card">
            <img src={ME2} className="About__me__Img" alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Endorsements</h5>
              <small>The crowd favorite</small>
            </article>

            <article className="about__card">
              <MdOutlineFolderShared className="about__icon" />
              <h5>Projects</h5>
              <small>What I'm proud of</small>
            </article>
          </div>

          <p>
            I am a Full Stack Web Developer who loves building interactive
            user-friendly websites and apps with an eye on animated content.
          </p>

          <a href="#contact" className="btn tbn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
