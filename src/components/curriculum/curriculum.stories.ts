import {Curriculum} from "./curriculum";
import {Meta, StoryObj} from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Curriculum> = {
    component: Curriculum
}

type Story = StoryObj<typeof Curriculum>;


export const CurriculumStory : Story = {
    args: {}
}
export default meta;

