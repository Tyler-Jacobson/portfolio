import sitepreview from "./assets/Slackerpreviews.png";
import firebase from "./assets/Firebase.svg"
import redux from "./assets/Redux.svg"
import react from "./assets/React2svg.svg"
import figma from "./assets/Figma.svg"
import materialui from "./assets/MaterialUI.svg"

const projects = [
  {
    id: 1,
    name: "Slacker Clone",
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
    roles: "Front-End, Back-End and Designer",
    technologies: [firebase, react, figma, materialui],
    color: "purple",
  },
  // {
  //   id: 2,
  //   name: "Project 2",
  //   shortDescription:
  //     "Veniam velit modi in rerum officia rerum. Praesentium ipsam repellendus maiores veniam itaque sit et provident. Numquam rerum eaque eos saepe expedita",
  //   description:
  //   <>
  //   <p>Project Veniam velit modi in rerum officia rerum. Praesentium ipsam repellendus maiores veniam</p>
  //   <p>et provident. Numquam rerum eaque eos saepe expedita tempora est.</p>
  //   <br></br>
  //   <p>Accusamus voluptas minus corporisodit atque veritatis rerum. Aut alias voluptatibus commodi et voluptatibus iste omnis ame</p>
  //   </>,    bannerImage: image,
  //   images: [example1, image],
  //   siteLink: "https://wunnle.dev/",
  //   githubRepo: "https://github.com/pvahanian/mySlackerClone",
  //   roles: "Front-End, Back-End, Design and Development",
  //   technologies: [firebase, react, figma],
  //   color: "rose",
  // },
  {
    id: 2,
    name: "Slacker Clone",
    shortDescription:
    'RealTime Messaging application for use in blah blah blah blah',
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
    roles: "Front-End, Back-End and Designer",
    technologies: [firebase, redux, react, figma, materialui],
    color: "lightblue",
  },
];

export default projects;
