import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import DesktopHero from "../components/DesktopHero/DesktopHero";

import {
  hero,
  bgWrapper,
  artistsNav,
  extraNav,
  yolanda,
  lou,
  willFan,
  laura,
  rihkee,
  stewart,
  anita,
  rowan,
  francesca,
  everette,
  dylan,
  liliona,
  olivia,
  homeFooter,
  ccaLogo,
  credits,
} from "./index.module.scss";

const IndexPage = ({ data }) => {
  const { images } = data.contentfulSitePage;
  const [desktopHeroImg] = images;

  return (
    <>
      <main className={hero}>
        <div className={bgWrapper}>
          <DesktopHero desktopHeroImage={desktopHeroImg} />
          <nav
            className={artistsNav}
            aria-label="Primary site navigation to each artist's page"
          >
            <ul>
              <li className={yolanda}>
                <Link to="/yolanda-bonnell">Yolanda Bonnell</Link>
              </li>
              <li className={lou}>
                <Link to="/lou-campbell">Lou Campbell</Link>
              </li>
              <li className={willFan}>
                <Link to="/william-hunt-fan-wu">William Hunt & Fan Wu</Link>
              </li>
              <li className={laura}>
                <Link to="/laura-gallagher-doucette">
                  Laura Gallagher-Doucette
                </Link>
              </li>
              <li className={rihkee}>
                <Link to="/rihkee-strapp">Rihkee Strapp</Link>
              </li>
              <li className={stewart}>
                <Link to="/stewart-legere">Stewart Legere</Link>
              </li>
              <li className={anita}>
                <Link to="/anita-chastanet">Anita Chastanet</Link>
              </li>
              <li className={rowan}>
                <Link to="/rowan-red-sky">Rowan Red Sky</Link>
              </li>
              <li className={francesca}>
                <Link to="/francesca-ekwuyasi">francesca ekwuyasi</Link>
              </li>
              <li className={everette}>
                <Link to="/everette-fournier">Everette Fournier</Link>
              </li>
              <li className={dylan}>
                <Link to="/dylan-tate-howarth">Dylan Tate-Howarth</Link>
              </li>
              <li className={liliona}>
                <Link to="/liliona-quarmyne">Liliona Quarmyne</Link>
              </li>
              <li className={olivia}>
                <Link to="/olivia-shortt">Olivia Shortt</Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav
          className={extraNav}
          aria-label="Secondary site navigation to extra information about the project"
        >
          <ul>
            <li>about</li>
            <li>
              <Link to="/comments">Comments</Link>
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
        gatsbyImageData(layout: CONSTRAINED, width: 1150)
        description
      }
    }
  }
`;

export { Head } from "../components/Head/Head";
