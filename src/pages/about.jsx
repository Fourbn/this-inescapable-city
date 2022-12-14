import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import RichText from "../components/RichText/RichText";

import { pageContent } from "./about.module.scss";

const About = ({ data }) => {
  const { pageTitle, textContent } = data.contentfulSitePage;

  return (
    <>
      <Layout>
        <section className={pageContent}>
          <h1>{pageTitle}</h1>
          <RichText richText={textContent} />
        </section>
      </Layout>
      <Footer simple />
    </>
  );
};

export default About;

export const query = graphql`
  query {
    contentfulSitePage(slug: { eq: "about-this-project" }) {
      pageTitle
      textContent {
        raw
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
