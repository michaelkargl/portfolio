import React, {ReactElement} from "react";
import {AppBar, MenuListItem, Separator, TextInput, Toolbar} from "react95";
import {MenuButton} from "./menu-button";



export const AppMenuBar: React.FC = (): ReactElement => {
    // position = relative is important here to have menu and content below stackable instead of the content moving behind the start button
    return (<AppBar position="relative" className="app-menu-bar">
        <Toolbar style={{justifyContent: 'space-between'}}>
            <div style={{position: 'relative', display: 'inline-block'}}>
                <MenuButton>
                    <>
                        <MenuListItem>
                            <span role='img' aria-label='👨‍💻'>👨‍💻</span>
                            Profile
                        </MenuListItem>
                        <MenuListItem>
                            <span role='img' aria-label='📁'>📁</span>
                            My account
                        </MenuListItem>
                        <Separator/>
                        <MenuListItem disabled>
                            <span role='img' aria-label='🔙'>🔙</span>
                            Logout
                        </MenuListItem>
                    </>
                </MenuButton>
            </div>

            <TextInput placeholder='Search...' width={150} disabled={true} />
        </Toolbar>
    </AppBar>);
}