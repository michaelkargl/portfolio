import {Curriculum} from "../curriculum";
import {Layout} from "../../layout/layout";
import React from "react";
import {MarkdownContent} from "../../MarkdownContent";

export interface LinksUiProps {
    markdownContent: string;
}

export const LinksUi: React.FC<LinksUiProps> = (props) => (
    <div className='links-ui-component'>
        <Layout>
            <Curriculum title='Curriculum / Links'>
                <MarkdownContent>{props.markdownContent ?? ''}</MarkdownContent>
            </Curriculum>
        </Layout>
    </div>
);