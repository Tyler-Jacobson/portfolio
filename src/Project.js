import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projectData";

import "./App.scss";



export default function Project(props) {
  let { id } = useParams();


  console.log(projects)
  let currentPage = {};

  currentPage = projects.filter((project) => {
    console.log(project.id, id);
    return project.id == id;
  })
  currentPage = currentPage[0];

  console.log(currentPage)



  return (
    <div className="animated animatedFadeInUp fadeInUp" >
      <p >{currentPage.name}</p>
      <p>{currentPage.description}</p>

      {
        currentPage.images.map((image) => {
          return (
            <img className="animatedimg animatedFadeInUp fadeInUp" src={image} alt={`Details for ${currentPage.name}`} />
          )
        })
      }
      
    </div>
  );

}
