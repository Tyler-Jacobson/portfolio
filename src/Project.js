import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projectData";
import github from "./assets/Github.svg";
import arrow from "./assets/link-arrow.svg";

import "./App.scss";

export default function Project(props) {
  let { id } = useParams();

  console.log(projects);
  let currentPage = {};

  currentPage = projects.filter((project) => {
    console.log(project.id, id);
    // eslint-disable-next-line eqeqeq
    return parseInt(project.id) === parseInt(id);
  });
  currentPage = currentPage[0];

  console.log(currentPage);

  return (
    <div className="animated animatedFadeInUp fadeInUp project">
      <section className="project-information">
        <div className="project-information-spacer">
          <div className="description-text-outer">
            <div className="description-text">
              <div className="description-text-inner">
                <h2>{currentPage.name}</h2>
                <h3>{currentPage.description}</h3>
              </div>

              <div className="project-links ">
                <a className="project-links-github"
                  href={currentPage.siteLink} target="_blank" rel="noreferrer">
                  <img src={arrow} alt="contact me arrow" />
                  <span>Visit Website</span>
                </a>

                <a
                  className="project-links-github"
                  href={currentPage.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={arrow} alt="contact me arrow" />
                  <p>Github Repository:</p>
                  <img
                    className="githubicon"
                    src={github}
                    alt="Github icon"
                  ></img>
                </a>

                <span></span>
              </div>
            </div>
          </div>
          <div className="technologies-container">
            <p>Roles: {currentPage.roles} </p>
            <div className="technologies">
              {currentPage.technologies.map((icon) => {
                return (
                  <img
                    className="technology-icon"
                    src={icon}
                    alt={`${icon} icon`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="greybackground">
        {currentPage.images.map((image) => {
          return (
            <div className="imgcontainer">
              <img
                className="animatedimg animatedFadeInUp fadeInUp"
                src={image}
                alt={`Details for ${currentPage.name}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
