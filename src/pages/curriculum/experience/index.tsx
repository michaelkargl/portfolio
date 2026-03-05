import React from "react";
import {graphql, type PageProps} from "gatsby";
import {DateTime} from "luxon";
import { ExperienceUi } from "../../../components/curriculum/experience/experience-ui";
import { Experience } from "../../../components/curriculum/experience/models";


function mapQueryToExperiences(query: Queries.JobsQuery): Experience[] {
    return query.allMarkdownRemark.edges
        .map(e => e.node.frontmatter)
        .filter(Boolean)
        .map((m: any) => {
                const from = m?.from ? DateTime.fromISO(m.from) : DateTime.now();
                const to = m?.to ? DateTime.fromISO(m.to) : DateTime.now();
                return {
                    from,
                    to,
                    name: m?.name,
                    role: m?.role,
                    description: m?.description,
                } as Experience;
            }
        )
        .sort((a, b) => b.to.toMillis() - a.to.toMillis());
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