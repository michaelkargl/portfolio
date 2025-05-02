import React, {PropsWithChildren, ReactElement, useState} from "react";
import {Button, MenuList} from "react95";

type MenuButtonProps = PropsWithChildren<{}>;

/**
 * Renders an expandable menu button. Clicking it will show a list of @ref MenuListItem's passed as children
 * @param props A list of MenuListItems. You can use <></> to pass them as one.
 */
export const MenuButton: React.FC<MenuButtonProps> = (props: MenuButtonProps): ReactElement => {
    const [open, setOpen] = useState(false);

    return (<>
        <Button onClick={() => setOpen(!open)} active={open} style={{fontWeight: 'bold'}}> Start </Button>
        {open && (
            <MenuList
                style={{
                    position: 'absolute',
                    left: '0',
                    top: '100%',
                    zIndex: 9999,
                }}
                onClick={() => setOpen(false)}
            >
                {props.children}
            </MenuList>
        )}
    </>)
}