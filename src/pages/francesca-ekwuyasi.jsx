import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import { contentSection } from "./francesca-ekwuyasi.module.scss";

const bio = `<p>francesca ekwuyasi is a learner, storyteller, and multidisciplinary artist from Lagos, Nigeria. Her work has explored themes of faith, family, queerness, consumption, loneliness, and belonging.</p>

<p>francesca's debut novel, Butter Honey Pig Bread, was longlisted for the 2020 Giller Prize, was a finalist for CBC's 2021 Canada Reads, the 2021 Lambda Literary Award, the 2021 Governor General's Award, the 2021 Amazon Canada First Novel Award, and the 2021 ReLit Award. Butter Honey Pig Bread was recently longlisted for the 2022 Dublin Literary Award. Her story, Ọrun is Heaven, was longlisted for the 2019 Journey Prize.</p>

<p>francesca has created and screened several experimental short films, with screenings at Black Film Festival in Montreal, Halifax, and Toronto; Durham Region International Film Festival (DRIFF), Nocturne Halifax, and the Khyber Centre for the Arts.</p>`;

const FrancescaEkwuyasi = ({ data }) => {
  const { artistName, nameImage } = data.contentfulArtistPage;

  return (
    <Layout>
      <ArtistPageH1 image={nameImage} name={artistName} />
      <section className={contentSection}>
        <VideoPlayer url="https://vimeo.com/753123998/e84dc9e8cc" />
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default FrancescaEkwuyasi;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "francesca-ekwuyasi" }) {
      artistName
      nameImage {
        gatsbyImageData
        description
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
