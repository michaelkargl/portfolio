import React from "react";
import {graphql, PageProps} from "gatsby";
import {SkillsUi} from "../../../components/curriculum/skills/skills-ui";

export const SkillsPage: React.FC<PageProps<Queries.SkillQuery>> = ({data}) => {
    const matter = data?.allMarkdownRemark.edges[0]?.node.frontmatter;
    return <SkillsUi skillsDescription={matter?.skillsDescription ?? '-'}
                     skillsByTime={matter?.skillsByTime ?? '-'}
                     skillsByScore={matter?.skillsByScore ?? '-'}/>;
}

export const skillsQuery = graphql`
query Skill {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "curriculum"}}}) {
    edges {
      node {
        frontmatter {
          skillsDescription
          skillsByTime
          skillsByScore
        }
      }
    }
  }
}
`;


export default SkillsPage