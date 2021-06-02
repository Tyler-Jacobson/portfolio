import sitepreview from "./assets/Slackerpreviews.png";
import firebase from "./assets/Firebase.svg"
import redux from "./assets/Redux.svg"
import react from "./assets/React2svg.svg"
import figma from "./assets/Figma.svg"
import materialui from "./assets/MaterialUI.svg"

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
    bannerImage: sitepreview,
    images: [sitepreview],
    siteLink: "https://www.warframepda.com/",
    githubRepo: "https://github.com/Tyler-Jacobson/WarframePDA-Frontend",
    roles: "Front-End, Back-End, Designer",
    technologies: [firebase, redux, react, figma, materialui],
    color: "purple",
  },
  {
    id: 2,
    name: "Irispro Script",
    shortDescription:
    'Script used to test memory usage on the backend of the Irispro web application',
    description:
    <>
    <p>This was a short project I worked on for a startup company called Compellon</p>
    <br></br>
    <p>The project involved creating scripts to test the entire backend of the company's Irispro software. 
      Unfortunately I can't show the github repository, as much of it contains private data related to Compellon</p>
    </>,
    bannerImage: sitepreview,
    images: [sitepreview],
    siteLink: "https://www.compellon.com/nextgen-ai",
    githubRepo: "",
    roles: "Developer, QA",
    technologies: [firebase, redux, react, figma],
    color: "lightblue",
  },
];

export default projects;
