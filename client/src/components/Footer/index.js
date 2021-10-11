import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="donate">
        <button id="donate-button">Donate Here</button>
      </div>
      <div className="icon-logos">
        <SocialIcon url="https://github.com/bleakney/free-maps" />
        <SocialIcon url="https://twitter.com/" />
        <SocialIcon url="https://linkedin.com/" />
      </div>
    </div>
  );
}

export default Footer;
