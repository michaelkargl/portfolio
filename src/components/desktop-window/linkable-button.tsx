import {PropsWithChildren, ReactElement} from "react";
import {Button} from "react95";
import {Link} from "gatsby";
import * as React from "react";

type LinkableButtonProps = PropsWithChildren<{
    linkPath?: string,
    onClick?: () => void
}>

export function LinkableButton(props: LinkableButtonProps): ReactElement {
    const buttonElement = props.onClick
        ? <Button onClick={() => props.onClick!()}>{props.children}</Button>
        : <Button>{props.children}</Button>

    return props.linkPath?.length
        ? <Link to={props.linkPath}>{buttonElement}</Link>
        : <>{buttonElement}</>
}