import React, {PropsWithChildren} from "react";
import {GroupBox, Monitor, Tab, TabBody, Tabs} from "react95";
import {CvTabs, Markdown} from "../../models";
import {CvWindow} from "./cvWindow";
import {Link} from "gatsby";

export type CurriculumProps = PropsWithChildren<{}>

export const Curriculum: React.FC<CurriculumProps> = (props): React.ReactElement => {
    const [activeTab, setActiveTab] = React.useState<number>(0);

    return (
        <CvWindow title="Curriculum">
            <div className="index-component--introduction">
                {/* This is necessary to not have the menu overlap with the monitor.
                                Unsure how to ignore that warning or extend Monitor to support className. */}
                {/* @ts-ignore */}
                <Monitor className='background-element' backgroundStyles={{
                    backgroundImage: `url("./assets/avatar.png")`,
                    backgroundSize: '80%' /* cheating the image into the size of the monitor */
                }}/>
                <Tabs value={activeTab} onChange={setActiveTab}>
                    <Link to='/curriculum/about-me'>
                        <Tab value={CvTabs.AboutMe}>About Me</Tab>
                    </Link>
                    <Link to='/curriculum/skills'>
                        <Tab value={CvTabs.Skills}>Skills</Tab>
                    </Link>
                    <Link to='/curriculum/experience'>
                        <Tab value={CvTabs.Experience}>Experience</Tab>
                    </Link>
                    <Link to='/curriculum/training'>
                        <Tab value={CvTabs.Training}>Training</Tab>
                    </Link>
                    <Link to='/curriculum/links'>
                        <Tab value={CvTabs.Links}>Links</Tab>
                    </Link>
                </Tabs>
                <TabBody>
                    <GroupBox>
                        {props.children}
                    </GroupBox>
                </TabBody>
            </div>
        </CvWindow>
    );
};