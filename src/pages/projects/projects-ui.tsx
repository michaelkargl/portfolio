import React, {ReactElement} from "react";
import {Layout} from "../../components";
import {Project} from "./models/Project";
import {DesktopWindowUi} from "../../components/desktop-window/desktop-window-ui";


type ProjectsUiProps = {
    projects: Project[]
}

const ProjectsUi: React.FC<ProjectsUiProps> = (props): ReactElement => {
    return (<div className='project-ui-component'>
        <Layout>
            <DesktopWindowUi title='Projects'>
                <ul>
                    {props.projects.map((project: Project, index: number) => (
                        <li key={index}>{project.name}</li>
                    ))}
                </ul>
            </DesktopWindowUi>
        </Layout>
    </div>)
}

export default ProjectsUi;