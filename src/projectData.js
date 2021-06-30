import warframepdaPreview from "./assets/warframepda/3-devices-black.png";

import potluckPlannerPreview from "./assets/potluck/3-devices-black.png";

// technology icon imports
import HTML from "./assets/technologyIcons/HTML.png"
import CSS from "./assets/technologyIcons/CSS.png"
import ResponsiveDesign from "./assets/technologyIcons/ResponsiveDesign.png"
import React from "./assets/technologyIcons/React.png"
import Spring from "./assets/technologyIcons/SpringBoot.png"
import PostgreSQL from "./assets/technologyIcons/PostgreSQL.png"
import PythonRequests from "./assets/technologyIcons/PythonRequests.png"

const projects = [
  {
    id: 1,
    name: "WarframePDA",
    shortDescription:
    'Market Data Aggregator for the popular game Warframe',
    description:
    <>
    <p>WarframePDA is a full stack web application which scrapes data from an online marketplace, and displays it in a way that is easy and accessible for users.</p>
    <br></br>
    <p>Said data is scraped from another online site using a Python script. The data is then sent up to an SQL database using Java Spring Boot API. After which, it is disbatched to the ReactJS front-end application</p>
    </>,
    bannerImage: warframepdaPreview,
    images: [warframepdaPreview],
    siteLink: "https://www.warframepda.com/",
    githubRepo: "https://github.com/Tyler-Jacobson/WarframePDA-Frontend",
    roles: "Front-End, Back-End, Designer",
    technologies: [{"name": "HTML", "image": HTML}, 
                   {"name": "CSS", "image": CSS}, 
                   {"name": "React", "image": React}, 
                   {"name": "PostgreSQL", "image": PostgreSQL},
                   {"name": "Java Spring", "image": Spring},
                   {"name": "Requests (Python)", "image": PythonRequests}
                  
                  ],
    color: "purple",
  },
  {
    id: 2,
    name: "Potluck Planner",
    shortDescription:
    'Group Project during my studies at Lambda School',
    description:
    <>
    <p>Potluck Planner is a full stack web application which is used to plan potlucks or similar local events.</p>
    <br></br>
    <p>This was the first major project I worked on, and was only a few weeks after I began studying web development. It was also built with a small team of other students, which I feel I learned a lot from</p>
    </>,
    bannerImage: potluckPlannerPreview,
    images: [potluckPlannerPreview],
    siteLink: "https://condescending-snyder-2f6834.netlify.app/index.html",
    githubRepo: "https://github.com/BW-Potluck-Planner-2020-08/Marketing",
    roles: "Front-End, Designer",
    technologies: [{"name": "HTML", "image": HTML}, 
                   {"name": "CSS", "image": CSS},
                   {"name": "Responsive Design", "image": ResponsiveDesign}
                  ],
    color: "rose",
  }
  // {
  //   id: 2,
  //   name: "Irispro Script",
  //   shortDescription:
  //   'Script used to test memory usage on the backend of the Irispro web application',
  //   description:
  //   <>
  //   <p>This was a short project I worked on for a startup company called Compellon</p>
  //   <br></br>
  //   <p>The project involved creating scripts to test the entire backend of the company's Irispro software. 
  //     Unfortunately I can't show the github repository, as much of it contains private data related to Compellon</p>
  //   </>,
  //   bannerImage: warframepdaPreview,
  //   images: [warframepdaPreview],
  //   siteLink: "https://www.compellon.com/nextgen-ai",
  //   githubRepo: "",
  //   roles: "Developer",
  //   technologies: [firebase, redux, react, figma],
  //   color: "lightblue",
  // }
];

export default projects;
