import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { wrapper, gatsbyImg, svgStyles } from "./DesktopHero.module.scss";

const DesktopHero = ({ desktopHeroImage }) => {
  return (
    <div className={wrapper}>
      <GatsbyImage
        image={desktopHeroImage.gatsbyImageData}
        alt={desktopHeroImage.description}
        className={gatsbyImg}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7277 5411"
        className={svgStyles}
      >
        <Link to="/laura-gallagher-doucette">
          <path
            id="laura"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 152.00,408.00
           C 152.00,408.00 1088.00,408.00 1088.00,408.00
             1088.00,408.00 1088.00,1112.00 1088.00,1112.00
             1088.00,1112.00 152.00,1112.00 152.00,1112.00
             152.00,1112.00 152.00,408.00 152.00,408.00 Z"
          />
        </Link>
        <Link to="/lou-campbell">
          <path
            id="lou"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 1480.00,376.00
           C 1480.00,376.00 2424.00,376.00 2424.00,376.00
             2424.00,376.00 2424.00,1000.00 2424.00,1000.00
             2424.00,1000.00 1480.00,1000.00 1480.00,1000.00
             1480.00,1000.00 1480.00,376.00 1480.00,376.00 Z"
          />
        </Link>
        <Link to="/dylan-tate-howarth">
          <path
            id="dylan"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 3088.00,160.00
           C 3088.00,160.00 3888.00,160.00 3888.00,160.00
             3888.00,160.00 3888.00,768.00 3888.00,768.00
             3888.00,768.00 3088.00,768.00 3088.00,768.00
             3088.00,768.00 3088.00,160.00 3088.00,160.00 Z"
          />
        </Link>
        <Link to="/olivia-shortt">
          <path
            id="olivia"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 770.00,4367.00
           C 770.00,4367.00 1364.00,4367.00 1364.00,4367.00
             1364.00,4367.00 1364.00,4884.00 1364.00,4884.00
             1364.00,4884.00 770.00,4884.00 770.00,4884.00
             770.00,4884.00 770.00,4367.00 770.00,4367.00 Z"
          />
        </Link>
        <Link to="/yolanda-bonnell">
          <path
            id="yolanda"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 1414.00,4752.00
           C 1414.00,4752.00 2162.00,4752.00 2162.00,4752.00
             2162.00,4752.00 2162.00,5258.00 2162.00,5258.00
             2162.00,5258.00 1414.00,5258.00 1414.00,5258.00
             1414.00,5258.00 1414.00,4752.00 1414.00,4752.00 Z"
          />
        </Link>
        <Link to="/rihkee-strapp">
          <path
            id="rihkee"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 2189.00,4901.00
           C 2189.00,4901.00 2778.00,4901.00 2778.00,4901.00
             2778.00,4901.00 2778.00,5363.00 2778.00,5363.00
             2778.00,5363.00 2189.00,5363.00 2189.00,5363.00
             2189.00,5363.00 2189.00,4901.00 2189.00,4901.00 Z"
          />
        </Link>
        <Link to="/everette-fournier">
          <path
            id="everette"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 2965.00,4461.00
           C 2965.00,4461.00 3740.00,4461.00 3740.00,4461.00
             3740.00,4461.00 3740.00,4983.00 3740.00,4983.00
             3740.00,4983.00 2965.00,4983.00 2965.00,4983.00
             2965.00,4983.00 2965.00,4461.00 2965.00,4461.00 Z"
          />
        </Link>
        <Link to="/francesca-ekwuyasi">
          <path
            id="francesca"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 3366.00,3735.00
           C 3366.00,3735.00 4136.00,3735.00 4136.00,3735.00
             4136.00,3735.00 4136.00,4136.00 4136.00,4136.00
             4136.00,4136.00 3366.00,4136.00 3366.00,4136.00
             3366.00,4136.00 3366.00,3735.00 3366.00,3735.00 Z"
          />
        </Link>
        <Link to="/rowan-red-sky">
          <path
            id="rowan"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 4084.00,4160.00
           C 4084.00,4160.00 4776.00,4160.00 4776.00,4160.00
             4776.00,4160.00 4776.00,4560.00 4776.00,4560.00
             4776.00,4560.00 4084.00,4560.00 4084.00,4560.00
             4084.00,4560.00 4084.00,4160.00 4084.00,4160.00 Z"
          />
        </Link>
        <Link to="/anita-chastanet">
          <path
            id="anita"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 4480.00,3248.00
           C 4480.00,3248.00 5320.00,3248.00 5320.00,3248.00
             5320.00,3248.00 5320.00,3680.00 5320.00,3680.00
             5320.00,3680.00 4480.00,3680.00 4480.00,3680.00
             4480.00,3680.00 4480.00,3248.00 4480.00,3248.00 Z"
          />
        </Link>
        <Link to="/stewart-legere">
          <path
            id="stewart"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 5288.00,4196.00
           C 5288.00,4196.00 6040.00,4196.00 6040.00,4196.00
             6040.00,4196.00 6040.00,4624.00 6040.00,4624.00
             6040.00,4624.00 5288.00,4624.00 5288.00,4624.00
             5288.00,4624.00 5288.00,4196.00 5288.00,4196.00 Z"
          />
        </Link>
        <Link to="/liliona-quarmyne">
          <path
            id="liliona"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 5480.00,2636.00
           C 5480.00,2636.00 6248.00,2636.00 6248.00,2636.00
             6248.00,2636.00 6248.00,3016.00 6248.00,3016.00
             6248.00,3016.00 5480.00,3016.00 5480.00,3016.00
             5480.00,3016.00 5480.00,2636.00 5480.00,2636.00 Z"
          />
        </Link>
        <Link to="/william-hunt-fan-wu">
          <path
            id="fan-will"
            fill="none"
            stroke="black"
            strokeWidth="1"
            d="M 6304.00,3100.00
           C 6304.00,3100.00 7036.00,3100.00 7036.00,3100.00
             7036.00,3100.00 7036.00,3828.00 7036.00,3828.00
             7036.00,3828.00 6304.00,3828.00 6304.00,3828.00
             6304.00,3828.00 6304.00,3100.00 6304.00,3100.00 Z"
          />
        </Link>
      </svg>
    </div>
  );
};

export default DesktopHero;
