import {PropsWithChildren, ReactElement} from "react";
import * as React from "react";
import {Window, WindowContent, WindowHeader} from "react95";
import { HeaderBar } from "./header-bar";

type CvWindowProps = PropsWithChildren<{ title: string }>
export const CvWindow: React.FC<CvWindowProps> = (props): ReactElement => (
    <Window style={{position: 'relative'}}>
        <WindowHeader><span>{props.title}</span></WindowHeader>
        <HeaderBar/>
        <WindowContent>
            {props.children}
        </WindowContent>
    </Window>
);