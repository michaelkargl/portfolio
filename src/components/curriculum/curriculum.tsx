import React, {PropsWithChildren} from "react";
import {GroupBox, Monitor, Tab, TabBody, Tabs} from "react95";
import {CvTabs} from "../../models";
import {CvWindow} from "./cvWindow";
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

export type CurriculumProps = PropsWithChildren<{}>

export const Curriculum: React.FC<CurriculumProps> = (props): React.ReactElement => {
    const [activeTab, setActiveTab] = React.useState<number>(0);

    return (
        <CvWindow title="Curriculum">
            <div className="index-component--introduction">
                {/* This is necessary to not have the menu overlap with the monitor.
                                Unsure how to ignore that warning or extend Monitor to support className. */}
                {/* @ts-ignore */}
                <Monitor className='background-element'>
                    <StaticImage class='v-full' src='../../../static/assets/avatar.png'></StaticImage>
                </Monitor>

                <Tabs value={activeTab} onChange={setActiveTab}>
                    <Link to={`/curriculum/about-me${window.location.search}`}>
                        <Tab value={CvTabs.AboutMe}>About Me</Tab>
                    </Link>
                    <Link to={`/curriculum/skills${window.location.search}`}>
                        <Tab value={CvTabs.Skills}>Skills</Tab>
                    </Link>
                    <Link to={`/curriculum/experience${window.location.search}`}>
                        <Tab value={CvTabs.Experience}>Experience</Tab>
                    </Link>
                    <Link to={`/curriculum/training${window.location.search}`}>
                        <Tab value={CvTabs.Training}>Training</Tab>
                    </Link>
                    <Link to={`/curriculum/links${window.location.search}`}>
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