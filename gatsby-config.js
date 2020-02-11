module.exports = {
  siteMetadata: {
    title: `In Out Finland podcast`,
    description: `Just some dudes and one sassy queen talking about different stuff IN & OUT of  FINLAND! 
    In reality we just rumble, stutter and are super awkward...`,
    author: `inoutfinland`,
    twitter: ``,
    instagram: `https://www.instagram.com/inoutfinland/`,
    facebook: `https://www.facebook.com/inoutfinland`,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1497187925?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9pbm91dGZpbmxhbmRwb2RjYXN0LmxpYnN5bi5jb20vcnNz`,
    pocket: `https://pca.st/itunes/1497187925`,
    spotify: `https://open.spotify.com/show/7G558PtZW9HBrQmtLpN7pv`,
    overcast: `https://overcast.fm/itunes1497187925`,
    castbox: `https://castbox.fm/vic/1497187925`,
    castro: `https://castro.fm/itunes/1497187925`,
    podbean: `https://www.podbean.com/podcast-detail/g9v5c-68ac3/Over-The-Bridge-Podcast`,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Finoutfinlandpodcast.libsyn.com%2Frss`,
    player: `https://player.fm/series/https%253A%252F%252Finoutfinlandpodcast%252Elibsyn%252Ecom%252Frss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://inoutfinlandpodcast.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
