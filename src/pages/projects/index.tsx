import {graphql, PageProps} from "gatsby"
import React, {ReactElement, useEffect, useState} from "react";
import {Project} from "../../components/projects/models/Project";
import ProjectsUi from "../../components/projects/projects-ui";

function mapQueryProjectToDomain(project: any): Project {
    // maps the graphql project response to a project entity
    return {
        id: project.id,
        name: project.name,
        description: project.description,
        url: project.url,
        children: []
    }
}

function mapQueryToProjectHierarchy(query: Queries.ProjectsQuery): Project {
    let rootProject: Project = {
        id: 'root',
        name: "Projects",
        description: "Root of all projects",
        children: [],
        url: new URL("http://localhost:8000/projects")
    };

    const projects = query.allMarkdownRemark.edges.map(e => e.node.frontmatter);
    const domainProjectById = new Map<string, Project>(
        projects.map(p => [p!.id!, mapQueryProjectToDomain(p)])
    )

    for (const project of projects) {
        const domainProject = domainProjectById.get(project?.id!)!;
        const parent = domainProjectById.get(project?.parentId!)!;

        if (parent) {
            // has parent => child of parent
            parent.children = [...parent.children, domainProject]
        } else {
            // is root level project => child of root
            rootProject.children = [...rootProject.children, domainProject];
        }
    }

    return rootProject
}

const ProjectsPage: React.FC<PageProps<Queries.ProjectsQuery>> = ({data}): ReactElement => {
    const [project, setProject] = useState<Project>(undefined as unknown as Project);

    useEffect(() => {
        const rootProject = mapQueryToProjectHierarchy(data);
        setProject(rootProject);
    }, []);

    return (<div className='project-page'>
        {project && <ProjectsUi project={project} closeBtnLinkPath='/' />}
    </div>)
}


export const ProjectsQuery = graphql`
query Projects {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        frontmatter {
          id
          name
          url
          description
          parentId
        }
      }
    }
  }
}
`;

export default ProjectsPage;