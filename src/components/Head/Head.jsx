import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

export const Head = ({ location, data }) => {
  const siteMetaQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      contentfulAsset(title: { eq: "site-media-image" }) {
        gatsbyImageData
        description
      }
    }
  `);

  const artistName =
    data.contentfulArtistPage && data.contentfulArtistPage.artistName;
  const siteName = data.contentfulSitePage && data.contentfulSitePage.pageTitle;
  const { pathname } = location;

  const { site, contentfulAsset } = siteMetaQuery;
  const { title, description, siteUrl } = site.siteMetadata;
  const socialImagePath = getSrc(contentfulAsset);

  const generateSiteTitle = () => {
    const uniquePageTitle = artistName || siteName || "";

    return uniquePageTitle ? `${uniquePageTitle} | ${title}` : title;
  };

  return (
    <>
      <title>{generateSiteTitle()}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex" />

      {/* Open Graph / Facebook social share tags */}
      <meta property="og:title" content={artistName || title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={pathname ? `${siteUrl}${pathname}` : siteUrl}
      />
      <meta property="og:image" content={socialImagePath} />
      <meta property="og:image:alt" content="This Inescapable City" />
      <meta property="og:description" content={description} />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={artistName || title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImagePath} />
    </>
  );
};

export default Head;
