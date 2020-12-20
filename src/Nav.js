import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-one">
        Pablo Vehahaha
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
