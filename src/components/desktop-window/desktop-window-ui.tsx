import {PropsWithChildren, ReactElement} from "react";
import * as React from "react";
import {Window, WindowContent, WindowHeader} from "react95";
import { HeaderBarUi } from "./header-bar-ui";

type CvWindowProps = PropsWithChildren<{ title: string }>
export const DesktopWindowUi: React.FC<CvWindowProps> = (props): ReactElement => (
    <Window className='cv-window--component'>
        <WindowHeader><span>{props.title}</span></WindowHeader>
        <HeaderBarUi/>
        <WindowContent>
            {props.children}
        </WindowContent>
    </Window>
);