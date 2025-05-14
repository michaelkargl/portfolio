import React, {PropsWithChildren, ReactElement, useEffect, useState} from "react";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {Frame, styleReset} from 'react95';
import '@fontsource/fusion-pixel-12px-monospaced-sc';
import './layout.scss'
import {AppMenuBar} from "./app-menu-bar";
import {React95Theme} from "../../utils/React95Theme";
import {ClippyProvider} from "@react95/clippy";
import {CvSkillParserContext} from "../../contexts/cv-skill-parser-context";
import {IocModule, IoCSymbol} from "../../ioc";
import {ICvSkillParser, JsonCvSkillParser} from "../../parser";

const container = new IocModule()
    .registerCvSkillParser();

const SKILLS_PARSER = container.resolveRequired<ICvSkillParser>(IoCSymbol.CvSkillParser);

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
    const [themeSelection, setThemeSelection] = useState(React95Theme.Original)
    const [theme, setTheme] = useState<unknown>();

    useEffect(() => {
        console.log("Switching themes...");
        loadThemeAsync(themeSelection);
    }, [themeSelection]);

    async function loadThemeAsync(targetTheme: React95Theme): Promise<void> {
        const themeName = (React95Theme as any)[targetTheme] ?? 'original';
        const react95Theme = await import(`react95/dist/themes/${themeName}`);
        setTheme(react95Theme);
    }

    return (<div className='layout-component'>
        {
            !!theme && <ThemeProvider theme={theme}>
                <ThemedBackground className='themed-background-component'>
                    <GlobalStyles/>
                    <CvSkillParserContext.Provider value={{parser: SKILLS_PARSER}}>
                        <ClippyProvider agentName="Clippy">

                            <div className="main-frame">
                                <header>
                                    <AppMenuBar themePicked={t => setThemeSelection(t)}/>
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
                        </ClippyProvider>
                    </CvSkillParserContext.Provider>
                </ThemedBackground>
            </ThemeProvider>
        }
    </div>);
}