import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    pathPrefix: "/portfolio",
    siteMetadata: {
        title: `osaPortfolio`,
        siteUrl: `https://www.yourdomain.tld`,
        author: `@michaelkargl`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-mdx",
        "gatsby-plugin-decap-cms",
        "gatsby-plugin-sass",
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images-v2`,
                        options: {
                            staticFolderName: 'static',
                        }
                    },
                ],

            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "cms",
                "path": `${__dirname}/src/cms`
            },
            __key: "pages"
        }
    ]
};

export default config;
