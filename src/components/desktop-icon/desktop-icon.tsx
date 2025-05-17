import React, {PropsWithChildren, ReactElement} from "react";
import {Link} from "gatsby";
import './desktop-icon.scss';

export type DesktopIconProps = PropsWithChildren<{
    displayName: string,
    linkTarget: string
}>;

/**
 * Creates a desktop icon styled link with icon + name
 * @param props
 * @constructor
 * @example
 *      <DesktopIcon displayName='Projects' linkTarget='/projects'>
 *          <Mdisp321 variant="32x32_4"/> <!-- icon -->
 *     </DesktopIcon>
 * @see https://react95.github.io/React95/?path=/story/icon--all
 */
export const DesktopIcon: React.FC<DesktopIconProps> = (props): ReactElement => (
    <div className='desktop-icon-component'>
        <Link className='desktop-icon-link' to={props.linkTarget}>
            <div className="desktop-icon-container">
                <div className='desktop-icon'>{props.children}</div>
                <span className='desktop-icon-name'>{props.displayName}</span>
            </div>
        </Link>
    </div>)