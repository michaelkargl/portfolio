import React, {ReactElement, useEffect} from "react";
import {Layout} from "../../components";
import {Project} from "./models/Project";
import {DesktopWindowUi} from "../desktop-window/desktop-window-ui";
import {Anchor, Table, TableBody, TableDataCell, TableRow, TreeView} from "react95";
import {TreeLeaf} from "react95/dist/TreeView/TreeView";
import './projects-ui.scss';
import Image95 from "../image95/image95";
import {UrlUtils} from "../../utils/UrlUtils";
import {URLParams} from "../../constants/UrlParams";


type ProjectsUiProps = {
    /**
     * One root project that unifies a hierarchy of projects
     * @example
     * Project hierarchy:
     *    o root
     *   / \
     * P1  P2
     *    /  \
     *  P2.1  P2.2
     *        ...
     */
    project: Project,
    closeBtnLinkPath: string
}

/**
 * Maps a project hierarchy into a tree hierarchy useable for react95 treeview
 * @param project the root of the tree
 */
function mapProjectToTreeElement(project: Project): TreeLeaf<string> {
    return {
        id: project.id,
        label: project.name,
        icon: '🗃️',
        items: (project.children ?? []).map(mapProjectToTreeElement)
    };
}

function findProject(project: Project, id: string): Project | null {
    if (project.id === id) {
        return project;
    }

    for (let child of project.children ?? []) {
        const project = findProject(child, id);
        if (project) {
            return project;
        }
    }

    return null;
}

const ProjectDetail: React.FC<{ project: Project }> = ({project}) => (
    <div className='projects-detail-panel'>
        <Table>
            <TableBody>
                <TableRow>
                    <TableDataCell><strong>Name</strong></TableDataCell>
                    <TableDataCell>{project.name}</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell><strong>Description</strong></TableDataCell>
                    <TableDataCell>{project.description}</TableDataCell>
                </TableRow>
                {project.url && (
                    <TableRow>
                        <TableDataCell><strong>Link</strong></TableDataCell>
                        <TableDataCell>
                            <Anchor href={project.url.toString()} target='_blank'>
                                {project.url.toString()}
                            </Anchor>
                        </TableDataCell>
                    </TableRow>
                )}
                {project.image && (
                    <TableRow>
                        <TableDataCell><strong>Image</strong></TableDataCell>
                        <TableDataCell>
                            <Image95 src={project.image} alt={project.name} />
                        </TableDataCell>
                    </TableRow>
                )}
                {project.children?.length > 0 && (
                    <TableRow>
                        <TableDataCell><strong>Sub-projects</strong></TableDataCell>
                        <TableDataCell>
                            {project.children.map(child => child.name).join(', ')}
                        </TableDataCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </div>
);

const ProjectsUi: React.FC<ProjectsUiProps> = (props): ReactElement => {
    const [tree, setTree] = React.useState<TreeLeaf<string>[]>([] as TreeLeaf<string>[]);
    const [project, setProject] = React.useState<Project | null>(null);

    useEffect(() => {
        setTree([
            mapProjectToTreeElement(props.project)
        ]);

        const projectIdParam = UrlUtils.getUrlParam(URLParams.Projects.ProjectId);
        const projectFromUrl = projectIdParam ? findProject(props.project, projectIdParam) : null;
        const initialProject = projectFromUrl ?? props.project.children?.[0] ?? null;

        if (initialProject) {
            setProject(initialProject);
            UrlUtils.replaceUrlParam(URLParams.Projects.ProjectId, initialProject.id);
        }
    }, [])

    const selectProject = (searchRoot: Project, id: string) => {
        const project = findProject(searchRoot, id);
        setProject(project);
        if (project) {
            UrlUtils.replaceUrlParam(URLParams.Projects.ProjectId, project.id);
        }
    }

    return (<div className='project-ui-component'>
        <Layout>
            <DesktopWindowUi
                title='Projects'
                closeLinkPath={props.closeBtnLinkPath}>
                <div className='projects-explorer'>
                    <div className='projects-tree-panel'>
                        <TreeView
                            tree={tree}
                            defaultExpanded={[props.project.id]}
                            onNodeSelect={(_, id) => selectProject(props.project, id)}
                        />
                    </div>
                    {project && <ProjectDetail project={project} />}
                </div>
            </DesktopWindowUi>
        </Layout>
    </div>)
}

export default ProjectsUi;