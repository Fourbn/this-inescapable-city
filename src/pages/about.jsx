import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import RichText from "../components/RichText/RichText";

import { pageContent } from "./about.module.scss";

const About = ({ data }) => {
  const { textContent } = data.contentfulSitePage;

  return (
    <>
      <Layout>
        <section className={pageContent}>
          <h1>Learn more about This Inescapable City ...</h1>
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
      textContent {
        raw
      }
    }
  }
`;
