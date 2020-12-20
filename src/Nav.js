import React from "react";
import { NavLink } from "react-router-dom";
import Title from './assets/Title.png'
export default function Nav() {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-one">
        <img src={Title} />
      </NavLink>
      <a
        className="nav-two"
        href="mailto:Pablo@Arbys.com"
        target="_blank"
        rel="noreferrer"
      >
        Contact
      </a>
    </div>
  );
}
