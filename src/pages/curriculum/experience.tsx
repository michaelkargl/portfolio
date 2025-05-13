import React from "react";
import {Layout} from "../../components";
import {Curriculum} from "../../components/curriculum/curriculum";
import {graphql, PageProps} from "gatsby";

export const ExperiencePage: React.FC<PageProps<Queries.JobsQuery>> = ({data}) => {
    const jobs = data.allMarkdownRemark.edges.map(e => e.node.frontmatter);
    return (
        <Layout>
            <Curriculum>
                <ul>
                    {jobs.map((job: unknown) => (
                        <li>
                            {job?.name ?? '-'}
                            <ul>
                                <li>{job?.role ?? '-'}</li>
                                <li>{job?.from ?? '-'}</li>
                                <li>{job?.to ?? '-'}</li>
                                <li>{job?.description ?? '-'}</li>
                            </ul>
                        </li>
                    ))}
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