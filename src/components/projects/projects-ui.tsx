import React, {ReactElement, useEffect} from "react";
import {Layout} from "../../components";
import {Project} from "./models/Project";
import {DesktopWindowUi} from "../desktop-window/desktop-window-ui";
import {TreeView} from "react95";
import {TreeLeaf} from "react95/dist/TreeView/TreeView";
import projects from "../../pages/projects";

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
        label: `Project ${project.name}`,
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

/**
 * @summary The UI component for the Projects page. It allows the browsing of projects in a grouped view. <br/>
 * @props ProjectsUiProps: contains the root project to be rendered.
 * <br/><br/>
 * One root project that unifies a hierarchy of projects
 * <pre>
 *   root
 *    / \
 *   P1  P2
 *      /  \
 *  P2.1  P2.2
 *           \
 *           P2.2.1
 * </pre>
 */
const ProjectsUi: React.FC<ProjectsUiProps> = (props): ReactElement => {
    const [tree, setTree] = React.useState<TreeLeaf<string>[]>([] as TreeLeaf<string>[]);
    const [project, setProject] = React.useState<Project | null>(null);
    const [expandedIds, setExpandedIds] = React.useState<string[]>([]);

    useEffect(() => {
        setTree([
            mapProjectToTreeElement(props.project)
        ]);
    }, [])

    const selectProject = (searchRoot: Project, id: string) => {
        const project = findProject(searchRoot, id);
        setProject(project)
    }

    return (<div className='project-ui-component'>
        <Layout>
            <DesktopWindowUi
                title='Projects'
                closeLinkPath={props.closeBtnLinkPath}>
                <TreeView
                    tree={tree}
                    defaultExpanded={[props.project.id]}
                    onNodeSelect={(_, id) => selectProject(props.project, id)}
                />

                <pre>
                    {JSON.stringify(project, null, 2)}
                </pre>
            </DesktopWindowUi>
        </Layout>
    </div>)
}

export default ProjectsUi;