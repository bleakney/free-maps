import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="donate">
        <button id="donate-button">Donate Here</button>
      </div>
      <div className="icon-logos">
        <SocialIcon url="https://github.com/bleakney/free-maps" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://twitter.com/" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://linkedin.com/"  style={{ height: 35, width: 35 }} />
      </div>
    </div>
  );
}

export default Footer;
