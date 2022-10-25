import React, { useState } from "react";
import { graphql } from "gatsby";
import useFade from "../hooks/useFade";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import {
  contentSection,
  videoWrapper,
  introWrapper,
  divider,
  white,
} from "./liliona-quarmyne.module.scss";

const bio = `<p>Based in Kjipuktuk (Halifax), on the powerful, unceded and unsurrendered land of the Mi'kmaq people, Liliona is a dancer, choreographer, actor, singer, community organizer, and activist. Originally from Ghana and the Philippines, she has an eclectic background that has taken her through many performance styles on four different continents. Liliona performs across the country and internationally, creates original works as an independent artist, facilitates community programming, and is the Artistic Director of Kinetic. The scope of Liliona’s artistic work is broad, but is particularly focused on the relationship between art and social justice, on the body’s ability to carry ancestral memory, and on the role the performing arts can play in creating change. Liliona loves to work in collaboration and community, and is mom to two wonderful kids.</p> 

<p>--- My body is a conduit, a link to past and to future generations.</p> 
<p>It takes me back, it takes me forward, it carries the present.</p>

<p>My body is story. ---</p>`;

const LilionaQuarmyne = ({ data }) => {
  const { artistName, nameImage } = data.contentfulArtistPage;

  const [introIsVisible, setIntroIsVisible, introFadeProps] = useFade(true);
  const [dividerVisible, setDividerVisible, dividerFadeProps] = useFade(true);
  const [mainVideoPlaying, setMainVideoPlaying] = useState(false);

  const handleIntroVideoEnded = () => {
    setDividerVisible(false);
    setIntroIsVisible(false);
    setMainVideoPlaying(true);
  };

  return (
    <Layout>
      <ArtistPageH1 image={nameImage} name={artistName} />
      <section className={contentSection}>
        <div className={`${videoWrapper} grid-wrapper`}>
          {introIsVisible && (
            <div
              className={`${introWrapper} ${introFadeProps.className} grid-wrapper`}
              onAnimationEnd={introFadeProps.onAnimationEnd}
            >
              <VideoPlayer
                url="https://vimeo.com/753124670/249c954997"
                onEnded={handleIntroVideoEnded}
                playing
                muted
                controls={false}
                divider={false}
              />
            </div>
          )}
          {dividerVisible && (
            <div
              onAnimationEnd={dividerFadeProps.onAnimationEnd}
              className={`${divider} ${dividerFadeProps.className}`}
            />
          )}
          <VideoPlayer
            url="https://vimeo.com/753125894/f16b9f1293"
            dividerClass={white}
            playing={mainVideoPlaying}
          />
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default LilionaQuarmyne;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "liliona-quarmyne" }) {
      artistName
      nameImage {
        gatsbyImageData
        description
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
