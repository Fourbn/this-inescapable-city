import React from "react";
import { graphql, Link } from "gatsby";
import Footer from "../components/Footer/Footer";

import DesktopHero from "../components/DesktopHero/DesktopHero";
import MobileHero from "../components/MobileHero/MobileHero";

import {
  hero,
  bgWrapper,
  extraNav,
} from "./index.module.scss";

const IndexPage = ({ data }) => {
  const { images } = data.contentfulSitePage;
  const [desktopHeroImg, mobileHeroImg] = images;

  return (
    <>
      <main className={hero}>
        <div className={bgWrapper}>
          <DesktopHero desktopHeroImage={desktopHeroImg} />
          <MobileHero mobileHeroImage={mobileHeroImg} />
        </div>
        <nav className={extraNav} aria-label="Secondary">
          <ul>
            <li>
              <Link to="/about">about the project</Link>
            </li>
            <li>
              <Link to="/comments">comments</Link>
            </li>
            <li>land acknowledgement</li>
            <li>donate</li>
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    contentfulSitePage(slug: { eq: "home" }) {
      pageTitle
      images {
        url
        gatsbyImageData(layout: CONSTRAINED, width: 1050, placeholder: BLURRED)
        description
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
