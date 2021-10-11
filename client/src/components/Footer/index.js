import React from "react";
import { LogoGithubIcon } from '@primer/octicons-react';

function Footer() {
    return (
        <div class="footer">
            <button>Donate Here</button>
            <div className="icon-logos">
           <a id="github-icon" href="https://github.com/bleakney/free-maps" target="_blank"> <LogoGithubIcon size={16}/></a>
            </div>
        </div>
    );
  }
  
  export default Footer;