import { PageProps } from "gatsby"
import React, {ReactElement} from "react";
import {Layout} from "../../components";

const ProjectsPage: React.FC<PageProps<{}>> = (props): ReactElement => {
    return (<div className='project-page'>
        <Layout>
            Projects
        </Layout>
    </div>)
}

export default ProjectsPage;