import {Meta} from "@storybook/react/*";
import {StoryObj} from "@storybook/react";
import {LinksUi} from "./links-ui";


const meta: Meta<typeof LinksUi> = {
    tags: ["autodocs"],
    component: LinksUi,

}

type Story = StoryObj<typeof LinksUi>;

export const AboutMeStory: Story = {
    args: {
        markdownContent: `
- <https://google.at>
- [Google.de](https://www.google.de)
- [Google.com]

[Google.com]: https://www.google.com
`
    }
}

export default meta;