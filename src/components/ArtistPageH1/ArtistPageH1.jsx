import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { heading, headingImg } from "./ArtistPageH1.module.scss";

const ArtistPageH1 = ({ name, image }) => {
  return (
    <h1 className={heading}>
      <span className="sr-only">{name}</span>
      <GatsbyImage image={image.gatsbyImageData} alt={image.description} className={headingImg} />
    </h1>
  )
}

export default ArtistPageH1;
