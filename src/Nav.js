import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";


export default function Nav() {


    return (
        <div className="nav-bar">
            <NavLink to="/" >
                Tyler Jacobson
            </NavLink>
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </div>
        </div>
    )
}