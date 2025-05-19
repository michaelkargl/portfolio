import {Curriculum} from "../curriculum";
import {Layout} from "../../layout/layout";
import React from "react";
import {MarkdownContent} from "../../MarkdownContent";
import {GroupBox} from "react95";
import {SkillsView} from "../skills-view";

export interface SkillsUiProps {
    skillsDescription: string;
    skillsByTime: string;
    skillsByScore: string;
}

export const SkillsUi: React.FC<SkillsUiProps> = (props) => (
    <div className='skills-ui-component'>
        <Layout>
            <Curriculum title='Curriculum / Skills'>
                <>
                    <MarkdownContent>{props.skillsDescription ?? ''}</MarkdownContent>
                    <hr/>
                    <GroupBox label='Timed Skills'>
                        <SkillsView skillsJson={props.skillsByTime ?? ''}/>
                    </GroupBox>
                    <GroupBox label='Scored Skills'>
                        <SkillsView skillsJson={props.skillsByScore ?? ''}/>
                    </GroupBox>
                </>
            </Curriculum>
        </Layout>
    </div>
);