import React from "react";

/**
 * @summary stub <Link> tags with standard <a>
 */
const Link = ({to, children, ...rest}) => {
    return <a href={to} {...rest}>{children}</a>;
};

export {
    Link
};