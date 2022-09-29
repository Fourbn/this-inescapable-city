import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import { definition, poem } from "./lou-campbell.module.scss";

const bio = `<p>Lou Campbell (they/them) is a performance artist based in Halifax, NS. Their practice traverses a wide range of disciplines including poetry, sound art, improv, comedy, and the odd clown collage when a worldwide pandemic shuts their entire industry down. They create work that unpacks the inner workings of their own experiences, usually manifesting in the open sharing of mortifying past mistakes. They also co-run a cross-province collective based in Toronto and Halifax called Probably Theatre. This collective creates performance work devised from poetry, and runs an event series called “Probably Poetry” that facilitates the creation of new work from themselves and other artists. Lou's most recent performance piece was called PRUDE. Using comedy, the piece delved into the complex experience of being asexual in an (allo)sexual world.</p>`;

const LouCampbell = ({ data }) => {
  const { artistName, nameImage } = data.contentfulArtistPage;

  return (
    <Layout>
      <section>
        <ArtistPageH1 image={nameImage} name={artistName} />
        <div className={definition}>
          <h2>shore.line</h2>
          <p>/ˈSHôrlīn/</p>
          <p>noun</p>
          <p>
            a place where a body of water reminds the land that its touch is a
            point of connection between worlds
          </p>
        </div>
        <div className={poem}>
          <h3>every city has a shoreline</h3>
          <ol>
            <li>
              <span>
                the water pulls you to it, wants you to dream, wants you to
                fall.
              </span>
            </li>
            <li>
              <span>welcome to the edge of another world</span>
            </li>
            <li>
              <span>there is history here, and future too.</span>
            </li>
            <li>
              <span>
                the water has imagined us here before. will imagine us here
                after.
              </span>
            </li>
            <li>
              <span>there is no start. no stop. only change.</span>
            </li>
            <li>
              <span>
                you will feel the pull of the water even as your body remembers
                the land as its home.
              </span>
            </li>
            <li>
              <span>
                this isn’t the kind of memory that happens with your mind
              </span>
            </li>
            <li>
              <span>
                it makes you feel like you could slip into a different time. a
                different body;
              </span>
            </li>
            <li>
              <span>
                let’s linger here. let’s forget it was ever different than this
              </span>
            </li>
            <li>
              <span>drifting, edgeless.</span>
            </li>
            <li>
              <span>have you ever dreamt of the water rising?</span>
            </li>
            <li>
              <span>deciding to make itself edgeless?</span>
            </li>
            <li>
              <span>again and again,</span>
            </li>
            <li>
              <span>there is no start. no stop. only change.</span>
            </li>
            <li>
              <span>
                you will feel the pull of the water even as your body remembers
                the land as its home.
              </span>
            </li>
            <li>
              <span>
                the water pulls you to it. wants you to dream, wants you to
                fall.
              </span>
            </li>
            <li>
              <span>again and again and again and again and</span>
            </li>
          </ol>
        </div>
        <div>
          <a
            href="https://www.google.com/maps/d/u/0/edit?mid=1pRQgUsRXIBORZB2Y3XN35B6vnw7sIM8&usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Want to go for a swim?
          </a>
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default LouCampbell;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "lou-campbell" }) {
      artistName
      nameImage {
        gatsbyImageData
        description
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
