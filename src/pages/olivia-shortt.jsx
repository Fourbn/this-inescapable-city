import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import OliviaModal from "../components/OliviaModal/OliviaModal";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import { hero, allModals } from "./olivia-shortt.module.scss";
import DelayedRender from "../components/DelayedRender/DelayedRender";

const bio = `<p>(Anishinaabe, Nipissing First Nation) Olivia Shortt is a Tkarón:to-based performing artist, sound artist, composer, noise-maker, trouble-maker and professional disrupter.</p>

<p>Highlights include Shortt’s world premiere performance (Whitney Museum of American Art, NYC) of ‘For Olivia Shortt’ that Pulitzer Prize Composer Raven Chacon wrote for Shortt as part of Chacon’s series ‘For Zitkala-Ša’ (featured at The 2022 Whitney Biennial); their Lincoln Center (NYC) debut in 2018; their film debut in Atom Egoyan’s 2019 film ‘Guest of Honour’; and recording an album two kilometres underground in the SnoLAB (Sudbury, Canada). Recent projects include a new opera in partnership with Loose Tea Music Theatre (Toronto), a commission for Blueridge Chamber Festival (Vancouver), and collaborative new work with thirtyminutes (Canada/England). Works created over the last two years include commissions from Long Beach Opera (California), the JACK Quartet (NYC), and Din of Shadows (Toronto).</p>

<p>Shortt was a finalist for the 2021 Toronto Arts Foundation Emerging Artist Award, was one of the 2020 Buddies in Bad Times’ Emerging Queer Artists & is featured in the 2020 Winter edition of Musicworks Magazine. They love cats, glitter and collaborating with others. <a href="https://www.olivia-shortt.com" target="_blank" rel="noopener noreferrer">www.olivia-shortt.com</a></p>`;

const popUpMessages = [
  ["error", 500],
  ["treaties broken n n n n n n n n n", 3000],
  ["water is life", 3400],
  ["long-term drinking water advisories on reserves", 5000],
  ["w a t e r r r r r r r r r r", 5100],
  ["don't drink the water", 5200],
  ["the prime minister lied to us", 5300],
  ["we can't drink the water", 5400],
];

const OliviaShortt = ({ data }) => {
  const { artistName, nameImage } = data.contentfulArtistPage;

  const [showModals, setShowModals] = useState(false);

  return (
    <Layout>
      <section className={hero}>
        <ArtistPageH1 image={nameImage} name={artistName} />
        {showModals && (
          <div className={allModals}>
            {popUpMessages.map((message) => {
              const [string, delay] = message;
              return (
                <DelayedRender key={delay} delay={delay}>
                  <OliviaModal message={string} />
                </DelayedRender>
              );
            })}
          </div>
        )}
        <VideoPlayer
          url="https://vimeo.com/754786825/34ed4c92fa"
          onEnded={() => setShowModals(true)}
        />
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default OliviaShortt;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "olivia-shortt" }) {
      artistName
      nameImage {
        description
        gatsbyImageData
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
