import {Meta} from "@storybook/react";
import {StoryObj} from "@storybook/react";
import {TrainingUi} from "./training-ui";

const meta: Meta<typeof TrainingUi> = {
    tags: ["autodocs"],
    component: TrainingUi,
}

type Story = StoryObj<typeof TrainingUi>;

export const TrainingUiStory: Story = {
    args: {
        training: `# Training & Education

## University Education
- **Dummy Master of Computer Science** - University of Technology, 2018-2020
- **Dummy Bachelor of Software Engineering** - State University, 2014-2018

## Professional Training
- **Dummy Advanced Cloud Architecture** - AWS Certification, 2022
- **Dummy React Advanced Patterns** - Frontend Masters, 2021
- **Dummy TypeScript Deep Dive** - Online Course, 2020`
    }
}

export default meta;