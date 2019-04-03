module.exports = {
  siteMetadata: {
    title: `Wes Huapaya`,
    description: `Wes Huapaya's personal portfolio website. Learn more about my abilities as a software developer and graphic designer`,
    author: `Wes Huapaya`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wes-huapaya-portfolio`,
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
