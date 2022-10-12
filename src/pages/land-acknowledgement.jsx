import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import RichText from "../components/RichText/RichText";

// copy and pasted this from the about page, still using about page styles for now. at some point this needs to be moved into a page template
import { pageContent } from "./about.module.scss";

const LandAcknowledgement = ({ data }) => {
  const { pageTitle, textContent } = data.contentfulSitePage;

  return (
    <>
      <Layout>
        <section className={pageContent}>
          <h1 className="long-word">{pageTitle}</h1>
          <RichText richText={textContent} />
        </section>
      </Layout>
      <Footer simple />
    </>
  );
};

export default LandAcknowledgement;

export const query = graphql`
  query {
    contentfulSitePage(slug: { eq: "land-acknowledgement" }) {
      pageTitle
      textContent {
        raw
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
