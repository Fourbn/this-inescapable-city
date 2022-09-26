import { Link } from "gatsby";
import React from "react";

import CCALogo from "../assets/council-logo/CCA_RGB_colour_f.svg";
import heroImage from "../assets/hero-image.png";

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
} from "./index.module.scss";

const IndexPage = () => {
  return (
    <>
      <main className={hero}>
        <div className={bgWrapper}>
          <img src={heroImage} alt="" />
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
                <Link to="/laura-gallagher-doucette">Laura Gallagher-Doucette</Link>
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
            <li>comments</li>
            <li>instagram</li>
            <li>probably theatre</li>
            <li>extra bios</li>
            <li>donate</li>
            <li>land acknowledgement</li>
          </ul>
        </nav>
      </main>
      <footer>
        <div>
          <img src={CCALogo} alt="Logo for the Canada Council for the Arts" />
        </div>
        <div>
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

export { Head } from "../components/Head/Head";
