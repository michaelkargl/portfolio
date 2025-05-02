import React, {PropsWithChildren, ReactElement, useEffect} from "react";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {Frame, styleReset} from 'react95';
import react95Theme from 'react95/dist/themes/eggplant';
import '@fontsource/fusion-pixel-12px-monospaced-sc';
import './layout.scss'
import {AppMenuBar} from "./app-menu-bar";


const GlobalStyles = createGlobalStyle`
    ${styleReset}

    @font-face {
        font-family: 'Fusion Pixel 12px Monospaced SC', sans-serif;
        font-weight: 400;
        font-style: normal
    }

    @font-face {
        font-family: 'Fusion Pixel 12px Monospaced SC', sans-serif;
        font-weight: bold;
        font-style: normal
    }

    body, input, select, textarea {
        font-family: 'Fusion Pixel 12px Monospaced SC', sans-serif;
    }
`;

const ThemedBackground = styled.div`
    background: ${(styling: any) => styling.theme.desktopBackground};
`;

export const Layout: React.FC<PropsWithChildren<{}>> = (props): ReactElement => {
    return (<div className='layout-component'>
        <GlobalStyles/>
        <ThemeProvider theme={react95Theme}>
            <ThemedBackground className='themed-background-component'>
                <div className="main-frame">
                    <header>
                        <AppMenuBar/>
                    </header>
                    <div className='main-content'>
                        <main>
                            {props.children}
                        </main>
                    </div>
                    <footer className='status-bar'>
                        <Frame className='footer-status-bar'>
                            asdf
                        </Frame>
                    </footer>
                </div>
            </ThemedBackground>
        </ThemeProvider>
    </div>);
}