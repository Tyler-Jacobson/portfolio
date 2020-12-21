import React from "react";
import { useHistory } from "react-router-dom";

import projects from "./projectData";

export default function Home() {
  const history = useHistory();

  const onClick = (path) => {
    window.scrollTo(0, 0)
    history.push(`projects/${path}`)
  } 

  return (
    <div className="app-container">
      <section className="bio">
        <h1 className="heytitle">Hey, I'm Pablo,<br></br></h1>
        <h3>web developer </h3>
      <div className="shortbio">
        Former Financial Advisor looking to break into the tech world.
      </div>
      </section>
      <section className="projects">
        {projects.map(function (project) {
          return (
            <div className={`zoom ${project.color}`} onClick={() => onClick (project.id)}>
              <div>
              <h2>{project.name}</h2>
              <h3>{project.shortDescription}</h3>
              <div className="whitetech">
              <img src={project.technologies[0]} alt="tech"/>
              <img src={project.technologies[1]} alt="tech"/>
              <img src={project.technologies[2]} alt="tech"/>
              <img src={project.technologies[3]} alt="tech"/>
              <img src={project.technologies[4]} alt="tech"/>
              </div>
              </div>
              <img src={project.bannerImage} alt={`Banner for ${project.name}`} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
