import React from "react";
import {graphql, PageProps} from "gatsby";
import {TrainingUi} from "../../../components/curriculum/training/training-ui";

export const TrainingPage: React.FC<PageProps<Queries.TrainingsQuery>> = (props) => {
    const matter = props.data?.allMarkdownRemark.edges[0]?.node.frontmatter;
    return <TrainingUi training={matter?.training ?? '-'}/>
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