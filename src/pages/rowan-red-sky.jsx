import React, { useState } from "react";
import { graphql } from "gatsby";
import useFade from "../hooks/useFade";

import Layout from "../components/Layout/Layout";
import LandImages from "../components/ImageGroups/LandImages";
import WaterImages from "../components/ImageGroups/WaterImages";
import CityImages from "../components/ImageGroups/CityImages.jsx";
import WeedsImages from "../components/ImageGroups/WeedsImages";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import {
  rowanSection,
  container,
  object,
  controlPanel,
} from "./rowan-red-sky.module.scss";

const bio = `<p>Rowan Red Sky (Oneida Nation of the Thames) graduated from the Publications program at OCAD University in 2015. She works as an artist making illustrations that draw from the oral tradition of her Indigenous culture and personal experiences. Maps, the animacy of the land, and the performance of stories inspire her work. In 2020 she started graduate school in the Art History program at the University of Toronto. Her academic research investigates nineteenth-century stereotypical images of Native Americans and American landscapes, and how Indigenous performers and visual artists have responded to these images. Her writing and illustration work has been published by CBC, Shameless Magazine, Canthius, Maisonneuve, and Broadview. Currently, she is planning an exhibition featuring nineteenth-century illustrations of Native Americans, which will be on display at Massey College until December 2022.</p>`;

const RowanRedSky = ({ data }) => {
  const { artistName, nameImage } = data.contentfulArtistPage;

  // track z index number and increase it across all image groups
  const [highestZIndex, setHighestZIndex] = useState(5000);
  const handleZIndexIncrease = (e, zIndexMap, setZIndexMap) => {
    const copyOfMap = new Map(zIndexMap);
    if (zIndexMap.get(e.target.id) === highestZIndex) {
      return;
    }
    copyOfMap.set(e.target.id, highestZIndex + 5);
    setZIndexMap(copyOfMap);
    setHighestZIndex(highestZIndex + 5);
  };

  const [waterIsVisible, setWaterIsVisible, waterFadeProps] = useFade();
  const [cityIsVisible, setCityIsVisible, cityFadeProps] = useFade();
  const [weedsIsVisible, setWeedsIsVisible, weedsFadeProps] = useFade();

  const handleRevealImages = (e) => {
    const group = e.target.id;
    if (group === "water") {
      setWaterIsVisible(true);
    }
    if (group === "city") {
      setCityIsVisible(true);
    }
    if (group === "weeds") {
      setWeedsIsVisible(true);
    }
  };

  const [activeImage, setActiveImage] = useState([]);

  // reset button
  const [canvasState, setCanvasState] = useState(1);
  const handleResetCanvas = () => {
    setWaterIsVisible(false);
    setCityIsVisible(false);
    setWeedsIsVisible(false);
    setCanvasState(canvasState + 1);
  };

  return (
    <Layout>
      <section className={rowanSection}>
        <ArtistPageH1 image={nameImage} name={artistName} />
        <div className={container} key={canvasState}>
          <LandImages
            className={object}
            handleZIndexIncrease={handleZIndexIncrease}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
          {waterIsVisible && (
            <WaterImages
              className={object}
              handleZIndexIncrease={handleZIndexIncrease}
              fadeProps={waterFadeProps}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
          )}
          {cityIsVisible && (
            <CityImages
              className={object}
              handleZIndexIncrease={handleZIndexIncrease}
              fadeProps={cityFadeProps}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
          )}
          {weedsIsVisible && (
            <WeedsImages
              className={object}
              handleZIndexIncrease={handleZIndexIncrease}
              fadeProps={weedsFadeProps}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
          )}
        </div>
        <div className={controlPanel}>
          <button
            id="land"
            aria-label="Reset the canvas"
            type="button"
            onClick={() => handleResetCanvas()}
          >
            ohwʌtsyahuwé
          </button>
          <button
            id="water"
            aria-label="Add the water images"
            type="button"
            onClick={(e) => handleRevealImages(e)}
            disabled={waterIsVisible}
          >
            ohnekanusho:kú
          </button>
          <button
            id="city"
            aria-label="Add the city images"
            type="button"
            onClick={(e) => handleRevealImages(e)}
            disabled={cityIsVisible}
          >
            kanatowa:nʌ́
          </button>
          <button
            id="weeds"
            aria-label="Add the weeds images"
            type="button"
            onClick={(e) => handleRevealImages(e)}
            disabled={weedsIsVisible}
          >
            wanekláksʌ
          </button>
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default RowanRedSky;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "rowan-red-sky" }) {
      artistName
      nameImage {
        description
        gatsbyImageData
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
