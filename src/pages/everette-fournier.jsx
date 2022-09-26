import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

import { imageStyles, artistStatement, poem, statement } from "./everette-fournier.module.scss";

const bio = `<p>Everette Fournier (they/them, he/him) is an emerging artist practicing in both Tkaronto [Toronto,ON] and K'jipuktu​k [Halifax], Mi’kmaqi [Nova Scotia]. Everette graduated from NSCAD University for their BFA majoring in Textiles and Fashion in 2021. Everette has dabbled in costume design, performance art, drag, film and music. He sees his practice as multidisciplinary and reactionary depending on each project they approach. Their conceptual work stems from creating small worlds within the folds of our own. Over the last year they have costume designed for PRUDE, by Lou Campbell, Fat Juliet, by Stevey Hunter and #IAMTHECHEESE by Josh MacDonald. Other projects include Macro Digitals: Connections, produced by Eastern Front Theatre, where they were the lead artist collaborating with four other artists to create a short film and immersive projection installation called The Unbetween.</p>`;

const EveretteFournier = ({ data }) => {
  const { contentfulArtistPage } = data;
  const { images } = contentfulArtistPage;

  return (
    <Layout>
      <section>
        <h1>Everette Fournier</h1>
        {images.map((image) => (
          <GatsbyImage
            key={image.id}
            image={image.gatsbyImageData}
            alt={image.description}
            className={imageStyles}
          />
        ))}
        <VideoPlayer url="https://vimeo.com/753127063/501701b396">
          <p>
            Video Song: Moon on Sill{" "}
            <span className="italics">by Daniel Dover - Ursa Music</span>
          </p>
        </VideoPlayer>
        <div className={artistStatement}>
          <h2>Whose Home is This</h2>
          <p className={poem}>
            Is this my dream or your dream?
            <br />
            Is this our city?
            <br />
            Whose home is this?
            <br />
            Sometimes I think of it as a game
            <br />
            Following along in lines and grids
            <br />
            Turn after turn after turn
            <br />
            Is this your turn or my turn?
            <br />
            Who gets to live here and why?
            <br />
            I am a ghost and the lines and grids that have been drawn through me
            are like scars.
            <br />
            Sore to the touch.
            <br />
            But there are things that don’t hurt me here and they make new paths
            along the curves of my body.
            <br />
            Lines of love, despair, dysphoria, euphoria, and wonderment.
            <br />
            I follow and revel, until I am stopped at a traffic light I haven’t
            seen before.
            <br />
            Another grid.
            <br />
            I follow your legacy.
            <br />
            I move through faces after faces breathing in another’s story.
            <br />
            The grids change, so do the pathways and I find myself lost once
            again.
            <br />
            Is this your home or my home?
            <br />
            Is this our home?
          </p>
          <p className={statement}>
            Whose home is this? is a short film created from the perspective of
            a city spirit. They are a ghost to us. The city ghost watches their
            surroundings change and asks the question of who gets to have safety
            in a city space. What creates and demolishes our idea of home. On
            Turtle Island (Canada) we are experiencing a mass housing crisis.
            Governments and policing sweeping public spaces and evicting those
            that live in them and landlords who continue to evict and exploit
            their tenants. In the last year they have made mass arrests at these
            sites when the community has stood up for housing and those
            struggling to retain it. The city ghost is a reflection of my own
            experience with housing insecurity. They embody my own dysphoria in
            searching for place, safety and empathy for those around me. I often
            find myself asking who gets what in our society? And why does it
            remain this way? The lines on the map of the city ghost's body
            represent pathways of resistance and loving acts they have
            witnessed. Acts I see as I pass by strangers or acts I have
            experienced myself. The rigged shapes in the coat loosely reference
            the city’s I dwell, Tkaronto’s (Toronto) Harbourfront, the
            intersection of the Assiniboine River and Red River in Winnipeg
            where I grew up. Lastly dispersed in the coats corners are
            references to the parks in Kjipuktuk (Halifax) where houseless
            neighbors have been evicted.
          </p>
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default EveretteFournier;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "everette-fournier" }) {
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
