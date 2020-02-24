module.exports = {
  siteMetadata: {
    title: `Matias Huapaya`,
    description: `Matias Huapaya's personal portfolio website. Learn more about my abilities as a software developer and graphic designer`,
    author: `@matiashuapaya`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `matias-huapaya-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#1B008C`,
        theme_color: `#1B008C`,
        display: `minimal-ui`,
        icon: `src/images/logo-bgwhite.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
  ],
}
