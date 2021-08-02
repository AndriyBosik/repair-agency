import React from "react";
import { NavLink, Route } from "react-router-dom";

export default function LiBasedLink({
    link: {
        to,
        icon,
        title
    },
    className
}) {

    return (
        <Route path={to}>
            {
                ({ match }) => <li className={match ? "active" : ""}>
                    <NavLink to={to} className={className}>
                        {icon && <i className="material-icons left">{icon}</i>} {title}
                    </NavLink>
                </li>
            }
        </Route>
    );
}