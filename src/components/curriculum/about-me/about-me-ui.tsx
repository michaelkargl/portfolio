import {Curriculum} from "../curriculum";
import {Layout} from "../../layout/layout";
import React from "react";
import {MarkdownContent} from "../../MarkdownContent";

export interface AboutMeUiProps {
    markdownContent: string;
}

export const AboutMeUi: React.FC<AboutMeUiProps> = (props) => (
    <div className='about-me-ui-component'>
        <Layout>
            <Curriculum title='Curriculum / About Me'>
                <MarkdownContent>{props.markdownContent ?? ''}</MarkdownContent>
            </Curriculum>
        </Layout>
    </div>
);