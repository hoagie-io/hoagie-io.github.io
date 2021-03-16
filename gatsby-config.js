/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Hoagie - The Princeton Digital Experience Club`,
    siteUrl: `https://hoagie.io/`,
    description: `Dreamed up for Princeton students, Hoagie is a creative space that fosters community-centered design and implementation.`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: `Hoagie - The Princeton Design Club and Community`,
        description: `Dreamed up for Princeton students, Hoagie is a creative space that fosters community-centered design and implementation. We like UI/UX design, web development and more.`,
        canonical: 'https://www.hoagie.io/',
        openGraph: {
          title: `Hoagie - The Princeton Design Club and Community`,
          description: `Dreamed up for Princeton students, Hoagie is a creative space that fosters community-centered design and implementation. We like UI/UX design, web development and more.`,
          type: 'website',
          locale: 'en_US',
          url: 'https://www.hoagie.io/',
          site_name: 'Hoagie',
          images: [
            {
              url: 'https://www.hoagie.io/graph_thumbnail.jpg',
              width: 800,
              height: 600,
              alt: 'Hoagie Thubmnail',
            },
          ],
        },
      },
    },
    `gatsby-plugin-sass`],
}