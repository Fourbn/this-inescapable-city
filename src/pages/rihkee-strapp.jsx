import React, { useState } from "react";
import { graphql } from "gatsby";
import CrossfadeImage from "react-crossfade-image";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import useInterval from "../hooks/useInterval";

import gif1 from "../assets/rihkee/animation1.gif";
import gif2 from "../assets/rihkee/animation2.gif";
import gif3 from "../assets/rihkee/animation3.gif";
// import gif4 from "../assets/rihkee/animation4.gif";

import { image, gif, wrapper, preload } from "./rihkee-strapp.module.scss";

const bio = `<p>Rihkee Strapp entered the world from a sea of blood, fully grown wearing a gold set of armour. They are an Ayakwew Red River Metis multi-disciplinary artist raised in Northern Ontario by nohkum’s dial-up internet and its dark vistas. Rihkee is an alumni of the Studio [Y] systems leadership fellowship at the MaRS Discovery District. Their highly collaborative work re-appropriates pop-culture, myth and nostalgia, playing with concepts of time and technology often using humour and character to animate their ideas.</p>`;

const RihkeeStrapp = ({ data }) => {
  const { contentfulArtistPage } = data;
  const { images, artistName, nameImage } = contentfulArtistPage;

  const randomArrayIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
  };

  const gifArray = [
    { src: gif1, alt: "this is the gif alt text", timing: 7360 },
    { src: gif2, alt: "this is the gif alt text", timing: 5880 },
    { src: gif3, alt: "this is the gif alt text", timing: 8840 },
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [gifIndex, setGifIndex] = useState(0);

  useInterval(() => {
    setImageIndex(randomArrayIndex(images.length));
  }, 5000);

  useInterval(() => {
    setGifIndex(randomArrayIndex(gifArray.length));
  }, gifArray[gifIndex]["timing"]);

  return (
    <Layout>
      <section>
        <ArtistPageH1 image={nameImage} name={artistName} />
        <div className={preload}>
          {images.map((image) => (
            <img src={image.url} alt="" loading="eager" className="visually-hidden" />
          ))}
        </div>
        <div className={wrapper}>
          <CrossfadeImage
            src={images[imageIndex]["url"]}
            alt={images[imageIndex]["alt"]}
            containerClass={image}
            duration={1000}
          />
          <img
            src={gifArray[gifIndex]["src"]}
            alt={gifArray[gifIndex["alt"]]}
            className={gif}
          />
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default RihkeeStrapp;

export const pageQuery = graphql`
  query {
    contentfulArtistPage(slug: { eq: "rihkee-strapp" }) {
      artistName
      images {
        url
        description
      }
      nameImage {
        gatsbyImageData
        description
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
