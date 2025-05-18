import React, {ReactElement, useEffect} from "react";
import {Layout} from "../../components";
import {Project} from "./models/Project";
import {DesktopWindowUi} from "../../components/desktop-window/desktop-window-ui";
import {TreeView} from "react95";
import projects from "./index";
import {TreeLeaf} from "react95/dist/TreeView/TreeView";

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
    projects: Project
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


const ProjectsUi: React.FC<ProjectsUiProps> = (props): ReactElement => {
    const [tree, setTree] = React.useState<TreeLeaf<string>[]>([] as TreeLeaf<string>[]);

    useEffect(() => {
        setTree(
            props.projects.map(mapProjectToTreeElement)
        );
    }, [])

    return (<div className='project-ui-component'>
        <Layout>
            <DesktopWindowUi title='Projects'>
                <TreeView tree={tree}/>
            </DesktopWindowUi>
        </Layout>
    </div>)
}

export default ProjectsUi;