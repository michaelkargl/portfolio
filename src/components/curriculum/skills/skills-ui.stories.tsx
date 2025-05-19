import {Meta} from "@storybook/react";
import {StoryObj} from "@storybook/react";
import {SkillsUi} from "./skills-ui";

const meta: Meta<typeof SkillsUi> = {
    tags: ["autodocs"],
    component: SkillsUi,
}

type Story = StoryObj<typeof SkillsUi>;

export const SkillsUiStory: Story = {
    args: {
        skillsDescription: "# My Skills\n\nHere is an overview of my technical skills and experience.",
        skillsByScore: JSON.stringify([
            { "name": "C#", "percent": 99 },
            { "name": "C++", "percent": 83 },
            { "name": "C", "percent": 67 },
            { "name": "xUnit", "percent": 59 },
            { "name": "Azure Foundations", "percent": 29 }
        ]),
    skillsByTime: JSON.stringify([
            { "name": "Frontend: (1946 hours)", "percent": 36.41 },
            { "name": "Backend (1903 hours)", "percent": 35.60 }
        ])
    }
}

export default meta;