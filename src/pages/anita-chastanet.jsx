import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import { videoSection, lyrics, coverArtStyles, bioStyles } from "./anita-chastanet.module.scss";

const bio = `<p>a<span class="visual-break" />ngsty</p>
<p>n<span class="visual-break" />eurotic</p> 
<p>i<span class="visual-break" />nterdiciplinary (<span class="italics">music, video, DJ, photo, web</span>)</p> 
<p>t<span class="visual-break" />hirsty for compliments</p>
<p>a<span class="visual-break" />rtist/accountant</p>

<p>(<span class="italics">she/her</span>)</p> 
<p>based in Kjipuktuk/Halifax</p>`;

const AnitaChastanet = ({ data }) => {
  const { contentfulArtistPage } = data;
  const { artistName, nameImage, images } = contentfulArtistPage;
  const [coverArt] = images;

  return (
    <Layout>
      <ArtistPageH1 image={nameImage} name={artistName} />
      <section className={videoSection}>
        <VideoPlayer url="https://vimeo.com/758132925/4ee14fee6a" />
        <GatsbyImage
          image={coverArt.gatsbyImageData}
          alt={coverArt.description}
          className={coverArtStyles}
        />
        <div className={lyrics}>
          <h2>Lyrics</h2>
          <p>
            If only though my dreams I reach your heart
            <br />
            If only in my dreams you pull me in
            <br />
            If only though my dreams I reach your heart
            <br />
            If only in my dreams you pull me into you
          </p>
          <p>
            We don’t sink we swim x3
            <br />
            We don’t sink we swim through
            <br />
          </p>
          <p>
            If only in my dreams you’re close to touch
            <br />
            If only in my dreams time isn’t lonely
            <br />
            If only in my dreams we fall in love
            <br />
            If only in my dreams that doesn’t scare you
          </p>
          <p>
            we don’t sink we swim x3
            <br />
            We don’t sink we swim through
            <br />
          </p>
          <p>Ooos and aas</p>
          <p>
            Lone hearts
            <br />
            Beating lone hearts
            <br />
            They say put me to sleep
            <br />I want to escape to my dreams
          </p>
          <p>
            Lone hearts
            <br />
            Beating lone hearts
            <br />
            They say put me to sleep
            <br />I want to escape to my dreams
          </p>
        </div>
      </section>
      <ArtistBio bio={bio} className={bioStyles} />
    </Layout>
  );
};

export default AnitaChastanet;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "anita-chastanet" }) {
      artistName
      nameImage {
        description
        gatsbyImageData
      }
      images {
        description
        gatsbyImageData
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
