import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";


import projects from "./projectData"


export default function Home() {
    const history = useHistory();

    const onClick = (path, projectInfo) => history.push({pathname: `projects/${path}`, state: projectInfo});

  return (
    <div>
      <section className="bio">
        <h2>Hi my name is Pablo and I suck at League of Legends</h2>
      </section>
      <section className="projects">
        {projects.map(function (project) {
          return (
            <div onClick={() => onClick(project.id, project)}>
                <h2>{project.name}</h2>
            </div>
          );
        })}
      </section>
    </div>
  );
}
