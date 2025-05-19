import {Meta, StoryObj} from "@storybook/react";
import {DesktopIcon} from "./desktop-icon";
import React from "react";
import {Layout} from "../layout/layout";
import {Desktop, Gcdef100, Mdisp321, User} from "@react95/icons";


const meta: Meta<typeof DesktopIcon> = {
    component: DesktopIcon,
    tags: ["autodocs"],
    args: {
        linkTarget: './'
    },
    render: (args) => (<Layout>
        {[
            ['Desktop', <Desktop variant="32x32_4"/>],
            ['User', <User variant="32x32_4"/>],
            ['Mdisp321', <Mdisp321 variant="32x32_4"/>],
            ['Gcdef100', <Gcdef100 variant="32x32_4"/>]
        ].map(([label, icon]) => <DesktopIcon {...args} displayName={label.toString()}>{icon}</DesktopIcon>)}
    </Layout>)
}

type Story = StoryObj<typeof DesktopIcon>;
export const DesktopIconStory: Story = {
    args: {
        displayName: 'My Icon',
    }
}

export default meta;