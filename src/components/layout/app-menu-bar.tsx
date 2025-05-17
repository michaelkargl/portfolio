import React, {ReactElement} from "react";
import {AppBar, MenuListItem, Separator, Toolbar} from "react95";
import {MenuButton} from "./menu-button";
import {ThemePicker} from "./theme-picker";
import {ALL_THEMES, React95Theme} from "../../utils/React95Theme";
import {Link} from "gatsby";
import {Desktop, User, Gcdef100} from "@react95/icons";
import './app-menu-bar.scss'
import {UrlUtils} from "../../utils";


export interface AppMenuBarProps {
    themePicked: (theme: React95Theme) => void;
}

export const AppMenuBar: React.FC<AppMenuBarProps> = (props): ReactElement => {
    const searchParams = UrlUtils.getSearchParams()
    // position = relative is important here to have menu and content below stackable instead of the content moving behind the start button
    return (<AppBar position="relative" className="app-bar-component">
        {/* this justifyContent */}
        <Toolbar className='app-bar-component--toolbar' style={{justifyContent: 'space-between'}}>
            <div className='app-bar-component--toolbar-content'>
                <MenuButton>
                    <>
                        <Link to={`/?${searchParams}`}>
                            <MenuListItem>
                                <span role='img' aria-label='desktop'><Desktop variant="16x16_4"/></span>
                                Home
                            </MenuListItem>
                        </Link>
                        <Link to={`/curriculum/about-me?${searchParams}`}>
                            <MenuListItem>
                                <span role='img' aria-label='curriculum'><User variant='16x16_4'/></span>
                                &nbsp; About me
                            </MenuListItem>
                        </Link>
                        <Link to={`/projects?${searchParams}`}>
                            <MenuListItem>
                                <span role='img' aria-label='projects'>
                                    <Gcdef100 variant="16x16_4"/>
                                    &nbsp; Projects
                                </span>
                            </MenuListItem>
                        </Link>
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