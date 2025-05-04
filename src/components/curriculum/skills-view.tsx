import * as React from "react";
import {ReactElement, useEffect} from "react";
import {CvSkillParserContext} from "../../contexts/cv-skill-parser-context";
import {CvSkill} from "../../models";
import {ProgressBar} from "react95";


export type SkillsViewProps = { skillsJson: string }
export const SkillsView: React.FC<SkillsViewProps> = (props): ReactElement => {
    const {parser} = React.useContext(CvSkillParserContext);
    const [skills, setSkills] = React.useState<CvSkill[]>([])

    useEffect(() => {
        const sortedSkills = parser.parseList(props.skillsJson);
        setSkills(sortedSkills);
    }, []);

    return (<div className='skills-view--component'>
        {
            skills?.map((skill, index) => (
                <div key={index}>
                    <label>{skill.name}</label>
                    <ProgressBar variant="default" value={skill.percent} key={index}
                                 hideValue={true}/>
                </div>
            ))
        }
    </div>);
}