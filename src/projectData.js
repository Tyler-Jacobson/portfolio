import warframepdaPreview from "./assets/warframepda/3-devices-black.png";
import potluckPlannerPreview from "./assets/potluck/3-devices-black.png";
import pomodoroTimerPreview from "./assets/pomodoro-timer/3-devices-black.png";


// technology icon imports
import HTML from "./assets/technologyIcons/HTML.png"
import CSS from "./assets/technologyIcons/CSS.png"
import Bootstrap from "./assets/technologyIcons/Bootstrap.png"
import ResponsiveDesign from "./assets/technologyIcons/ResponsiveDesign.png"
import React from "./assets/technologyIcons/React.png"
import Redux from "./assets/technologyIcons/Redux.png"
import Spring from "./assets/technologyIcons/JavaSpring.png"
import PostgreSQL from "./assets/technologyIcons/PostgreSQL.png"
import PythonRequests from "./assets/technologyIcons/PythonRequests.png"

// Lost Ark Toolkit images
import lostArkToolkit from "./assets/LostArkToolkit/3-devices-black.png"
import collage from "./assets/LostArkToolkit/collage.png"
import BuildsTabSaved from "./assets/LostArkToolkit/BuildsTabSaved.png"
import BuildsTabSearch from "./assets/LostArkToolkit/BuildsTabSearch.png"
import EngravingSearchTab from "./assets/LostArkToolkit/EngravingSearchTab.png"
import TopEngravingsTab from "./assets/LostArkToolkit/TopEngravingsTab.png"

const projects = [
  {
    id: 1,
    name: "Lost Ark Toolkit",
    shortDescription:
    'Open source web app with many active users and contributors',
    description:
    <p>Lost Ark Toolkit is a web app that helps players of the game Lost Ark to understand the value of the in-game items that they obtain. It does this by taking in simple user inputs, and returning a concise list of builds, use cases, and additional stats that would cause the user's items to have increased value. This app has hundreds of daily users and over 40,000 total pageviews, in addition to an active open-source community of awesome contributors.</p>,
    bannerImage: lostArkToolkit,
    images: [lostArkToolkit, collage, BuildsTabSearch, BuildsTabSaved, EngravingSearchTab, TopEngravingsTab],
    siteLink: "https://engravingcalculator.netlify.app/",
    githubRepo: "https://github.com/Tyler-Jacobson/LostArkStoneSearch",
    roles: "Lead Developer",
    technologies: [{"name": "HTML", "image": HTML}, 
                   {"name": "CSS", "image": CSS},
                   {"name": "React", "image": React}, 
                   {"name": "Redux", "image": Redux},
                   {"name": "Bootstrap", "image": Bootstrap}, 
                   {"name": "Responsive Design", "image": ResponsiveDesign}
                  ],
    color: "lightblue",
  },
  {
    id: 2,
    name: "WarframePDA",
    shortDescription:
    'Market Data Aggregator for the popular game Warframe',
    description:
    <>
    <p>WarframePDA is a full stack web application which scrapes data from an online marketplace, and displays it in a way that is easy and accessible for users.</p>
    <br></br>
    <p>Said data is scraped from another online site using a Python script. The data is then sent up to an SQL database using Java Spring Boot API. After which, it is dispatched to the ReactJS front-end application.</p>
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
                   {"name": "Requests (Python)", "image": PythonRequests},
                   {"name": "Responsive Design", "image": ResponsiveDesign}
                  ],
    color: "purple",
  }
  // {
  //   id: 2,
  //   name: "Potluck Planner",
  //   shortDescription:
  //   'Group Project during my studies at Lambda School',
  //   description:
  //   <>
  //   <p>Potluck Planner is a full stack web application which is used to plan potlucks or similar local events.</p>
  //   <br></br>
  //   <p>This was the first major project I worked on, and was only a few weeks after I began studying web development. It was also built with a small team of other students, which I feel I learned a lot from</p>
  //   </>,
  //   bannerImage: potluckPlannerPreview,
  //   images: [potluckPlannerPreview],
  //   siteLink: "https://condescending-snyder-2f6834.netlify.app/index.html",
  //   githubRepo: "https://github.com/BW-Potluck-Planner-2020-08/Marketing",
  //   roles: "Front-End, Designer",
  //   technologies: [{"name": "HTML", "image": HTML}, 
  //                  {"name": "CSS", "image": CSS},
  //                  {"name": "Responsive Design", "image": ResponsiveDesign}
  //                 ],
  //   color: "rose",
  // },
  // {
  //   id: 3,
  //   name: "Pomodoro Timer",
  //   shortDescription:
  //   'A timer designed to help users make use of the Pomodoro Technique',
  //   description:
  //   <>
  //   <p>This app is a timer designed help users work with the time management method known as the Pomodoro Technique.</p>
  //   <br></br>
  //   <p>The Pomodoro Technique is a system that breaks work into intervals of 25 minutes, seperated by short breaks, which is known to drastically increase productivity in certain situations.</p>
  //   </>,
  //   bannerImage: pomodoroTimerPreview,
  //   images: [pomodoroTimerPreview],
  //   siteLink: "https://pomodoro-timer-deploy.netlify.app/",
  //   githubRepo: "https://github.com/Tyler-Jacobson/pomodoro-timer",
  //   roles: "Front-End, Designer",
  //   technologies: [{"name": "HTML", "image": HTML}, 
  //                  {"name": "CSS", "image": CSS},
  //                  {"name": "React", "image": React}
  //                 ],
  //   color: "turquoise",
  // },
  // {
  //   id: 4,
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
  // },
  // {
  //   id: 5,
  //   name: "Twitter Bot",
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
