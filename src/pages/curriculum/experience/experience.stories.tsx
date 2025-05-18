import {Meta} from "@storybook/react/*";
import {ExperienceUi} from "./experience-ui";
import {StoryObj} from "@storybook/react";
import {DateTime} from "luxon";


const meta: Meta<typeof ExperienceUi> = {
    component: ExperienceUi
}

type Story = StoryObj<typeof ExperienceUi>;

export const ExperienceStory: Story = {
    args: {
        experiences: [
            {
                from: DateTime.now().minus({years: 1, month: 3}),
                to: DateTime.now(),
                description: `Test Description for element 1`,
                role: 'Test Job Role No5',
                name: 'Job Role No5 in Cleaning'
            },
            {
                from: DateTime.now().minus({years: 2, month: 8}),
                to: DateTime.now(),
                description: `Test Description for element 2`,
                role: 'Test Job Role No6',
                name: 'Job Role No6 in Cleaning'
            }
        ]
    }
}

export default meta;