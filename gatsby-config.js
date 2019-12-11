module.exports = {
  siteMetadata: {
    title: `GitRevue | Simplify your code reviews`,
    description: `Simplify your code reviews, automate common tasks and implement standard review flows throughout your team`,
    author: `@gitrevue`,
    siteUrl: 'https://gitrevue.io',
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                table: 'table table-bordered',
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 825,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GitRevue`,
        short_name: `GitRevue`,
        start_url: `/`,
        background_color: `#36345c`,
        theme_color: `#36345c`,
        display: `minimal-ui`,
        icon: `src/images/gitrevue-icon-square.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        display: `swap`,
        fonts: [
          {
            family: `Kanit`,
            subsets: [`latin`],
            variants: [`400'`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-Z5F3D6M5Y5`,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://gitrevue.io`,
        stripQueryString: true,
      },
    },
  ],
}
