module.exports = {
  siteMetadata: {
    title: `Matias Huapaya | Portfolio`,
    description: `Hey, I'm Matias. I'm a software developer + designer. I build things by focusing on usability and aesthetics, and I’m passionate about approaching tech through an anti-oppressive, intersectional lens.`,
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
  ],
}
