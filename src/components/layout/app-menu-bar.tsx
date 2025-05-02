import React, {ReactElement} from "react";
import {AppBar, MenuListItem, Separator, TextInput, Toolbar} from "react95";
import {MenuButton} from "./menu-button";
import './app-menu-bar.scss'

export const AppMenuBar: React.FC = (): ReactElement => {
    // position = relative is important here to have menu and content below stackable instead of the content moving behind the start button
    return (<AppBar position="relative" className="app-bar-component">
        <Toolbar className='app-bar--toolbar' style={{justifyContent: 'space-between'}}>
            <div className='app-bar--toolbar--content'>
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
            <TextInput className='app-bar-component--toolbar-search' placeholder='Search...' disabled={true}/>
        </Toolbar>
    </AppBar>);
}