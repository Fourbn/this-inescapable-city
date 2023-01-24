// import React, { useEffect, useState } from "react";
import React from "react";
// import { graphql, Link } from "gatsby";
import { graphql } from "gatsby";
// import useFade from "../hooks/useFade";

// import DesktopHero from "../components/DesktopHero/DesktopHero";
// import MobileHero from "../components/MobileHero/MobileHero";
// import Footer from "../components/Footer/Footer";
// import MobileWarningModal from "../components/MobileWarningModal/MobileWarningModal";
// import DelayedRender from "../components/DelayedRender/DelayedRender";

// import { hero, bgWrapper, extraNav } from "./index.module.scss";
import { thanksMsg } from "./index.module.scss";

const IndexPage = ({ data }) => {
  // const { images } = data.contentfulSitePage;
  // const [desktopHeroImg, mobileHeroImg] = images;

  // const [renderModal, setRenderModal] = useState(false);
  // const [modalVisible, setModalVisible, modalFadeProps] = useFade(true);

  // useEffect(() => {
  //   if (typeof window !== "undefined" && window) {
  //     const { sessionStorage } = window;

  //     const alreadyVisitedHomepage = sessionStorage.getItem("visited");

  //     if (alreadyVisitedHomepage) {
  //       setRenderModal(false);
  //     } else {
  //       setRenderModal(true);
  //       sessionStorage.setItem("visited", "true");
  //     }
  //   }
  // }, []);

  return (
    <>
      <div className={thanksMsg}>
        <h1>
          Thank you for supporting <span>This Inescapable City!</span>
        </h1>
        <p>
          The installation is now closed to the public, but if you want to
          continue to support Probably Theatre you can visit{" "}
          <a href="https://www.probablytheatre.com" rel="noopener noreferrer">
            their website
          </a>{" "}
          or follow them on{" "}
          <a href="https://www.instagram.com/probablytheatre/?hl=en" rel="noopener noreferrer">
            instagram.
          </a>
        </p>
      </div>
      {/* {renderModal && modalVisible && (
        <DelayedRender delay={1700}>
          <MobileWarningModal
            setModalVisible={setModalVisible}
            fadeProps={modalFadeProps}
          />
        </DelayedRender>
      )}
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
              <Link to="/comments-poem">comments poem</Link>
            </li>
            <li>
              <Link to="/land-acknowledgement">land acknowledgement</Link>
            </li>
          </ul>
        </nav>
      </main>
      <Footer /> */}
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
