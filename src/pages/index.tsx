import React from "react"
import {DesktopIcon, Layout} from "../components";
import './index.scss';
import {User, Mdisp321} from "@react95/icons";
import {UrlUtils} from "../utils/UrlUtils";

const IndexPage: React.FC = () => {
    const searchParams = UrlUtils.getSearchParams()
    return (
        <div className='index-component'>
            <Layout>
                <DesktopIcon displayName='Profile' linkTarget={`/curriculum/about-me?${searchParams}`}>
                    <User variant="32x32_4"/>
                </DesktopIcon>
                <DesktopIcon displayName='Projects' linkTarget={`/projects?${searchParams}`}>
                    <Mdisp321 variant="32x32_4"/>
                </DesktopIcon>
            </Layout>
        </div>
    )
}

export default IndexPage
