import * as React from "react";
import {ReactElement} from "react";
import {Button, Toolbar} from "react95";

export const HeaderBarUi: React.FC = (): ReactElement => (
    <Toolbar className='header-bar--component'>
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
);