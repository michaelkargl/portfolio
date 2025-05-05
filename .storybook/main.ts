import type { StorybookConfig } from '@storybook/react-webpack5';
import React from "react";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "webpackFinal": async (config, options)=> {
    return await setupGatsbySupport(config);
  }
};

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

  // Use correct react-dom depending on React version.
  if (parseInt(React.version) <= 18) {
    config.externals = ["react-dom/client"];
  }

  // Remove core-js to prevent issues with Storybook
  rule.exclude= [/core-js/]

  // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
  // rule.use[0].options.plugins.push(
  //     require.resolve("babel-plugin-remove-graphql-queries")
  // )

  config.resolve.mainFields=["browser", "module", "main"]
  return config
}

export default config;