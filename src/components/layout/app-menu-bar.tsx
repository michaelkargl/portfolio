import React, {ReactElement} from "react";
import {AppBar, MenuListItem, Separator, Toolbar} from "react95";
import {MenuButton} from "./menu-button";
import './app-menu-bar.scss'
import {ThemePicker} from "./theme-picker";
import {ALL_THEMES, React95Theme} from "../../utils/React95Theme";


export interface AppMenuBarProps {
    themePicked: (theme: React95Theme) => void;
}

export const AppMenuBar: React.FC<AppMenuBarProps> = (props): ReactElement => {

    // position = relative is important here to have menu and content below stackable instead of the content moving behind the start button
    return (<AppBar position="relative" className="app-bar-component">
        {/* this justifyContent */}
        <Toolbar className='app-bar-component--toolbar' style={{justifyContent: 'space-between'}}>
            <div className='app-bar-component--toolbar-content'>
                <MenuButton>
                    <>
                        <MenuListItem>
                            <span role='img' aria-label='👨‍💻'>👨‍💻</span>
                            Profile
                        </MenuListItem>
                        <MenuListItem>
                            <span role='img' aria-label='📁'>📁</span>
                            &nbsp; My account
                        </MenuListItem>
                        <Separator/>
                        <MenuListItem disabled>
                            <span role='img' aria-label='🔙'>🔙</span>
                            Logout
                        </MenuListItem>
                    </>
                </MenuButton>
            </div>

            {/* @ts-ignore */}
            <ThemePicker className='app-bar-component--toolbar-search'
                         themes={ALL_THEMES}
                         themePicked={props.themePicked}/>
        </Toolbar>
    </AppBar>);
}