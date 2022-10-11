import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { heading, headingImg, addedText, rihkeeHeading } from "./ArtistPageH1.module.scss";

const ArtistPageH1 = ({ name, image, rihkee }) => {
  return (
    <h1 className={`${heading} ${rihkee ? rihkeeHeading : ""}`}>
      <span className="sr-only">{name}</span>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className={headingImg}
      />
      {rihkee && (
        <span className={addedText}>
          <span>+</span> <span>DALL·E 2</span>
        </span>
      )}
    </h1>
  );
};

export default ArtistPageH1;
