import React, {AnchorHTMLAttributes, ImgHTMLAttributes, PropsWithChildren, ReactElement} from 'react';
import {Remark} from "react-remark";
import {graphql, withPrefix} from "gatsby";
import {Anchor} from "react95";

interface MarkdownContentProps {
    children: string;
}

const PrefixedMarkdownImg: React.FC = (props: ImgHTMLAttributes<unknown>): ReactElement => {
    props.src ??= '';
    const takeAsIs = props.src === '' || props.src.startsWith("http") || props.src.startsWith("blob:");
    const url = takeAsIs ? props.src : withPrefix(props.src);
    return (<img {...props} src={url}/>);
};

export const MarkdownContent: React.FC<MarkdownContentProps> = (props) => (
    // allowDangerousHtml is necessary for custom markdown->element mapping to work
    // rehypeReactOptions.component: custom mapping from markdown element -> component
    <div className="markdown-content">
        <Remark
            remarkToRehypeOptions={{allowDangerousHtml: true}}
            rehypeReactOptions={{
                components: {
                    img: (props: ImgHTMLAttributes<unknown>) => (<PrefixedMarkdownImg {...props} />),
                    a: (props: AnchorHTMLAttributes<unknown>) => (
                        <Anchor {...props} target='_blank'>{props.children}</Anchor>)
                }
            }}>{props.children}</Remark>
    </div>
);