import {Meta} from "@storybook/react/*";
import {StoryObj} from "@storybook/react";
import {AboutMeUi} from "./about-me-ui";


const meta: Meta<typeof AboutMeUi> = {
    tags: ["autodocs"],
    component: AboutMeUi,

}

type Story = StoryObj<typeof AboutMeUi>;

export const AboutMeStory: Story = {
    args: {
        markdownContent: `
# Header 1
_image rendered via markdown_
---
![image](http://localhost:6006/static/media/src/stories/assets/styling.png)
`
    }
}

export default meta;