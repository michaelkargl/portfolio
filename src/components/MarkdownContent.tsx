import React, {PropsWithChildren} from 'react';
import {Remark} from "react-remark";

interface MarkdownContentProps {
    children: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = (props) => (
    <div className="markdown-content">
        <Remark>{props.children}</Remark>
    </div>
);