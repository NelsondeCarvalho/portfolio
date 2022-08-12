import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nelsondecarvalho/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/NelsondeCarvalho" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/Man_nerso" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
