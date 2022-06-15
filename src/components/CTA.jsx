import React from "react";
import CV from "../assets/cv.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Get Resume
      </a>
      <a href="#contact" className="btn tbn-primary">
        Let's talk!
      </a>
    </div>
  );
}

export default CTA;
