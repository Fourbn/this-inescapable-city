import React from "react";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
// import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

const bio = `<p>(Anishinaabe, Nipissing First Nation) Olivia Shortt is a Tkarón:to-based performing artist, sound artist, composer, noise-maker, trouble-maker and professional disrupter.</p>

<p>Highlights include Shortt’s world premiere performance (Whitney Museum of American Art, NYC) of ‘For Olivia Shortt’ that Pulitzer Prize Composer Raven Chacon wrote for Shortt as part of Chacon’s series ‘For Zitkala-Ša’ (featured at The 2022 Whitney Biennial); their Lincoln Center (NYC) debut in 2018; their film debut in Atom Egoyan’s 2019 film ‘Guest of Honour’; and recording an album two kilometres underground in the SnoLAB (Sudbury, Canada). Recent projects include a new opera in partnership with Loose Tea Music Theatre (Toronto), a commission for Blueridge Chamber Festival (Vancouver), and collaborative new work with thirtyminutes (Canada/England). Works created over the last two years include commissions from Long Beach Opera (California), the JACK Quartet (NYC), and Din of Shadows (Toronto).</p>

<p>Shortt was a finalist for the 2021 Toronto Arts Foundation Emerging Artist Award, was one of the 2020 Buddies in Bad Times’ Emerging Queer Artists & is featured in the 2020 Winter edition of Musicworks Magazine. They love cats, glitter and collaborating with others. www.olivia-shortt.com</p>`;

const OliviaShortt = () => {
  return (
    <Layout>
      <section>
        <h1>Olivia Shortt</h1>
        {/* <VideoPlayer /> */}
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default OliviaShortt;
