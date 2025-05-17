import React, {Component, PropsWithChildren, ReactElement, useEffect} from "react"
import {DesktopIcon, Layout} from "../components";
import './index.scss';
import {User, Mdisp321} from "@react95/icons";


const IndexPage: React.FC = () => {
    return (
        <div className='index-component'>
            <Layout>
                <DesktopIcon displayName='Profile' linkTarget={`/curriculum/about-me${window.location.search}`}>
                    <User variant="32x32_4"/>
                </DesktopIcon>
                <DesktopIcon displayName='Projects' linkTarget={`/projects${window.location.search}`}>
                    <Mdisp321 variant="32x32_4"/>
                </DesktopIcon>
            </Layout>
        </div>
    )
}

export default IndexPage
