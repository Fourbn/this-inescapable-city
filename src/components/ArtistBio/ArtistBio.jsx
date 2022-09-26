import React from "react";

import { bioStyles } from "./ArtistBio.module.scss";

const ArtistBio = ({ bio, headshot = false, plural = false, className }) => {
  return (
    <section className={`${bioStyles} ${className}`}>
      <h2>About the artist{plural && "s"}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: bio,
        }}
      />
      {headshot && (
        <img src="https://place-puppy.com/300x200" alt="Placeholder alt text" />
      )}
    </section>
  );
};

export default ArtistBio;
