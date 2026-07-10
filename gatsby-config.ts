import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Daniel Welsh`,
    titleTemplate: `%s · Daniel Welsh`,
    description: `Daniel Welsh is a Senior Fullstack Software Engineer based in Berlin, working across TypeScript, Python, React, Angular, and AWS. Explore his experience, skills, and research publications in HCI and software engineering.`,
    siteUrl: `https://welshy.net`,
    author: `Daniel Welsh`,
    jobTitle: `Senior Fullstack Software Engineer`,
    location: `Berlin, Germany`,
    image: `/og-image.jpg`,
    social: [
      `https://www.linkedin.com/in/daniel-welsh-914776150/`,
      `https://github.com/wel-shy`,
      `https://www.instagram.com/wel__shy/`,
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `content`),
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: "DM Mono",
            file: "https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap",
          },
          {
            name: "Domine",
            file: "https://fonts.googleapis.com/css2?family=Domine:wght@400..700&display=swap",
          },
        ],
      },
    },
  ],
};

export default config;
