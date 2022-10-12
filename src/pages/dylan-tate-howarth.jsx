import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import RichText from "../components/RichText/RichText";
import DylanAudioGroup from "../components/DylanAudioGroup/DylanAudioGroup";

import {
  hero,
  instructions,
  cardGrid,
  card,
  transcriptSection,
  active,
  disabled,
} from "./dylan-tate-howarth.module.scss";

const bio = `<p>Dylan Tate-Howarth is a theatre artist and poet based in Toronto. She works as a stage manager primarily for new and/or devised theatre. Selected stage management credits include Two Birds One Stone (Two Birds Theatre); Italian Mime Suicide, and Flashing Lights (Bad New Days); Broken Shapes (The Theatre Centre); and White Girls in Moccasins (manidoons collective and Buddies in Bad Times). Dylan is a co-creator of Probably Theatre Collective and co-curator of Probably Poetry.</p>`;

const DylanTateHowarth = ({ data }) => {
  const { artistName, nameImage, content } = data.contentfulArtistPage;

  const [activePlayer, setActivePlayer] = useState("");
  const [disabledPlayers, setDisabledPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState([content[0]]);
  const [completedJourney, setCompletedJourney] = useState(false);

  useEffect(() => {
    if (!completedJourney && disabledPlayers.length === 1) {
      const excludeTenthAudio = content.filter(
        (audioGroup, index) => index !== content.length - 1
      );
      setAvailablePlayers(excludeTenthAudio);
    }
    if (!completedJourney && disabledPlayers.length === 9) {
      setAvailablePlayers(content);
    }
    if (disabledPlayers.length === 10) {
      setDisabledPlayers([]);
      setAvailablePlayers([content[0]]);
      setCompletedJourney(true);
    }
  }, [content, disabledPlayers.length, completedJourney]);

  return (
    <Layout>
      <section className={hero}>
        <ArtistPageH1 image={nameImage} name={artistName} />
        <div className={instructions}>
          <h2>Ten Days of Returning</h2>
          <p>
            Instructions: While you watch, listen to the audio below, starting
            with 1 and ending with 10, but otherwise listen in whatever order
            you like. There is a transcript further down the page.
          </p>
        </div>
        <VideoPlayer url="https://vimeo.com/755582532/7accf22b5d" />
        <ol className={cardGrid}>
          {content.map((audioGroup) => (
            <li
              key={audioGroup.id}
              className={`${card} ${
                activePlayer === audioGroup.id ? active : ""
              } ${disabledPlayers.includes(audioGroup.id) ? disabled : ""}`}
            >
              <DylanAudioGroup
                audioGroup={audioGroup}
                activePlayer={activePlayer}
                setActivePlayer={setActivePlayer}
                disabledPlayers={disabledPlayers}
                setDisabledPlayers={setDisabledPlayers}
                availablePlayers={availablePlayers}
              />
            </li>
          ))}
        </ol>
      </section>
      <section className={transcriptSection}>
        <h2>Ten Days of Returning</h2>
        <ol className={cardGrid}>
          {content.map((audioGroup) => (
            <li
              className={`${card} ${
                activePlayer === audioGroup.id ? active : ""
              } ${disabledPlayers.includes(audioGroup.id) ? disabled : ""}`}
              key={audioGroup.id}
            >
              <h3>{audioGroup.title}</h3>
              <RichText richText={audioGroup.transcript} />
            </li>
          ))}
        </ol>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default DylanTateHowarth;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "dylan-tate-howarth" }) {
      artistName
      nameImage {
        description
        gatsbyImageData
      }
      content {
        id
        title
        transcript {
          raw
        }
        audio {
          url
        }
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
