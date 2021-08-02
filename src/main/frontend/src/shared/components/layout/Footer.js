import React from "react";
import { Link, NavLink } from "react-router-dom";
import {navbarLinks} from "../../../config/navbar-links";
import LiBasedLink from "./LiBasedLink";

export default function Footer() {
    return (
        <footer className="page-footer teal lighten-2">
            <div className="container">
                <div className="row">
                    <div className="cols12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eveniet illo laudantium nemo nisi placeat quidem temporibus vel? Asperiores deleniti distinctio, dolores eaque earum incidunt itaque iure minus nulla voluptas! Ab accusamus adipisci aperiam assumenda consequatur cum debitis deserunt doloribus fuga in iusto labore maxime, mollitia natus non obcaecati perferendis provident quo ratione recusandae reprehenderit sed sint suscipit ut vel veritatis vitae voluptas! Cupiditate dignissimos doloribus facere, fugit in laudantium natus nobis non possimus quia tempora voluptate. Consequatur deleniti dolores fugiat itaque modi nemo nisi perspiciatis placeat quae repudiandae! Architecto eveniet incidunt, laboriosam molestias perspiciatis sint veritatis voluptatibus? Inventore, mollitia?
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    2021 Copyright Text
                    <Link to="#" className="grey-text text-lighten-4 right">More Links</Link>
                </div>
            </div>
        </footer>
    );
}