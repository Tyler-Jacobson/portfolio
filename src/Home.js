import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import image from "./assets/logo512.png";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Project description. Veniam velit modi in rerum officia rerum. Praesentium ipsam repellendus maiores veniam itaque sit et provident. Numquam rerum eaque eos saepe expedita tempora est. Accusamus voluptas minus corporis odit atque veritatis rerum. Aut alias voluptatibus commodi et voluptatibus iste omnis amet. Voluptates qui repudiandae aspernatur excepturi excepturi. Quo facere architecto omnis nisi. Dolorem rerum quibusdam perferendis minus aut.",
    image: image,
  },
];

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
