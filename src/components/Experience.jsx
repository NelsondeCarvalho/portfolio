import React from "react";
import "./Experience.css";

const Experience = () => {
  return <section id="experience">
    <h5>Here are some of the skills I have.</h5>
    <h2>My experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Front End development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <h4>HTML</h4>
          </article>
        </div>
      </div>
      <div className="experience__backend">
      <h3>Back End development</h3>
      </div>
    </div>
  </section>;
};

export default Experience;
  