import {PropsWithChildren, ReactElement} from "react";
import * as React from "react";
import {Button, Window, WindowContent, WindowHeader} from "react95";
import {HeaderBarUi} from "./header-bar-ui";
import './desktop-window-ui.scss'
import {Link} from "gatsby";
import {LinkableButton} from "./linkable-button";

type DesktopWindowUiProps = PropsWithChildren<{
    title: string,
    closeLinkPath?: string
}>

/**
 * @param props
 *   Displays a close button if a link path is given.
 * @constructor
 * @example
 *  <DesktopWindowUi title='Window 1' closeLinkPath='/'> <!-- displays close button -->
 *  <DesktopWindowUi title='Window 2'> <!-- displays no close button -->
 */
export const DesktopWindowUi: React.FC<DesktopWindowUiProps> = (props): ReactElement => (
    <Window className='cv-window--component'>
        <WindowHeader className='window-title'>
            <span>{props.title}</span>
            {props.closeLinkPath && (<LinkableButton linkPath={props.closeLinkPath}>
                <span className='close-icon'>X</span>
            </LinkableButton>)}
        </WindowHeader>
        <HeaderBarUi/>
        <WindowContent>
            {props.children}
        </WindowContent>
    </Window>
);