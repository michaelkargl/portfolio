import React from "react";
import {Layout} from "../../../components";
import {Curriculum} from "../../../components/curriculum/curriculum";
import {graphql, PageProps} from "gatsby";
import {MarkdownContent} from "../../../components/MarkdownContent";

export const TrainingPage: React.FC<PageProps<Queries.TrainingsQuery>> = (props) => {
    const frontMatter = props.data?.allMarkdownRemark.edges[0]?.node.frontmatter;
    return (
        <Layout>
            <Curriculum>
                <MarkdownContent>{frontMatter?.training ?? '-'}</MarkdownContent>
            </Curriculum>
        </Layout>
    );
}

export const trainingsQuery = graphql`
query Trainings {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "curriculum"}}}) {
    edges {
      node {
        frontmatter {
          training
        }
      }
    }
  }
}
`;

export default TrainingPage