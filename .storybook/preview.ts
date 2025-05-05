import type { Preview } from '@storybook/react'
import { action } from "@storybook/addon-actions"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};


/**
 * @summary Configures the environment to support gatsby according to the docs
 * @see https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/
 */
function configureGatsbySupport() {
    // Gatsby's Link overrides:
    // Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
    // This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
    // so Gatsby Link doesn't throw errors.
    // @ts-ignore
    global.___loader = {
        enqueue: () => {
        },
        hovering: () => {
        },
    }
    // This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
    // @ts-ignore
    global.__BASE_PATH__ = "/"

    // Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
    // In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
    // @ts-ignore
    window.___navigate = pathname => {
        action("NavigateTo:")(pathname)
    }
}


// configureGatsbySupport();
export default preview;