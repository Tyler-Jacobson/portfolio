import React from "react";
import { useHistory } from "react-router-dom";

import projects from "./projectData";

export default function Home() {
  const history = useHistory();

  const onClick = (path) => history.push(`projects/${path}`);

  return (
    <div className="app-container">
      <section className="bio">
        <h2>Hi my name is Pablo and I suck at League of Legends</h2>
      </section>
      <section className="projects">
        {projects.map(function (project) {
          return (
            <div className="zoom" onClick={() => onClick(project.id)}>
              <h2>{project.name}</h2>
              <h3>{project.shortDescription}</h3>
              <img src={project.bannerImage} alt={`Banner for ${project.name}`} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
