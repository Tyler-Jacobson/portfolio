import React from "react";
import { useHistory } from "react-router-dom";

import projects from "../projectData";

export default function Home() {
  const history = useHistory();

  const onClick = (path) => {
    window.scrollTo(0, 0);
    history.push(`projects/${path}`);
  };

  return (
    <div className="app-container">
      <section className="bio">
        <div className="titlediv">
          <h1>
            Hey, I'm Tyler,<br></br>
          </h1>
          <h3>A Full Stack Web</h3>
          <h3>Developer</h3>
          <a
            className="contactme"
            href="mailto:TylerJacobsonSE@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>Contact me </span>
          </a>

        </div>

        <div className="shortbio">
          <p>I am a junior web developer with a passion for bringing my projects to life</p>
          <br></br>
          <p>My greatest joys in life are: Coding, and spending time with friends. I'm a quick learner, and I try to lighten the mood no matter where I am.</p>
        </div>
      </section>
      <div className="divborder"></div>
      <div className="homegrey">
        <section className="projects">
          <h2 className="projects-title">My Projects:</h2>
          {projects.map(function (project) {
            return (
              <div
                className={`zoom ${project.color}`}
                onClick={() => onClick(project.id)}
              >
                <div className="zoom-inner">
                  <h2>{project.name}</h2>
                  <h3>{project.shortDescription}</h3>
                  <div className="hometech">
                    {project.technologies.map((tech) => {
                      return <div className="hometech-pointer">
                        <span className="hometech-pointer-text">{tech.name}</span>
                        <img src={tech.image} alt={`${tech.name} icon`} />
                      </div>
                    })}
                  </div>
                </div>
                <img

                  src={project.bannerImage}
                  alt={`Banner for ${project.name}`}
                />
              </div>
            );
          })}
        </section>
      </div>
      <div className="divborder"></div>
    </div>
  );
}
