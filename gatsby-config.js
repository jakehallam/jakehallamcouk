module.exports = {
  siteMetadata: {
    title: 'Jake Hallam',
    description: 'Developer',
    author: 'Jake Hallam',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        printAll: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-46471035-1',
        head: true,
      },
    },
  ],
};
