import type {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
    "stories": [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "staticDirs": ["../static"],
    "addons": [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
        ({
            name: "@storybook/addon-styling-webpack",

            options: {
                rules: [{
                    test: /\.css$/,
                    sideEffects: true,
                    use: [
                        require.resolve("style-loader"),
                        {
                            loader: require.resolve("css-loader"),
                            options: {},
                        },
                    ],
                }, {
                    test: /\.s[ac]ss$/,
                    sideEffects: true,
                    use: [
                        require.resolve("style-loader"),
                        {
                            loader: require.resolve("css-loader"),
                            options: {

                                importLoaders: 2,
                            },
                        },
                        require.resolve("resolve-url-loader"),
                        {
                            loader: require.resolve("sass-loader"),
                            options: {
                                // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                                implementation: require.resolve("sass"),
                                sourceMap: true,
                                sassOptions: {},
                            },
                        },
                    ],
                },],
            }
        })
    ],
    "framework": {
        "name": "@storybook/react-webpack5",
        "options": {}
    },
    "webpackFinal": async (config, options) => {
        // commented out due to it causing storybook to break with "React not configured" errors
        config = await setupGatsbySupport(config);
        config = await ignoreTypescriptTypeDefinitionFiles(config);
        config = await registerStubs(config);
        return config;
    }
};


/**
 * Registers stubs to be used instead of the real tag
 * (basically: use <LinkMock> instead of <Link>)
 * @param config the webpack configuration object
 * @return an updated webpack configuration object
 */
async function registerStubs(config: any): Promise<any> {
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        gatsby: require.resolve('./gatsby-stubs.jsx')
    };
    return config;
}

/**
 * Webpack doesn't know what to do with typescript type definitions.
 * This function regsiters rules to ignore them in packaging.
 * @param config the webpack configuration object
 * @return the updated configuration object
 */
async function ignoreTypescriptTypeDefinitionFiles(config: any): Promise<any> {
    config = {...(config ?? {})}

    // Exclude .d.ts files from being processed
    config.module.rules.push({
        test: /\.d\.ts$/,
        use: 'ignore-loader',
    });
    return Promise.resolve(config);
}

/**
 * Setting up gatsby support by configuring webpack according to the docs
 * @param config The webpack configuration.
 * @return the mutated configuration
 * @see https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/
 */
async function setupGatsbySupport(config: any): Promise<any> {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    let rule = config.module.rules[0];
    rule.exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/]

    // caused: 'React not defined' errors
    // Use correct react-dom depending on React version.
    // if (parseInt(React.version) <= 18) {
    //   config.externals = ["react-dom/client"];
    // }

    // Remove core-js to prevent issues with Storybook
    rule.exclude = [/core-js/]

    // caused: 'plugins does not exist on options' error
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    // rule.use[0].options.plugins.push(
    //     require.resolve("babel-plugin-remove-graphql-queries")
    // )

    // register gatsby stubs in case some elements can not be found

    config.resolve ??= {}
    config.resolve.alias ??= {}
    config.resolve.alias.gatsby = require.resolve('./gatsby-stubs.jsx')

    config.resolve.mainFields = ["browser", "module", "main"]
    return config
}

export default config;