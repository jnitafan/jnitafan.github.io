import {
  frontend,
  multimedia,
  illustration,
  games,
  html,
  css,
  less,
  javascript,
  git,
  adapt,
  nodejs,
  aws,
  blender,
  photoshop,
  illustrator,
  wordpress,
  tailwind,
  godot,
  unity,
  jira,
  ableton,
  laravel,
  react,
  threejs,
  jquery,
  csharp,
  python,
  php,
  mysql,
  isc,
  sit,
  liminalDanceoff,
  goblinLorde,
  howdowebpages,
  siege3dmaps,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Overview",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Multimedia Development",
    icon: multimedia,
  },
  {
    title: "Freelance Illustration",
    icon: illustration,
  },
  {
    title: "Game Development",
    icon: games,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    proficiency: 1.25,
  },
  {
    name: "CSS 3",
    icon: css,
    proficiency: 1.25,
  },
  {
    name: "LESS",
    icon: less,
    proficiency: 1.25,
  },
  {
    name: "Javascript",
    icon: javascript,
    proficiency: 1.25,
  },
  {
    name: "git",
    icon: git,
    proficiency: 1.25,
  },
  {
    name: "Adapt Learning",
    icon: adapt,
    proficiency: 1.25,
  },
  {
    name: "Node.JS",
    icon: nodejs,
    proficiency: 1.25,
  },
  {
    name: "Amazon Web Services",
    icon: aws,
    proficiency: 1.25,
  },
  {
    name: "Blender",
    icon: blender,
    proficiency: 1.25,
  },
  {
    name: "Photoshop CC",
    icon: photoshop,
    proficiency: 1.25,
  },
  {
    name: "Illustrator CC",
    icon: illustrator,
    proficiency: 1.25,
  },
  {
    name: "WordPress",
    icon: wordpress,
    proficiency: 1.25,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
    proficiency: 1.25,
  },
  {
    name: "Godot",
    icon: godot,
    proficiency: 1.25,
  },
  {
    name: "Unity",
    icon: unity,
    proficiency: 1.25,
  },
  {
    name: "Jira",
    icon: jira,
    proficiency: 0.75,
  },
  {
    name: "Ableton Live",
    icon: ableton,
    proficiency: 0.75,
  },
  {
    name: "Laravel",
    icon: laravel,
    proficiency: 0.75,
  },
  {
    name: "React",
    icon: react,
    proficiency: 0.75,
  },
  {
    name: "Three.JS",
    icon: threejs,
    proficiency: 0.75,
  },
  {
    name: "jQuery",
    icon: jquery,
    proficiency: 0.75,
  },
  {
    name: "C#",
    icon: csharp,
    proficiency: 0.75,
  },
  {
    name: "Python",
    icon: python,
    proficiency: 0.75,
  },
  {
    name: "PHP",
    icon: php,
    proficiency: 0.25,
  },
  {
    name: "MySQL",
    icon: mysql,
    proficiency: 0.25,
  },
];

const projects = [
  {
    name: "Siege 3D Maps",
    description:
      "A real-time planning tool that enables users to collaboratively upload, share, and like 3D schematics, all synchronized via a cloud-based backend.",
    tags: [
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "NextJS",
        color: "white-text-gradient",
      },
      {
        name: "yJS",
        color: "yellow-text-gradient",
      },
    ],
    image: siege3dmaps,
  },
  {
    name: "How Do Webpages Work?",
    description:
      "An interactive site designed to teach core internet and web technologies, with a focus on the OSI model and network protocol layers.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "white-text-gradient",
      },
      {
        name: "SCSS",
        color: "red-text-gradient",
      },
    ],
    image: howdowebpages,
  },
  {
    name: "Didasko ISC",
    description:
      "ISC or Industry Short Courses was a secure e-commerce application storefront built with Laravel with the intention of selling short courses internationally. Styled with Tailwind.",
    tags: [
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: isc,
  },
  {
    name: "SIT Training Packages",
    description:
      "SIT Training Packages are condensed e-learning web applications designed with a desktop/tablet first approach. Working with a team, this was my first foray into the world of web applications.",
    tags: [
      {
        name: "Adapt",
        color: "blue-text-gradient",
      },
      {
        name: "Gulp.js",
        color: "red-text-gradient",
      },
      {
        name: "LESS",
        color: "blue-text-gradient",
      },
    ],
    image: sit,
  },
  {
    name: "Liminal Danceoff",
    description:
      "Liminal Danceoff is a VR experience provided to Liminal that featured robots you could dance along with. Created in Unity with Unity's XR",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "orange-text-gradient",
      },
      {
        name: "Oculus API",
        color: "white-text-gradient",
      },
    ],
    image: liminalDanceoff,
  },
  {
    name: "Goblin Lorde",
    description:
      "Goblin Lorde was a quick game created for a Game Jam in under 2 weeks. Created with Godot, Blender, Asperite and lots of time pressure.",
    tags: [
      {
        name: "Godot",
        color: "blue-text-gradient",
      },
      {
        name: "Asperite",
        color: "white-text-gradient",
      },
    ],
    image: goblinLorde,
  },
];

export { services, technologies, projects };
