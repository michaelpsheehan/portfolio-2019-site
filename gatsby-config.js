module.exports = {
  siteMetadata: {
    title: `Michael Sheehan Web Development and Design`,
    description: `Web developer and Designer. I build websites with HTML5, CSS3 and Javascript. I use React to create dynamic Single Page Applications. I use Gatsby.js to create static webpages and create headless Wordpress sites.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },



    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:300,400', 'Sans Serif']
        }
      }
    },


    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-133600320-1",
        head: true,

      },
    },





    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },



    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
