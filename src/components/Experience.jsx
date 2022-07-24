import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return <section id="experience">
    <h5>Here are some of the skills I have.</h5>
    <h2>My experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Front End development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </div>
            </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>TypeScript</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Back End development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Node.JS</h4>
              <small className="text-light">Experienced</small>
            </div>  
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>MangoDB</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>mySQL</h4>
              <small className="text-light">basic</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>TypeScript</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>;
};

export default Experience;
  