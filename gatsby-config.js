module.exports = {
  siteMetadata: {
    title: `storyblok-presentation`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "0np9DwmbWInE8AgqxDp1Fgtt",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
        // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
