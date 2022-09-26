import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";


const bio = `<p>Yolanda Bonnell (She/They) is a Bi/Queer 2 Spirit Anishinaabe-Ojibwe, South Asian mixed performer, playwright and multidisciplinary creator/educator. Originally from Fort William First Nation in Thunder Bay, Ontario (Superior Robinson Treaty territory), her arts practice is now based in Tkarón:to. She is Co-artistic leader of manidoons collective, that she runs with Michif (Métis) artist, Cole Alvis. In February 2020, Yolanda’s four-time Dora nominated solo show bug was remounted at Theatre Passe Muraille while the published book was shortlisted for a Governor General Literary Award. In 2018, Yolanda was invited to be part of the Banff Playwright’s Lab with her piece, White Girls in Moccasins, was produced at Buddies in Bad Times Theatre in March 2022. Yolanda was the Indigenous artist recipient of the Jayu Arts for Human Rights Award for her work and won the PGC Tom Hendry Drama Award for her play, My Sister’s Rage. Yolanda has taught at schools like York University and Sheridan College and proudly bases her practice in land-based creation, drawing on energy and inspiration from the earth and her ancestors.</p>`;

const YolandaBonnell = () => {
  return (
    <Layout>
      <section>
        <h1>Yolanda Bonnell</h1>
        <VideoPlayer url="https://vimeo.com/753926718/96be8c00b8" />
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default YolandaBonnell;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "yolanda-bonnell" }) {
      artistName
    }
  }
`;

export { Head } from "../components/Head/Head";
