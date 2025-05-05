import {ReactElement} from "react";
import '@christianliebel/paint';
import {Layout} from "../components";
import React from "react";
import './paint.scss';
import {GroupBox, Window, WindowContent, WindowHeader} from "react95";

export default (): ReactElement => {
    // TODO: https://goulet.dev/posts/consuming-web-component-react-typescript/
    return (<div className='paint-component'><Layout>
        <Window className='paint-component--window'>
            <WindowHeader><span>Paint</span></WindowHeader>
            <WindowContent className='paint-component--window-content'>
                <paint-app class='paint'></paint-app>
            </WindowContent>
        </Window>
    </Layout></div>)
}