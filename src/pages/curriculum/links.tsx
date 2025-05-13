import React from "react";
import {Layout} from "../../components";
import {Curriculum} from "../../components/curriculum/curriculum";
import {graphql, PageProps} from "gatsby";
import {MarkdownContent} from "../../components/MarkdownContent";

export const LinksPage: React.FC<PageProps<Queries.LinksQuery>> = ({data}) => {
    const frontMatter = data?.allMarkdownRemark.edges[0]?.node.frontmatter;
    return (
        <Layout>
            <Curriculum>
                <MarkdownContent>{frontMatter?.links ?? '-'}</MarkdownContent>
            </Curriculum>
        </Layout>
    );
}

export const linksQuery = graphql`
query Links {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "curriculum"}}}) {
    edges {
      node {
        frontmatter {
          links
        }
      }
    }
  }
}
`;

export default LinksPage