import * as React from "react";
import {GroupBox, Monitor, Tab, TabBody, Tabs} from "react95";
import {CvTabs, Markdown} from "../../models";
import {Remark} from "react-remark";
import {SkillsView} from "./skills-view";
import {CvWindow} from "./cvWindow";
import {MarkdownContent} from "../MarkdownContent";

export interface CurriculumProps {
    title: string;
    aboutMe: Markdown;
    skillsDescription: Markdown;
    skillsByTimeJson: string;
    skillsByScoreJson: string;
    links: Markdown;
    training: Markdown;
    monitorImage: string;
}

export const Curriculum: React.FC<CurriculumProps> = (props): React.ReactElement => {
    const [activeTab, setActiveTab] = React.useState<number>(0);
    return (
        <CvWindow title={props.title}>
            <div className="index-component--introduction">
                {/* This is necessary to not have the menu overlap with the monitor.
                                Unsure how to ignore that warning or extend Monitor to support className. */}
                {/* @ts-ignore */}
                <Monitor className='background-element' backgroundStyles={{
                    backgroundImage: `url("${props.monitorImage}")`,
                    backgroundSize: '80%'
                }}/>
                <Tabs value={activeTab} onChange={setActiveTab}>
                    <Tab value={CvTabs.AboutMe}>About Me</Tab>
                    <Tab value={CvTabs.Skills}>Skills</Tab>
                    <Tab value={CvTabs.Training}>Training</Tab>
                    <Tab value={CvTabs.Links}>Links</Tab>
                </Tabs>
                <TabBody>
                    <GroupBox>
                        {activeTab === CvTabs.AboutMe && (
                            <>
                                <MarkdownContent>{props.aboutMe}</MarkdownContent>
                                <MarkdownContent>{props.links}</MarkdownContent>
                            </>
                        )}
                        {activeTab === CvTabs.Skills && (
                            <>
                                <MarkdownContent>{props.skillsDescription}</MarkdownContent>
                                <hr/>
                                <GroupBox label='Timed Skills'>
                                    <SkillsView skillsJson={props.skillsByTimeJson}/>
                                </GroupBox>
                                <GroupBox label='Scored Skills'>
                                    <SkillsView skillsJson={props.skillsByScoreJson}/>
                                </GroupBox>
                            </>
                        )}
                        {activeTab === CvTabs.Training && (
                            <MarkdownContent>{props.training}</MarkdownContent>
                        )}
                        {activeTab === CvTabs.Links && (
                            <MarkdownContent>{props.links}</MarkdownContent>
                        )}
                    </GroupBox>
                </TabBody>
            </div>
        </CvWindow>
    );
};