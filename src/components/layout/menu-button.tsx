import React, {PropsWithChildren, ReactElement, useState} from "react";
import {Button, MenuList} from "react95";
import './menu-button.scss';

type MenuButtonProps = PropsWithChildren<{}>;

/**
 * Renders an expandable menu button. Clicking it will show a list of @ref MenuListItem's passed as children
 * @param props A list of MenuListItems. You can use <></> to pass them as one.
 */
export const MenuButton: React.FC<MenuButtonProps> = (props: MenuButtonProps): ReactElement => {
    const [open, setOpen] = useState(false);

    return (<div className='menu-button-component'>
        <Button className='menu-button-component--button'
                onClick={() => setOpen(!open)} active={open}>
            Start
        </Button>

        {open && (
            <MenuList className='menu-button-component--menu-list'
                      onClick={() => setOpen(false)}>
                {props.children}
            </MenuList>
        )}
        
    </div>)
}