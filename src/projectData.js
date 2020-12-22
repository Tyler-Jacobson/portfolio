import sitepreview from "./assets/Slackerpreviews.png";
import firebase from "./assets/Firebase.svg"
import redux from "./assets/Redux.svg"
import react from "./assets/React2svg.svg"
import figma from "./assets/Figma.svg"
import materialui from "./assets/MaterialUI.svg"
import ewb from "./assets/211.png"

const projects = [
  {
    id: 1,
    name: "S</>acker",
    shortDescription:
    'RealTime Messaging application',
    description:
    <>
    <p>Project Veniam velit modi in rerum officia rerum. Praesentium ipsam repellendus maiores veniam</p>
    <p>et provident. Numquam rerum eaque eos saepe expedita tempora est.</p>
    <br></br>
    <p>Accusamus voluptas minus corporisodit atque veritatis rerum. Aut alias voluptatibus commodi et voluptatibus iste omnis ame</p>
    </>,
    bannerImage: sitepreview,
    images: [sitepreview],
    siteLink: "https://myslackerclone.vercel.app/",
    githubRepo: "https://github.com/pvahanian/mySlackerClone",
    roles: <p>Front-End, Back-End and Designer</p>,
    technologies: [firebase, react, figma, materialui],
    color: "purple",
  },
  {
    id: 2,
    name: "EWB 211",
    shortDescription:
    'Update the UX design and Accessability',
    description:
    <>
    <p>Project Veniam velit modi in rerum officia rerum. Praesentium ipsam repellendus maiores veniam</p>
    <p>et provident. Numquam rerum eaque eos saepe expedita tempora est.</p>
    <br></br>
    <p>Accusamus voluptas minus corporisodit atque veritatis rerum. Aut alias voluptatibus commodi et voluptatibus iste omnis ame</p>
    </>,
    bannerImage: ewb,
    images: [ewb],
    siteLink: "https://elastic-engelbart-deec3b.netlify.app/",
    githubRepo: "https://github.com/ewb-psu/shelter-project",
    roles: <p>UX and Front-End</p>,
    technologies: [redux, react, figma,materialui],
    color: "lightblue",
  },
];

export default projects;
