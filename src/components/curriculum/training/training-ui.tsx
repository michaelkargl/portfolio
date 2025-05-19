import {Curriculum} from "../../curriculum/curriculum";
import {Layout} from "../../layout/layout";
import React from "react";
import {MarkdownContent} from "../../MarkdownContent";

export interface TrainingUiProps {
    training: string;
}

export const TrainingUi: React.FC<TrainingUiProps> = (props) => (
    <div className='training-ui-component'>
        <Layout>
            <Curriculum title='Curriculum / Training'>
                <MarkdownContent>{props.training ?? '-'}</MarkdownContent>
            </Curriculum>
        </Layout>
    </div>
);