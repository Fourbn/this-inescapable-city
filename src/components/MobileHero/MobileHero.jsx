import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { wrapper, gatsbyImg, svgStyles } from "./MobileHero.module.scss";

const MobileHero = ({ mobileHeroImage }) => {
  return (
    <nav aria-label="Artist">
      <div className={wrapper}>
        <GatsbyImage
          image={mobileHeroImage.gatsbyImageData}
          alt={mobileHeroImage.description}
          className={gatsbyImg}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5400 9600"
          className={svgStyles}
          aria-labelledby="homepageNavTitle homepageNavDesc"
        >
          <title id="homepageNavTitle">
            Explore the exhibit by clicking on an artist's name
          </title>
          <desc id="homepageNavDesc">
            An interactive overlay over top of the painted hero image that
            allows you to click on an Artist's name and be brought to their
            individual page. Each square path is it's own link which corresponds
            with the artist's name drawn into the image. There are no additional
            visual indicators that might hint at what an artist's page will
            contain.
          </desc>
          <Link
            aria-label="Go to Dylan Tate Howarth's page"
            to="/dylan-tate-howarth"
          >
            <path
              id="dylan"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 144.00,3504.00
           C 144.00,3504.00 1024.00,3504.00 1024.00,3504.00
             1024.00,3504.00 1024.00,4272.00 1024.00,4272.00
             1024.00,4272.00 144.00,4272.00 144.00,4272.00
             144.00,4272.00 144.00,3504.00 144.00,3504.00 Z"
            />
          </Link>
          <Link aria-label="Go to Lou Campbell's page" to="lou-campbell">
            <path
              id="lou"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 48.00,4896.00
            C 48.00,4896.00 784.00,4896.00 784.00,4896.00
              784.00,4896.00 784.00,5520.00 784.00,5520.00
              784.00,5520.00 48.00,5520.00 48.00,5520.00
              48.00,5520.00 48.00,4896.00 48.00,4896.00 Z"
            />
          </Link>
          <Link
            aria-label="Go to Laura Gallagher-Doucette's page"
            to="/laura-gallagher-doucette"
          >
            <path
              id="laura"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 32.00,6368.00
            C 32.00,6368.00 1088.00,6368.00 1088.00,6368.00
              1088.00,6368.00 1088.00,7248.00 1088.00,7248.00
              1088.00,7248.00 32.00,7248.00 32.00,7248.00
              32.00,7248.00 32.00,6368.00 32.00,6368.00 Z"
            />
          </Link>
          <Link aria-label="Go to Yolanda Bonnell's page" to="/yolanda-bonnell">
            <path
              id="yolanda"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 4416.00,2144.00
           C 4416.00,2144.00 5296.00,2144.00 5296.00,2144.00
             5296.00,2144.00 5296.00,2736.00 5296.00,2736.00
             5296.00,2736.00 4416.00,2736.00 4416.00,2736.00
             4416.00,2736.00 4416.00,2144.00 4416.00,2144.00 Z"
            />
          </Link>
          <Link aria-label="Go to Rihkee Strapp's page" to="rihkee-strapp">
            <path
              id="rihkee"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 3559.00,2646.00
           C 3559.00,2646.00 4268.00,2646.00 4268.00,2646.00
             4268.00,2646.00 4268.00,3212.00 4268.00,3212.00
             4268.00,3212.00 3559.00,3212.00 3559.00,3212.00
             3559.00,3212.00 3559.00,2646.00 3559.00,2646.00 Z"
            />
          </Link>
          <Link
            aria-label="Go to Everette Fournier's page"
            to="/everette-fournier"
          >
            <path
              id="everette"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 4488.00,3245.00
           C 4488.00,3245.00 5363.00,3245.00 5363.00,3245.00
             5363.00,3245.00 5363.00,3839.00 5363.00,3839.00
             5363.00,3839.00 4488.00,3839.00 4488.00,3839.00
             4488.00,3839.00 4488.00,3245.00 4488.00,3245.00 Z"
            />
          </Link>
          <Link
            aria-label="Go to francesca ekwuyasi's page"
            to="/francesca-ekwuyasi"
          >
            <path
              id="francesca"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 3955.00,3889.00
           C 3955.00,3889.00 5011.00,3889.00 5011.00,3889.00
             5011.00,3889.00 5011.00,4461.00 5011.00,4461.00
             5011.00,4461.00 3955.00,4461.00 3955.00,4461.00
             3955.00,4461.00 3955.00,3889.00 3955.00,3889.00 Z"
            />
          </Link>
          <Link aria-label="Go to Rowan Red Sky's page" to="/rowan-red-sky">
            <path
              id="rowan"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 4609.00,4670.00
           C 4609.00,4670.00 5385.00,4670.00 5385.00,4670.00
             5385.00,4670.00 5385.00,5231.00 5385.00,5231.00
             5385.00,5231.00 4609.00,5231.00 4609.00,5231.00
             4609.00,5231.00 4609.00,4670.00 4609.00,4670.00 Z"
            />
          </Link>
          <Link aria-label="Go to Anita Chastanet's page" to="/anita-chastanet">
            <path
              id="anita"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 3520.00,5319.00
           C 3520.00,5319.00 4532.00,5319.00 4532.00,5319.00
             4532.00,5319.00 4532.00,5852.00 4532.00,5852.00
             4532.00,5852.00 3520.00,5852.00 3520.00,5852.00
             3520.00,5852.00 3520.00,5319.00 3520.00,5319.00 Z"
            />
          </Link>
          <Link aria-label="Go to Stewart Legere's page" to="/stewart-legere">
            <path
              id="stewart"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 4433.00,5907.00
           C 4433.00,5907.00 5258.00,5907.00 5258.00,5907.00
             5258.00,5907.00 5258.00,6441.00 5258.00,6441.00
             5258.00,6441.00 4433.00,6441.00 4433.00,6441.00
             4433.00,6441.00 4433.00,5907.00 4433.00,5907.00 Z"
            />
          </Link>
          <Link
            aria-label="Go to William Hunt and Fan Wu's page"
            to="/william-hunt-fan-wu"
          >
            <path
              id="fan-will"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 4224.00,6958.00
           C 4224.00,6958.00 4994.00,6958.00 4994.00,6958.00
             4994.00,6958.00 4994.00,7794.00 4994.00,7794.00
             4994.00,7794.00 4224.00,7794.00 4224.00,7794.00
             4224.00,7794.00 4224.00,6958.00 4224.00,6958.00 Z"
            />
          </Link>
          <Link
            aria-label="Go to Liliona Quarmyne's page"
            to="/liliona-quarmyne"
          >
            <path
              id="liliona"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 3806.00,8316.00
           C 3806.00,8316.00 4796.00,8316.00 4796.00,8316.00
             4796.00,8316.00 4796.00,8976.00 4796.00,8976.00
             4796.00,8976.00 3806.00,8976.00 3806.00,8976.00
             3806.00,8976.00 3806.00,8316.00 3806.00,8316.00 Z"
            />
          </Link>
          <Link aria-label="Go to Olivia Shortt's page" to="olivia-shortt">
            <path
              id="olivia"
              fill="none"
              stroke="black"
              strokeWidth="1"
              d="M 2948.00,8883.00
           C 2948.00,8883.00 3619.00,8883.00 3619.00,8883.00
             3619.00,8883.00 3619.00,9455.00 3619.00,9455.00
             3619.00,9455.00 2948.00,9455.00 2948.00,9455.00
             2948.00,9455.00 2948.00,8883.00 2948.00,8883.00 Z"
            />
          </Link>
        </svg>
      </div>
    </nav>
  );
};

export default MobileHero;
