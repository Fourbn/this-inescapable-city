import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

import { bioStyles, textWrapper, headshotStyles, headshotIncluded } from "./ArtistBio.module.scss";

const ArtistBio = ({ bio, headshot, plural = false, className }) => {
  return (
    <section className={`${bioStyles} ${className} ${headshot ? headshotIncluded : ""}`}>
      <h2>About the artist{plural && "s"}</h2>
      <div
      className={textWrapper}
        dangerouslySetInnerHTML={{
          __html: bio,
        }}
      />
      {headshot && (
        <GatsbyImage
          image={headshot.gatsbyImageData}
          alt={headshot.description}
          className={headshotStyles}
        />
      )}
    </section>
  );
};

export default ArtistBio;
