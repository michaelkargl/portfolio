import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {Layout} from "../components";
import {Button, Frame, Monitor, Toolbar, Window, WindowContent, WindowHeader} from "react95";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className='index-component'>
            <Layout>
                <Window style={{position: 'relative'}}>
                    <WindowHeader >
                        <span>Thats Me!</span>
                    </WindowHeader>
                    <Toolbar>
                        <Button variant='menu' size='sm' disabled>
                            File
                        </Button>
                        <Button variant='menu' size='sm' disabled>
                            Edit
                        </Button>
                        <Button variant='menu' size='sm' disabled>
                            Save
                        </Button>
                    </Toolbar>
                    <WindowContent>
                        <Monitor backgroundStyles={{ backgroundImage: 'url("./avatar.png")', backgroundSize: '80%'}}></Monitor>
                        <p>
                            When you set &quot;resizable&quot; prop, there will be drag handle
                            in the bottom right corner (but resizing itself must be handled by
                            you tho!)
                        </p>
                    </WindowContent>
                </Window>
            </Layout>
        </div>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
