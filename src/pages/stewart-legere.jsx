import React from "react";
import { graphql } from "gatsby";
import Zoom from "react-medium-image-zoom";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

import { allScans } from "./stewart-legere.module.scss";

const bio = `<p>Stewart is a multidisciplinary artist originally from Punamu'kwati'jk/Dartmouth. He is the Associate Artistic Director of ZUPPA, co-Artistic Director of THE ACCIDENTAL MECHANICS GROUP, and is currently an artist-in-residence at THE THEATRE CENTRE in Toronto. He has released two albums: "Quiet the Station" (2017), and "To the Bone: Songs from Splinters" (2020). With ZUPPA he has co-created and toured over a dozen original shows, including "Poor Boy", "Pop-Up Love Party" and "The Archive of Missing Things". Recent solo work includes "El Camino or The Field of Stars" and "Let's Not Beat Each Other To Death". His work has appeared in festivals and theatres across the country and internationally. He is fascinated with vulnerability, intimacy, the destruction of persona and the celebration of performance.</p>`;

const videoDescr =
  "A wide shot of the Toronto City Skyline. In the bottom of the frame, a stand of trees. The skyline is midframe. The sky takes up the top half of the frame. The video cuts between daylight and evening shots of the same skyline, from roughly the same perspective. In one of the shots, the sun shines brightly in the top right quadrant of the frame. In the same shot, a little ball of light jumps from building to building, until it eventually jumps off the last building and floats up into the sky.";

const StewartLegere = ({ data }) => {
  const { contentfulArtistPage } = data;
  const { images } = contentfulArtistPage;

  return (
    <Layout>
      <section>
        <h1>Stewart Legere</h1>
        <VideoPlayer
          url="https://vimeo.com/753126298/c8b22eee9b"
          playing
          label="ambient vocal sounds and shots of city scapes"
          description={videoDescr}
        >
          <p>
            Filmed and edited by <span className="italics">Stewart Legere</span>
          </p>
          <p>
            Music by{" "}
            <span className="italics">Stewart Legere with Mike Legere</span>
          </p>
          <p>
            Produced and mixed by{" "}
            <span className="italics">
              Mike Legere at The Root Down (Toronto)
            </span>
          </p>
        </VideoPlayer>
        <div className={allScans}>
          {images.map((image) => (
            <Zoom key={image.id}>
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={image.description}
              />
            </Zoom>
          ))}
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default StewartLegere;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "stewart-legere" }) {
      artistName
      images {
        id
        description
        gatsbyImageData
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
