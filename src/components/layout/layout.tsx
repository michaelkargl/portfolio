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

function getUrlParam(name: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function setUrlParam(name: string, value: string) {
    const urlParams = new URLSearchParams(window.location.search);
    const currentValue = getUrlParam(name)
    if (value !== currentValue) {
        urlParams.set(name, value);
        window.location.search = urlParams.toString();
    }
}

export const Layout: React.FC<PropsWithChildren<{}>> = (props): ReactElement => {
    const [react95Theme, setReact95Theme] = useState<any>(undefined)

    useEffect(() => {
        const loadThemeAsync = async () => {
            const themeSelection = getUrlParam("theme") ?? React95Theme.Original
            const theme = await importReact95ThemeAsync(themeSelection);
            setReact95Theme(theme)
        }

        loadThemeAsync().then(r => console.debug('Loaded react 95 theme', r));
    }, []);

    function setThemeUrlParam(themeName: string): void {
        if (react95Theme === getUrlParam("theme")) {
            return
        }
        setUrlParam("theme", themeName);
    }

    async function importReact95ThemeAsync(targetTheme: string): Promise<void> {
        const themeName = (React95Theme as any)[targetTheme] ?? 'original';
        const imported = await import(`react95/dist/themes/${themeName}`);
        return imported;
    }

    return (<div className='layout-component'>
        {
            !!react95Theme && <ThemeProvider theme={react95Theme}>
                <ThemedBackground className='themed-background-component'>
                    <GlobalStyles/>
                    <CvSkillParserContext.Provider value={{parser: SKILLS_PARSER}}>
                        <ClippyProvider agentName="Clippy">

                            <div className="main-frame">
                                <header>
                                    <AppMenuBar themePicked={t => setThemeUrlParam(t)}/>
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