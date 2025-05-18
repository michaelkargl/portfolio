import React from "react";
import {Layout} from "../../../components";
import {Curriculum} from "../../../components/curriculum/curriculum";
import {graphql, type PageProps} from "gatsby";
import {DateTime} from "luxon";
import {ExperienceUi} from "./experience-ui";
import {Experience} from "./models";


function mapQueryToExperiences(query: Queries.JobsQuery): Experience[] {
    return query.allMarkdownRemark.edges
        .map(e => e.node.frontmatter)
        .filter(Boolean)
        .map((m: any) => ({
                from: DateTime.fromISO(m?.from ?? DateTime.now()),
                to: DateTime.fromISO(m?.to ?? DateTime.now()),
                name: m?.name,
                role: m?.role,
                description: m?.description,
            } as Experience)
        );
}

export const ExperiencePage: React.FC<PageProps<Queries.JobsQuery>> = ({data}) => {
    const jobs = mapQueryToExperiences(data)
    return <ExperienceUi experiences={jobs}/>;
}

export const jobsQuery = graphql`
query Jobs {
  allMarkdownRemark(filter: {frontmatter: {type: { eq: "job"}}}) {
    edges {
      node {
        frontmatter {
          name
          role
          from
          to
          description
        }
      }
    }
  }
}
`;

export default ExperiencePage