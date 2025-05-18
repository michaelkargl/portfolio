import ProjectsUi from "./projects-ui";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof ProjectsUi> = {
    component: ProjectsUi
}

type Story = StoryObj<typeof ProjectsUi>;

export const ProjectUiStory: Story = {
    args: {
        projects: [
            { name: 'Project 1' },
            { name: 'Project 2' },
            { name: 'Project 3' }
        ]
    }
}


export default meta;