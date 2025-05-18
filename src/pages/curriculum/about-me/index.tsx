import React from "react";
import {Layout} from "../../../components";
import {Curriculum} from "../../../components/curriculum/curriculum";
import {MarkdownContent} from "../../../components/MarkdownContent";
import {graphql, type PageProps} from "gatsby"

const AboutMePage: React.FC<PageProps<Queries.AboutMeQuery>> = ({data}) => {
    const frontMatter = data?.allMarkdownRemark.edges[0]?.node.frontmatter;
    return (
        <Layout>
            <Curriculum>
                <>
                    <MarkdownContent>{frontMatter?.aboutMe ?? '---'}</MarkdownContent>
                    <MarkdownContent>{frontMatter?.links ?? '---'}</MarkdownContent>
                </>
            </Curriculum>
        </Layout>
    );
}

export const aboutMeQuery = graphql`
query AboutMe {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "curriculum"}}}) {
    edges {
      node {
        frontmatter {
          aboutMe
          links
        }
      }
    }
  }
}
`;

export default AboutMePage