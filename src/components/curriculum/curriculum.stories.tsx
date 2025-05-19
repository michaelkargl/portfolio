import {Meta, StoryObj} from "@storybook/react";
import {Curriculum} from "./curriculum";
import {Layout} from "../layout/layout";
import React from "react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Curriculum> = {
    component: Curriculum,
    tags: ["autodocs"],
    render: (args) => (<Layout><Curriculum {...args}/></Layout>)
}

type Story = StoryObj<typeof Curriculum>;


export const CurriculumStory: Story = {
    args: {
        // @ts-ignore
        title: "Curriculum"
    }
}
export default meta;

