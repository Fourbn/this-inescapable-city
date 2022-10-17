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

// import mobileCity from "../assets/rowan-temp/mobile_CITY.png"
// import mobileLand from "../assets/rowan-temp/mobile_LAND.png";
// import mobileWater from "../assets/rowan-temp/mobile_WATER.png";
// import mobileWeeds from "../assets/rowan-temp/mobile_WEEDS.png";

import {
  rowanSection,
  container,
  object,
  controlPanel,
  mobileFallback,
} from "./rowan-red-sky.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const bio = `<p>Rowan Red Sky (Oneida Nation of the Thames) graduated from the Publications program at OCAD University in 2015. She works as an artist making illustrations that draw from the oral tradition of her Indigenous culture and personal experiences. Maps, the animacy of the land, and the performance of stories inspire her work. In 2020 she started graduate school in the Art History program at the University of Toronto. Her academic research investigates nineteenth-century stereotypical images of Native Americans and American landscapes, and how Indigenous performers and visual artists have responded to these images. Her writing and illustration work has been published by CBC, Shameless Magazine, Canthius, Maisonneuve, and Broadview. Currently, she is planning an exhibition featuring nineteenth-century illustrations of Native Americans, which will be on display at Massey College until December 2022.</p>`;

const srDescriptions = {
  wholePiece: `This artwork is an interactive piece. There is a canvas filled with images that the viewer can rearrange by clicking and dragging with the mouse. You can explore the stories these images tell with the screen reader by clicking on each of the “4” buttons to hear a tiny story. Each of the “4” buttons reveal a new set of images with a different theme to play with, and a different tiny story to hear. There is the theme of land, the theme of water, the theme of city, and the theme of invasive plants, or “bad weeds”.`,
  land: "Description of the 'Original Land' theme. The first theme is the original land, or native land. There are images of strawberry leaves, sue mack trees, red dogwood bushes, and a silver birch tree. There are moosehair embroidery designs hidden in the landscape. A sky dome is a reminder of the connection between the land and the sky world. There is a river rushing through its muddy riverbed, and a marsh that once sat on the shore of Lake Ontario around Toronto. Text in the landscape copied from an old map reads “government house grounds” as a reminder of the original people, the “Hode no SHOW knee” Confederacy.",
  water:
    "Description of the 'All the Waters' theme. The second theme is all the waters. This includes rivers that still run through Toronto and lost rivers that are now hidden under the city or drained and disappeared. There is the outline of the Toronto shoreline from before the city was built. There are soft runny shapes representing the Great Lakes. There are also the Oneida and Finger Lakes, from south of Lake Ontario, which are part of the ancestral territory of the “Hode no SHOW knee”. A map of such a large territory, squashes a long journey through the lake system, into a short trace of the fingertips",
  city: "Description of 'The Big City' theme. The third theme is the big city. This is a time-travelling landscape. There are Toronto streets and parks from the nineteenth-century, and French colonial houses from the seventeenth-century line the streets. There are pieces of the Toronto Islands that were built in the twentieth century for tourists. There are modern ferry boats and an old sailing ship. There are streets marked on the map that no longer exist, and empty spaces where streets now run through. There are walking paths through gardens, and private roads with wooden bridges. There is smoke, and picket fences. There are dead stumps of trees, that have been torn down.",
  weeds:
    "Description of the 'Bad Weeds' theme. The fourth theme is “bad weeds”. These are invasive plants that destroy ecosystems and choke out delicate native species. There are Queen Anne lace, and stinging nettles. Purple viper’s boo gloss, blue cornflowers, and purple loose strife. Orange honeysuckle, and white clover. Mull-in, tansy, and spotted knapweed. These are just a few of the dozens of invasive species that cover the shores of Lake Ontario. The “bad weeds” line the city streets, and grow in the marshes that the city has drained and filled with rubble. The city dwellers admire this ‘urban wilderness’ on the weekends.",
};

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

  const [landIsVisible, setLandIsVisible, landFadeProps] = useFade(true);
  const [waterIsVisible, setWaterIsVisible, waterFadeProps] = useFade();
  const [cityIsVisible, setCityIsVisible, cityFadeProps] = useFade();
  const [weedsIsVisible, setWeedsIsVisible, weedsFadeProps] = useFade();

  const handleRevealImages = (e) => {
    const group = e.target.id;
    if (group === "land") {
      setLandIsVisible(!landIsVisible);
    }
    if (group === "water") {
      setWaterIsVisible(!waterIsVisible);
    }
    if (group === "city") {
      setCityIsVisible(!cityIsVisible);
    }
    if (group === "weeds") {
      setWeedsIsVisible(!weedsIsVisible);
    }
  };

  const [activeImage, setActiveImage] = useState([]);

  return (
    <Layout>
      <ArtistPageH1 image={nameImage} name={artistName} />
      <section className={rowanSection}>
        <div
          className={container}
          tabIndex={0}
          aria-label="Welcome to the descriptive version of Rowan Red Sky's piece"
          aria-describedby="whole-piece"
        >
          <p className="sr-only" id="whole-piece">
            {srDescriptions.wholePiece}
          </p>
          {landIsVisible && (
            <LandImages
              className={object}
              handleZIndexIncrease={handleZIndexIncrease}
              fadeProps={landFadeProps}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
          )}
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
            aria-label={`Click to ${
              landIsVisible ? "Hide" : "learn more about"
            } the land images theme`}
            aria-describedby={landIsVisible ? "land-description" : ""}
            type="button"
            onClick={(e) => handleRevealImages(e)}
          >
            <p className="sr-only" id="land-description">
              {srDescriptions.land}
            </p>
            ohwʌtsyahuwé
          </button>
          <button
            id="water"
            aria-label={`Click to ${
              waterIsVisible ? "Hide" : "learn more about"
            } the water images theme`}
            aria-describedby={waterIsVisible ? "water-description" : ""}
            type="button"
            onClick={(e) => handleRevealImages(e)}
          >
            <p className="sr-only" id="water-description">
              {srDescriptions.water}
            </p>
            ohnekanusho:kú
          </button>
          <button
            id="city"
            aria-label={`Click to ${
              cityIsVisible ? "Hide" : "learn more about"
            } the city images theme"`}
            aria-describedby={cityIsVisible ? "city-description" : ""}
            type="button"
            onClick={(e) => handleRevealImages(e)}
          >
            <p className="sr-only" id="city-description">
              {srDescriptions.city}
            </p>
            kanatowa:nʌ́
          </button>
          <button
            id="weeds"
            aria-label={`Click to ${
              weedsIsVisible ? "Hide" : "learn more about"
            } the weeds images theme"`}
            aria-describedby={weedsIsVisible ? "weeds-description" : ""}
            type="button"
            onClick={(e) => handleRevealImages(e)}
          >
            <p className="sr-only" id="weeds-description">
              {srDescriptions.weeds}
            </p>
            wanekláksʌ
          </button>
        </div>
      </section>
      <section className={mobileFallback}>
        <p>
          Welcome to my piece! If you're reading this it's because you're
          currently using a tablet, mobile device, or your browser window is a
          bit too narrow. My piece is built for you to play around with it and
          you'll need a lot of room in your browser to do that. I recommend you
          come back to my page using a desktop or laptop and you'll see what I
          mean! In the meantime, catch a glimpse of the fun you could be having
          below. Enjoy!
        </p>
        <div className={controlPanel}>
          <button
            id="land"
            aria-label={`Click to ${
              landIsVisible ? "Hide" : "learn more about"
            } the land images theme`}
            aria-describedby={landIsVisible ? "land-description" : ""}
            type="button"
            onClick={(e) => handleRevealImages(e)}
          >
            <p className="sr-only" id="land-description">
              {srDescriptions.land}
            </p>
            ohwʌtsyahuwé
          </button>
          <button
            id="water"
            aria-label={`Click to ${
              waterIsVisible ? "Hide" : "learn more about"
            } the water images theme`}
            aria-describedby={waterIsVisible ? "water-description" : ""}
            type="button"
            onClick={(e) => handleRevealImages(e)}
          >
            <p className="sr-only" id="water-description">
              {srDescriptions.water}
            </p>
            ohnekanusho:kú
          </button>
          <button
            id="city"
            aria-label={`Click to ${
              cityIsVisible ? "Hide" : "learn more about"
            } the city images theme"`}
            aria-describedby={cityIsVisible ? "city-description" : ""}
            type="button"
            onClick={(e) => handleRevealImages(e)}
          >
            <p className="sr-only" id="city-description">
              {srDescriptions.city}
            </p>
            kanatowa:nʌ́
          </button>
          <button
            id="weeds"
            aria-label={`Click to ${
              weedsIsVisible ? "Hide" : "learn more about"
            } the weeds images theme"`}
            aria-describedby={weedsIsVisible ? "weeds-description" : ""}
            type="button"
            onClick={(e) => handleRevealImages(e)}
          >
            <p className="sr-only" id="weeds-description">
              {srDescriptions.weeds}
            </p>
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
