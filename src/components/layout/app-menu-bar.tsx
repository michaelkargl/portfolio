import React, {ReactElement, useState} from "react";
import {AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar} from "react95";

export const AppMenuBar: React.FC = (): ReactElement => {
    const [open, setOpen] = useState(false);

    return (<AppBar className="app-menu-bar">
        <Toolbar style={{justifyContent: 'space-between'}}>
            <div style={{position: 'relative', display: 'inline-block'}}>
                <Button
                    onClick={() => setOpen(!open)}
                    active={open}
                    style={{fontWeight: 'bold'}}
                >
                    Start
                </Button>
                {open && (
                    <MenuList
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '100%'
                        }}
                        onClick={() => setOpen(false)}
                    >
                        <MenuListItem>
                                    <span role='img' aria-label='👨‍💻'>
                                      👨‍💻
                                    </span>
                            Profile
                        </MenuListItem>
                        <MenuListItem>
                                    <span role='img' aria-label='📁'>
                                      📁
                                    </span>
                            My account
                        </MenuListItem>
                        <Separator/>
                        <MenuListItem disabled>
                                    <span role='img' aria-label='🔙'>
                                      🔙
                                    </span>
                            Logout
                        </MenuListItem>
                    </MenuList>
                )}
            </div>

            <TextInput placeholder='Search...' width={150}/>
        </Toolbar>
    </AppBar>);
}