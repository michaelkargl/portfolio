import * as React from "react"
import {graphql, type PageProps} from "gatsby"
import {Layout} from "../components";
import {Monitor, Tab, TabBody, Tabs} from "react95";
import './index.scss';
import {Remark} from "react-remark";
import {CvTabs} from "../models";
import {Curriculum} from "../components/curriculum/curriculum";
import { SkillsView } from "../components/curriculum/skills-view";


const IndexPage: React.FC<PageProps<Queries.Query>> = ({data}) => {
    const [activeTab, setActiveTab] = React.useState<number>(0);
    const frontmatter = data?.allMarkdownRemark.edges[0]?.node.frontmatter;

    return (
        <div className='index-component'>
            <Layout>
                <Curriculum title={frontmatter?.title ?? '---'}>
                    <div className="index-component--introduction">
                        {/* This is necessary to not have the menu overlap with the monitor.
                            Unsure how to ignore that warning or extend Monitor to support className. */}
                        {/* @ts-ignore */}
                        <Monitor className='background-element' backgroundStyles={{
                            backgroundImage: 'url("/assets/avatar.png")',
                            backgroundSize: '80%'
                        }}/>
                        <Tabs value={activeTab} onChange={setActiveTab}>
                            <Tab value={CvTabs.AboutMe}>About Me</Tab>
                            <Tab value={CvTabs.Skills}>Skills</Tab>
                            <Tab value={CvTabs.Links}>Links</Tab>
                        </Tabs>
                        <TabBody>

                            {activeTab === CvTabs.AboutMe && (
                                <Remark>{frontmatter?.aboutMe ?? ''}</Remark>
                            )}
                            {activeTab === CvTabs.Skills && (
                                <SkillsView skillsJson={frontmatter?.skills ?? '[]'}/>
                            )}
                            {activeTab === CvTabs.Links && (
                                <Remark>{frontmatter?.links ?? ''}</Remark>
                            )}
                        </TabBody>
                    </div>
                </Curriculum>
            </Layout>
        </div>
    )
}

export const myQuery = graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node{
            frontmatter {
              title
              aboutMe
              skills
              links
            }
          }
        }
      }
    }
`;

export default IndexPage
