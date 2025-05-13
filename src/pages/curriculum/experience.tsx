import React from "react";
import {Layout} from "../../components";
import {Curriculum} from "../../components/curriculum/curriculum";
import {graphql, type PageProps} from "gatsby";
import { DateTime } from "luxon";

export const ExperiencePage: React.FC<PageProps<Queries.JobsQuery>> = ({data}) => {
    const jobs = data.allMarkdownRemark.edges.map(e => e.node.frontmatter);
    console.count('ExperiencePage');
    return (
        <Layout>
            <Curriculum>
                <ul>
                    {jobs.map((job: any, index: number)  => {
                        const from = DateTime.fromISO(job.from)
                        const to = DateTime.fromISO(job.to)
                        const diff = to.diff(from, ['years', 'months']).toObject()
                        return (
                            <li key={`job-${index}`}>
                                <u>{job?.name ?? '-'}</u>
                                <ul>
                                    <li>{job.role}</li>
                                    <li>{`${diff.years} years ${diff.months?.toFixed(2)} months`}</li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </Curriculum>
        </Layout>
    );
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