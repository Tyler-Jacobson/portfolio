import React from "react";
import { NavLink,useHistory } from "react-router-dom";
import Title from './assets/Title.png'
import "./App.scss";

export default function Nav() {
  const history = useHistory()
  return (
    <div className="nav-bar">
      {/* <NavLink to="/" className="nav-one"></NavLink> */}
        <img className="logo" src={Title} alt="Pablo's Logo" onClick={()=>history.push("/")}/>
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
