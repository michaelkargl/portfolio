import * as React from "react"
import {graphql, type HeadFC, type PageProps} from "gatsby"
import {Layout} from "../components";
import {Button, GroupBox, Monitor, Toolbar, Window, WindowContent, WindowHeader} from "react95";
import './index.scss';
import {PropsWithChildren, ReactElement} from "react";
import {Remark} from "react-remark";


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

const IndexPage: React.FC<PageProps<Queries.Query>> = ({data}) => {
    const frontmatter = data?.allMarkdownRemark.edges[0].node.frontmatter;
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
                        <GroupBox>
                            <Remark>
                                {frontmatter?.aboutMe ?? '---'}
                            </Remark>
                        </GroupBox>
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
        }
      }
    }
  }
}
`;

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage
