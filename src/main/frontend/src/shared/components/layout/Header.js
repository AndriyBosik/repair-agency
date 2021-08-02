import React from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../../config/navbar-links";
import LiBasedLink from "./LiBasedLink";

export default function Header({id = "navbar"}) {
    return (
        <div className="navbar-fixed">
            <nav id={id}>
                <div className="nav-wrapper teal lighten-2">
                    <div className="container">
                        <div className="row">
                            <Link to="#" className="brand-logo">Logo</Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                {
                                    navbarLinks.map((link, index) => <LiBasedLink key={index} link={link} />)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}