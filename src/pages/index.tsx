import * as React from "react"
import {PropsWithChildren, ReactElement} from "react"
import {graphql, type HeadFC, type PageProps} from "gatsby"
import {Layout} from "../components";
import {Button, Monitor, ProgressBar, Tab, TabBody, Tabs, Toolbar, Window, WindowContent, WindowHeader} from "react95";
import './index.scss';
import {Remark} from "react-remark";
import {CvTabs} from "../models";

const IndexPage: React.FC<PageProps<Queries.Query>> = ({data}) => {
    const frontmatter = data?.allMarkdownRemark.edges[0].node.frontmatter;
    const skills: CvSkill[] = ((
        frontmatter?.skills && JSON.parse(frontmatter.skills) || []
    ) as CvSkill[]).sort((last, current) => last.percent - current.percent);
    const [activeTab, setActiveTab] = React.useState<number>(0);


    return (
        <div className='index-component'>
            <Layout>
                <CvWindow title={frontmatter?.title ?? '---'}>
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
                                <ul>
                                    {
                                        skills?.map((skill, index) => (
                                            <div key={index}>
                                                <label>{skill.name}</label>
                                                <ProgressBar variant="default" value={skill.percent} key={index}
                                                             hideValue={true}/>
                                            </div>
                                        ))
                                    }
                                </ul>
                            )}
                            {activeTab === CvTabs.Links && (
                                <Remark>{frontmatter?.links ?? ''}</Remark>
                            )}
                        </TabBody>
                    </div>
                </CvWindow>
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


const HeaderBar: React.FC = (): ReactElement => (<Toolbar>
    <Button variant='menu' size='sm' disabled>
        File
    </Button>
    <Button variant='menu' size='sm' disabled>
        Edit
    </Button>
    <Button variant='menu' size='sm' disabled>
        Save
    </Button>
</Toolbar>);


type CvWindowProps = PropsWithChildren<{ title: string }>
const CvWindow: React.FC<CvWindowProps> = (props): ReactElement => (
    <Window style={{position: 'relative'}}>
        <WindowHeader><span>{props.title}</span></WindowHeader>
        <HeaderBar/>
        <WindowContent>
            {props.children}
        </WindowContent>
    </Window>
);

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage
