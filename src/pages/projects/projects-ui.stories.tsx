import ProjectsUi from "./projects-ui";
import {Meta, StoryObj} from "@storybook/react";
import {ProjectBuilder} from "./builder/project-builder";


const meta: Meta<typeof ProjectsUi> = {
    component: ProjectsUi
}

type Story = StoryObj<typeof ProjectsUi>;

function buildDummyProject(id: string, projectBuilder: ProjectBuilder): ProjectBuilder {
    return projectBuilder
        .withName(`Project ${id}`)
        .withDescription(`Project description: ${id}`)
        .withUrl(`https://project.com?id=${id}`)
}

export const ProjectUiStory: Story = {
    args: {
        projects: [
            new ProjectBuilder('1')
                .withName('Project 1')
                .withChild('1.1', builder => buildDummyProject('1.1', builder))
                .withChild('1.2', builder => buildDummyProject('1.2', builder))
                .build(),
            new ProjectBuilder('2')
                .withName('Project 2')
                .withChild('2.1', builder =>
                    buildDummyProject('2.1', builder)
                        .withChild('2.1.1', builder => buildDummyProject('2.1.1', builder))
                )
                .build()
        ]
    }
}


export default meta;