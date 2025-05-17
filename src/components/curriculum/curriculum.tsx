import React, {PropsWithChildren, useEffect} from "react";
import {GroupBox, Monitor, Tab, TabBody, Tabs} from "react95";
import {CvTabs} from "../../models";
import {CvWindow} from "./cvWindow";
import {navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import {UrlUtils} from "../../utils/UrlUtils";
import {URLParams} from "../../constants";

export type CurriculumProps = PropsWithChildren<{}>

export const Curriculum: React.FC<CurriculumProps> = (props): React.ReactElement => {
    const [activeTab, setActiveTab] = React.useState<number>(CvTabs.None);

    useEffect(() => {
        const tabIdParamValue = UrlUtils.getUrlParam(URLParams.Curriculum.Tab);
        const tabId = tabIdParamValue === null ? CvTabs.None : Number.parseInt(tabIdParamValue);
        setActiveTab(tabId)
    }, []);

    const onTabChange = (tabId: number) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set(URLParams.Curriculum.Tab, tabId.toString())

        let path;
        switch (tabId) {
            case (CvTabs.None):
                path = './';
                break;
            case (CvTabs.AboutMe):
                path = '/curriculum/about-me';
                break;
            case (CvTabs.Skills):
                path = '/curriculum/skills'
                break
            case (CvTabs.Experience):
                path = '/curriculum/experience';
                break;
            case (CvTabs.Training):
                path = '/curriculum/training';
                break;
            case (CvTabs.Links):
                path = '/curriculum/links';
                break;
            default:
                path = '/curriculum/about-me';
                break;
        }

        navigate(`${path}?${urlParams}`)
    }

    return (
        <CvWindow title="Curriculum">
            <div className="index-component--introduction">
                {/* This is necessary to not have the menu overlap with the monitor.
                                Unsure how to ignore that warning or extend Monitor to support className. */}
                {/* @ts-ignore */}
                <Monitor className='background-element'>
                    <StaticImage class='v-full' src='../../../static/assets/avatar.png' alt='Profile picture'/>
                </Monitor>

                <Tabs value={activeTab} onChange={onTabChange}>
                    <Tab value={CvTabs.AboutMe}>About Me</Tab>
                    <Tab value={CvTabs.Skills}>Skills</Tab>
                    <Tab value={CvTabs.Experience}>Experience</Tab>
                    <Tab value={CvTabs.Training}>Training</Tab>
                    <Tab value={CvTabs.Links}>Links</Tab>
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