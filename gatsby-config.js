module.exports = {
  siteMetadata: {
    title: `This Inescapable City`,
    description: `Artistic installation website for This Inescapable City`,
    siteUrl: `https://www.thisinescapablecity.ca`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_SPACE_ID
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/styles/variables.scss"; @import "${__dirname}/src/styles/mixins-functions.scss";`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
  ],
};
