import {DesktopWindowUi} from "./desktop-window-ui";
import {Meta, StoryObj} from "@storybook/react";
import {Layout} from "../../components";
import {Curriculum} from "../curriculum/curriculum";
import React from "react";


const meta: Meta<typeof DesktopWindowUi> = {
    component: DesktopWindowUi,
    args: {
        title: "Desktop Window",
    },
    render: (args) => (<Layout>
        <DesktopWindowUi {...args}>Window Content</DesktopWindowUi>
    </Layout>)
}

type Story = StoryObj<typeof DesktopWindowUi>;

export const desktopWindowStory: Story = {
    args: {
        title: "Desktop Window 1",
    }
}

export default meta;