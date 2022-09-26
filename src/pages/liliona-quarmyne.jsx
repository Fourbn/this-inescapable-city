import React, { useRef, useState } from "react";
import { graphql } from "gatsby";
import useFade from "../hooks/useFade";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

import {
  videoWrapper,
  introWrapper,
  divider,
  bioStyles,
} from "./liliona-quarmyne.module.scss";

const bio = `<p>Based in Kjipuktuk (Halifax), on the powerful, unceded and unsurrendered land of the Mi'kmaq people, Liliona is a dancer, choreographer, actor, singer, community organizer, and activist. Originally from Ghana and the Philippines, she has an eclectic background that has taken her through many performance styles on four different continents. Liliona performs across the country and internationally, creates original works as an independent artist, facilitates community programming, and is the Artistic Director of Kinetic. The scope of Liliona’s artistic work is broad, but is particularly focused on the relationship between art and social justice, on the body’s ability to carry ancestral memory, and on the role the performing arts can play in creating change. Liliona loves to work in collaboration and community, and is mom to two wonderful kids.</p> 

<p>--- My body is a conduit, a link to past and to future generations.</p> 
<p>It takes me back, it takes me forward, it carries the present.</p>

<p>My body is story. ---</p>`;

const LilionaQuarmyne = () => {
  const [introIsVisible, setIntroIsVisible, introFadeProps] = useFade(true);
  const [showDivider, setShowDivider] = useState(true);

  const handleIntroVideoEnded = (player) => {
    setShowDivider(false);
    setIntroIsVisible(false);
  };

  return (
    <Layout>
      <section>
        <h1>Liliona Quarmyne</h1>
        <div className={videoWrapper}>
          {introIsVisible && (
            <div
              className={`${introWrapper} ${introFadeProps.className}`}
              onAnimationEnd={introFadeProps.onAnimationEnd}
            >
              <VideoPlayer
                url="https://vimeo.com/753124670/249c954997"
                onEnded={handleIntroVideoEnded}
                playing
                controls={false}
              />
            </div>
          )}
          {showDivider && <div className={divider} />}
          <VideoPlayer url="https://vimeo.com/753125894/f16b9f1293" />
        </div>
      </section>
      <ArtistBio bio={bio} className={bioStyles} />
    </Layout>
  );
};

export default LilionaQuarmyne;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "liliona-quarmyne" }) {
      artistName
    }
  }
`;

export { Head } from "../components/Head/Head";
