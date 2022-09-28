import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import DesktopHero from "../components/DesktopHero/DesktopHero";

import {
  hero,
  bgWrapper,
  extraNav,
  homeFooter,
  ccaLogo,
  credits,
} from "./index.module.scss";
import MobileHero from "../components/MobileHero/MobileHero";

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
        <nav
          className={extraNav}
          aria-label="Secondary site navigation to extra information about the project"
        >
          <ul>
            <li>about</li>
            <li>
              <Link to="/comments">comments</Link>
            </li>
            <li>instagram</li>
            <li>probably theatre</li>
            <li>extra bios</li>
            <li>donate</li>
            <li>land acknowledgement</li>
          </ul>
        </nav>
      </main>
      <footer className={homeFooter}>
        <StaticImage
          src="../assets/CCA_RGB_white_e.png"
          alt="Logo for the Canada Council for the Arts"
          className={ccaLogo}
        />
        <div className={credits}>
          <p>
            homepage artwork by{" "}
            <a
              href="https://www.sidsharp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sid Sharp
            </a>
          </p>
          <p>
            website built by{" "}
            <a
              href="https://www.codeturkie.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Philip Turkiewicz
            </a>
          </p>
        </div>
      </footer>
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
