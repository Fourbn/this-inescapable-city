module.exports = {
  siteMetadata: {
    title: `This Inescapable City`,
    description: `This Inescapable City is a digital exhibition presented by Probably Theatre and featuring work by thirteen artists engaging with themes of landscapes, cityscapes and waterscapes.`,
    siteUrl: `https://www.thisinescapablecity.ca`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_SPACE_ID,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/styles/variables.scss"; @import "${__dirname}/src/styles/mixins-functions.scss";`,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "This Inescapable City",
        short_name: "TIS",
        start_url: "/",
        background_color: "#f0f0f0",
        theme_color: "#08a3c9",
        display: "standalone",
        icon: "src/assets/icon.png",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GATSBY_G4_TRACKING_ID],
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          analytics: true,
        },
        credentials: {
          apiKey: process.env.GATSBY_FB_API_KEY,
          databaseURL: process.env.GATSBY_FB_DATABASE_URL,
          authDomain: process.env.GATSBY_FB_AUTH_DOMAIN,
          projectId: process.env.GATSBY_FB_PROJECT_ID,
          storageBucket: process.env.GATSBY_FB_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FB_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FB_APP_ID,
          measurementId: process.env.GATSBY_FB_MEASUREMENT_ID,
        },
      },
    },
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
