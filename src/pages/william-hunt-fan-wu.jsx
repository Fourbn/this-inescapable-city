import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import loadable from "@loadable/component";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import audio from "../assets/audio/will-fan-audio.m4a";

import {
  imagesWrapper,
  bioStyles,
  poemWrapper,
  poem,
  jump1,
  jump2,
  jump3,
  jump4,
} from "./william-hunt-fan-wu.module.scss";

const AudioPlayer = loadable(() =>
  import("../components/AudioPlayer/AudioPlayer")
);

const bio = `
  <p>William Hunt is a pianist and writer from Toronto, and a graduate student in Comparative Literature at the University of Toronto. He is interested in questions of time, love, and how a life might be lived.</p> 

  <p>Fan Wu is a life-cruiser and body beginner for whom learning is lust. He is currently colliding Zhuangzi and Bataille to create a performance practice of the ecstasies of immanence.</p>
  `;

const WilliamHuntFanWu = ({ data }) => {
  const { contentfulArtistPage } = data;
  const { images } = contentfulArtistPage;

  return (
    <Layout>
      <section>
        <h1>William Hunt & Fan Wu</h1>
        <div className={imagesWrapper}>
          {images.map((image) => (
            <GatsbyImage
              key={image.id}
              image={image.gatsbyImageData}
              alt={image.description}
            />
          ))}
        </div>
        <AudioPlayer audioSrc={audio} autoPlay />
        <div className={poemWrapper}>
          <div className={poem}>
            <h2>I.</h2>
            <p>
              goldfinch from sunflower as the streaky yellows
              <br />
              come all of one substance, the milkless void mewling,
              <br />
              brisked, nut-struck, basked in pallor, grinding
              <br />
              two-for-two in meatless utero to assume
              <br />
              a reliquary tone: "leave me be, high, alone
              <br />
              above our puzzlebox universe,
              <br />
              where locket and chain leave us uncaressed
              <br />
              in the regatta of our half-undress."
            </p>
            <p>
              "hydrocephalitic" was the first word I heard when I came to
              <br />
              and all recognition had gone incognito,
              <br />
              rail-sick, heavy wave, head upon a shoulder,
              <br />
              crumple of hair in the palm of my hand, hiding
              <br />
              the name "mother" away from whatever would
              <br />
              engorge itself towards it, roil, urn, ulcer;
              <br />
              research, a suit of osmosis, the drool of gravity
              <br />
              launches us down. I sit in a Kingston park
              <br />
              by a Kingston pier smoking
              <br />
              a cigarette I shouldn't, outlined by my blue
              <br />
              uncavalier
              <br />
              solitude.
            </p>
          </div>
          <div className={poem}>
            <h2>II.</h2>
            <p>
              blue wagon led like a candle by a brace of blue
              <br />
              horses, Floridian lagoon, blue means cloister means
              <br />
              cold feet, blue hunger evokes bile, blue lettuce
              <br />
              blue resurrection, hands in place of horizon, planar
              <br />
              blue like one vision took up all the hue, viridian
              <br />
              fable, unlike gray blue does not appear in
              <br />
              my mind only the thin glow of orange, shellfish
              <br />
              blue, oysters currents blue
              <br />
              swells up like unity, blue ocean in B.C.,
              <br />
              bluer sea in Wales, blue of pool
              <br />
              where my first crush Jeremy
              <br />
              swam
            </p>
          </div>
          <div className={poem}>
            <h2>III.</h2>
            <p>
              <span className="italics">memorize the bathwater</span>
              <br />
              <span className="italics">memorize the air</span>
              <br />
              judgment of sins{" "}
              <span className={jump1}>concentrate in reverse</span>
              <br />
              barely cipher the flotsam
            </p>
            <p>
              American hat with a cigarette hole{" "}
              <span className={jump1}>belong</span>
              <br />
              to paradise <span className={jump3}>sane reality</span>
              <br />
              <span className={jump4}>“I’m-cold-tonight” noise</span>
              <br />
              <span className={jump3}>how pulsing is it</span>
              <br />
              one rig on rider bolded
              <br />
              <span className={jump1}>a hypothesis</span>
              <br />
              <span className={jump1}>a harpoon</span>
              <br />
              <span className={jump1}>that got too close</span>
              <br />
              too half
              <br />
              moon melody
              <br />
              <span className={jump3}>head first at the beastly</span>
              <br />
              <span className={jump3}>at the end</span>
              <br />
              <span className={jump2}>directly sentimental</span>
            </p>
          </div>
        </div>
      </section>
      <ArtistBio bio={bio} plural className={bioStyles} />
    </Layout>
  );
};

export default WilliamHuntFanWu;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "william-hunt-fan-wu" }) {
      artistName
      images {
        id
        gatsbyImageData
        description
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
