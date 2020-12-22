import React from "react";
import { useHistory } from "react-router-dom";

import projects from "./projectData";

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
            Hey, I'm Pablo,<br></br>
          </h1>
          <h3>Web Developer</h3>
          <a 
            className="contactme"
            href="mailto:pablo.vahanian@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>Contact me </span>
          </a>

        </div>

        <div className="shortbio">
         <p> I like to working with <strong className="bold">React, Redux, Material-UI</strong> and 
        <strong className="bold"> Node.js</strong>.
        </p>
        <br></br>
        <p>Coding is a never ending journey and I currently enjoy learning new technologies like
        <strong className="bold"> Firebase, Python </strong> and <strong className="bold">Next.js</strong>.  Check out my projects below. 
        </p>
        </div>
      </section>
      <div className="divborder"></div>
      <div className="homegrey">
      <section className="projects">
        <h2 className="projects-title">Projects</h2>
        {projects.map(function (project) {
          return (
            <div
              className={`zoom ${project.color}`}
              onClick={() => onClick(project.id)}
            >
              <div className="zoom-inner">
                <h2>{project.name}</h2>
                <h3>{project.shortDescription}</h3>
                <div className="whitetech">
                  {project.technologies.map((tech) => {
                    return <img src={tech} alt="technology icon" />;
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
