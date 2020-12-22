import React from "react";
import { useHistory } from "react-router-dom";
// import Title from './assets/Title.png'
import Title from "./assets/NewIcon2.svg";
import linkedIn from "./assets/Linkedin.svg";
import Mail from "./assets/Mail.svg";
import Resume from "./assets/Resume.svg";
import "./App.scss";

export default function Nav() {
  const history = useHistory();
  return (
    <div className="nav-bar">
      <img
        className="logo"
        src={Title}
        alt="Pablo's Logo"
        onClick={() => history.push("/")}
      />
      <div className="nav-icons">
        <a
          href="mailto:pablo.vahanian@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Mail} alt="Mail Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-vahanian/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="Linkedin Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-vahanian/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Resume} alt="Resume Icon" />
        </a>
      </div>
    </div>
  );
}
