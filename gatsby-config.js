module.exports = {
  siteMetadata: {
    title: 'Jantix',
    description:
      'Jantix is a TypeScript library that makes it easy to create a fully type-safe, staticly verified Redux architecture.',
    author: 'Casey Primozic <casey@cprimozic.net>',
  },
  plugins: [
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
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
