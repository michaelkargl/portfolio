import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {Layout} from "../components";
import {Button, Monitor, Toolbar, Window, WindowContent, WindowHeader} from "react95";
import './index.scss';
import {PropsWithChildren, ReactElement} from "react";


const HeaderBar: React.FC = (): ReactElement => (<Toolbar>
    <Button variant='menu' size='sm' disabled>
        File
    </Button>
    <Button variant='menu' size='sm' disabled>
        Edit
    </Button>
    <Button variant='menu' size='sm' disabled>
        Save
    </Button>
</Toolbar>);


type CvWindowProps = PropsWithChildren<{ title: string }>
const CvWindow: React.FC<CvWindowProps> = (props): ReactElement => (
    <Window style={{position: 'relative'}}>
        <WindowHeader><span>{props.title}</span></WindowHeader>
        <HeaderBar/>
        <WindowContent>
            {props.children}
        </WindowContent>
    </Window>
);

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className='index-component'>
            <Layout>
                <CvWindow title="That's Me!">
                    <div className="index-component--introduction">
                        {/* This is necessary to not have the menu overlap with the monitor.
                            Unsure how to ignore that warning or extend Monitor to support className. */}
                        {/* @ts-ignore */}
                        <Monitor className='background-element' backgroundStyles={{
                            backgroundImage: 'url("./avatar.png")',
                            backgroundSize: '80%'
                        }}/>
                        <p>
                            When you set &quot;resizable&quot; prop, there will be drag handle
                            in the bottom right corner (but resizing itself must be handled by
                            you tho!)
                        </p>
                    </div>
                </CvWindow>
            </Layout>
        </div>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
