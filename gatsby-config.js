module.exports = {
  siteMetadata: {
    title: `CV maker`,
    author: {
      name: `Massick`,
      summary: `Matemático y desarrollador web`,
    },
    description: `A free and open source CV maker using GatsbyJS`,
    siteUrl: `https://massick.netlify.app/`,
    social: {
      twitter: `M4ss1ck`,
    },
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`es`, `en`],
        defaultLanguage: `es`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://massick.netlify.app/`, // declared above too
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
  ],
}
