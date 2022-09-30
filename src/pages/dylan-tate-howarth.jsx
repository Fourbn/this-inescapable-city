import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import RichText from "../components/RichText/RichText";
import DylanAudioGroup from "../components/DylanAudioGroup/DylanAudioGroup";

import {
  audioSection,
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

  return (
    <Layout>
      <section>
        <ArtistPageH1 image={nameImage} name={artistName} />
        <VideoPlayer url="https://vimeo.com/755582532/7accf22b5d" />
      </section>
      <section className={audioSection}>
        <div>
          <h2>Ten Days of Returning</h2>
          <p>
            Start with 1 and end with 10, but otherwise please listen to the
            following in any order that you like. A transcript is below.
          </p>
        </div>
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
              />
            </li>
          ))}
        </ol>
      </section>
      <section className={transcriptSection}>
        <h2>Transcript</h2>
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
