import React, {ReactElement} from "react";
import {DateTime} from "luxon";
import {Experience} from "./models";
import {Layout} from "../../../components";
import {Curriculum} from "../../../components/curriculum/curriculum";


export type ExperienceUiProps = {
    experiences: Experience[];
}

export const ExperienceUi: React.FC<ExperienceUiProps> = (props: ExperienceUiProps): ReactElement => {
    return <div className='experience-ui-component'>
        <Layout>
            <Curriculum title='Curriculum / Experience'>
                <ul>
                    {props.experiences.map((job: any, index: number) => {
                        const endDate = job.to ?? DateTime.now()
                        const diff = endDate.diff(job.from, ['years', 'months']).toObject()
                        return (
                            <li key={`job-${index}`}>
                                <u>{job?.name ?? '-'}</u>
                                <ul>
                                    <li>{job.role}</li>
                                    <li>{`${diff.years} years ${diff.months?.toFixed(2)} months`}</li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </Curriculum>
        </Layout>
    </div>
}