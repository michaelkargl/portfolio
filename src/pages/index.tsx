import * as React from "react"
import {graphql, type PageProps} from "gatsby"
import {Layout} from "../components";
import './index.scss';
import {Curriculum} from "../components/curriculum/curriculum";


const IndexPage: React.FC<PageProps<Queries.Query>> = ({data}) => {
    const [activeTab, setActiveTab] = React.useState<number>(0);
    const frontMatter = data?.allMarkdownRemark.edges[0]?.node.frontmatter;

    return (
        <div className='index-component'>
            <Layout>
                <Curriculum />
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
              training
              skillsDescription
              skillsByTime
              skillsByScore
              links
            }
          }
        }
      }
    }
`;

export default IndexPage
