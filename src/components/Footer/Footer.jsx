import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  homeFooter,
  footerWrapper,
  credits,
  ccaLogo,
  simpleStyles,
} from "./Footer.module.scss";

const Footer = ({ simple }) => {
  return (
    <footer className={homeFooter}>
      <div className={`${footerWrapper} ${simple ? simpleStyles : ""}`}>
        <StaticImage
          src="../../assets/CCA_RGB_white_e.png"
          alt="Logo for the Canada Council for the Arts, grant provider for this project"
          className={`${ccaLogo} ${simple ? simpleStyles : ""}`}
        />
        {!simple && (
          <div className={credits}>
            <p>
              homepage artwork by{" "}
              <a
                href="https://www.sidsharp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sid Sharp
              </a>
            </p>
            <p>
              website built by{" "}
              <a
                href="https://www.codeturkie.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Philip Turkiewicz
              </a>
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
