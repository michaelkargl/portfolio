import React, {PropsWithChildren} from "react";
import {GroupBox, Monitor, Tab, TabBody, Tabs} from "react95";
import {CvTabs} from "../../models";
import {CvWindow} from "./cvWindow";
import {Link} from "gatsby";

export type CurriculumProps = PropsWithChildren<{}>

export const Curriculum: React.FC<CurriculumProps> = (props): React.ReactElement => {
    const [activeTab, setActiveTab] = React.useState<number>(0);

    const buildCurriculumTargetUrl = (path: string): URL => {
        const url = new URL(window.location.href);
        // The goal is to be able to navigate to different pages without losing the query parameters (theme)
        // When setting the url path we run into problems with the url-prefix added at compile time. To prevent that,
        // we must only replace the parts after the url-prefix. There are 2 cases:
        //    1. The user is at the root of the application and hasn't yet navigated through the CV
        //       /portfolio/ => no curriculum yet => add the ./curriculum/skills
        //    2. The user already navigated the CV
        //       /portfolio/curriculum/about-me => change to /portfolio/curriculum/skills
        //                   we add the curriculum to route to the right page
        const curriculumPattern = /\/curriculum\/.+\//;
        url.pathname = url.pathname.match(curriculumPattern)
            ? url.pathname.replace(curriculumPattern, `/curriculum/${path}`)
            : url.pathname.replace(/\/$/, `/curriculum/${path}`)
        return url;
    }

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
                    <Link to={buildCurriculumTargetUrl('about-me').toString()}>
                        <Tab value={CvTabs.AboutMe}>About Me</Tab>
                    </Link>
                    <Link to={buildCurriculumTargetUrl('skills').toString()}>
                        <Tab value={CvTabs.Skills}>Skills</Tab>
                    </Link>
                    <Link to={buildCurriculumTargetUrl('experience').toString()}>
                        <Tab value={CvTabs.Experience}>Experience</Tab>
                    </Link>
                    <Link to={buildCurriculumTargetUrl('training').toString()}>
                        <Tab value={CvTabs.Training}>Training</Tab>
                    </Link>
                    <Link to={buildCurriculumTargetUrl('links').toString()}>
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