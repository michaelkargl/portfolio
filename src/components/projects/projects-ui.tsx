import React, {ReactElement, useEffect} from "react";
import {Layout} from "../../components";
import {Project} from "./models/Project";
import {DesktopWindowUi} from "../desktop-window/desktop-window-ui";
import {TreeView} from "react95";
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

    useEffect(() => {
        setTree([
            mapProjectToTreeElement(props.project)
        ]);
    }, [])

    return (<div className='project-ui-component'>
        <Layout>
            <DesktopWindowUi title='Projects' closeLinkPath={props.closeBtnLinkPath}>
                <TreeView tree={tree}/>
            </DesktopWindowUi>
        </Layout>
    </div>)
}

export default ProjectsUi;