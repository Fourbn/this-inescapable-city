import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";
// import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

const bio = `<p>Dylan Tate-Howarth is a theatre artist and poet based in Toronto. She works as a stage manager primarily for new and/or devised theatre. Selected stage management credits include Two Birds One Stone (Two Birds Theatre); Italian Mime Suicide, and Flashing Lights (Bad New Days); Broken Shapes (The Theatre Centre); and White Girls in Moccasins (manidoons collective and Buddies in Bad Times). Dylan is a co-creator of Probably Theatre Collective and co-curator of Probably Poetry.</p>`;

const DylanTateHowarth = ({ data }) => {
  const { artistName, nameImage } = data.contentfulArtistPage;

  return (
    <Layout>
      <section>
        <ArtistPageH1 image={nameImage} name={artistName} />
        {/* <VideoPlayer /> */}
        <div>
          <h2>Transcript</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            culpa eum error odio natus quas nulla doloremque quia alias nisi
            architecto ullam ad voluptatem, placeat tempora, neque distinctio
            magni dolores minus consequatur hic voluptate! Error corporis
            dignissimos vitae neque culpa blanditiis quidem dolorum recusandae
            tenetur? Assumenda doloremque blanditiis eius nisi praesentium neque
            eos, minima voluptatum consequuntur? Nemo quae magnam ea, pariatur
            delectus corporis nobis nostrum minima, numquam repellat, natus
            quisquam commodi nesciunt aut distinctio eligendi error quaerat
            placeat cum quos assumenda asperiores non nisi. Nulla illum enim sit
            nostrum, ipsa voluptate facilis facere eligendi architecto eaque
            provident ipsam, sapiente eveniet.
          </p>
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default DylanTateHowarth;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "dylan-tate-howarth" }) {
      artistName
      nameImage {
        description
        gatsbyImageData
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
