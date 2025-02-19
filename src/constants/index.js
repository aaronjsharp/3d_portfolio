import {
  messenger,
  venmo,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  frontend,
  react,
  wallet,
  solidity,
  webco,
  osu,
  logo,
  tc,
  tt,
  refinedashboard,
  website,
  crowdfunding,
  ashley,
  loren,
  uniswap2,
  discord,
  landingPage,
  financeApp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: frontend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3 Developer",
    icon: wallet,
  },
];

const technologies = [
  /*{
    name: "HTML 5",
    icon: html,
  },*/
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  /*{
    name: "Redux Toolkit",
    icon: redux,
  },*/
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },/*
  {
    name: "figma",
    icon: figma,
  },*/
  /*{
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "Bachelor of Science (B.S.), Computer Science",
    company_name: "Oklahoma State University",
    icon: osu,
    iconBg: "#E6DEDD",
    date: "2002 - 2006",
    points: [
      "Completion of core Computer Science courses such as Data Structures and Algorithms, Operating Systems, Database Management, OOP, and many others.",
      "Collaborated with other students on several dynamic projects that showcased core competency, and the ability to work on a team.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Webco",
    icon: webco,
    iconBg: "#E6DEDD",
    date: "2007 - 2008",
    points: [
      "Developing and maintaining a backend application that captures, analyzes, compresses, and stores machine data using custom SQL queries at very high speeds.",
      "Developing a full stack solution for managing employee schedules and work time, including a kiosk to read proximity cards and take a photo when employees clock in, and updating a backend database based on that interaction.",
      "Participating in code reviews and providing/receiving constructive feedback to other developers in the department.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tetra Tech",
    icon: tt,
    iconBg: "#E6DEDD",
    date: "2009 - 2012",
    points: [
      "Developing and maintaining a full stack application that consumes data from devices in the field and analyzes and presents that data graphically for various civil engineering projects across the state of Oklahoma.",
      "Participating in code reviews and providing/receiving constructive feedback to other developers and engineers in the company.",
    ],
  },
  {
    title: "Program Manager",
    company_name: "Adult and Teen Challenge of OK",
    icon: tc,
    iconBg: "#383E56",
    date: "2012 - 2017",
    points: [
      "Managing 20+ employees and interns on a day to day basis, including hiring, onboarding, scheduling, and budgeting.",
      "Developing and supporting multiple micro-enterprises to support the non-profit and bring in operating revenue.",
      "Build and operate 9 successful Ethereum mining rigs to generate revenue.",
      "Developing and maintaining an application to track and monitor students in the program.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Independent Contractor",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "2018 - Present",
    points: [
      "Providing programming services for full stack development.",
      "Work with and anticipate client needs in order to produce truly remarkable products.",
      "Continue expanding my skillset with contant training in different tech stacks."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aaron created and deployed a stunning website for my side business. He was easy to work with and very professional!",
    name: "Ashley Corral",
    designation: "Program Manager",
    company: "Amazon",
    image: ashley,
  },
  {
    testimonial:
      "Aaron was a joy to work with and was always very professional.",
    name: "Loren Shreffler",
    designation: "Director",
    company: "Adult and Teen Challenge",
    image: loren,
  },
  /*{
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "SaaS Landing Page",
    description:
      "This is a landing page designed to showcase my frontend skills. I used NextJS as the framework and Framer Motion for the animations. You will notice some cool parallax effects on the images, as well as eyecatching scrolling in several sections. The navbar is sticky and blurred as you scroll down the page.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    image: landingPage,
    source_code_link: "https://github.com/aaronjsharp/light_saas_landing_page",
    website_link: "https://aaron-sharp-landing-page.vercel.app/",
  },
  {
    name: "Finance tracking app",
    description:
      "A simple finance app that allows users to track financial transactions and displays the data in a variety of graph formats. Users can also import financial statements from a comma separated file",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: financeApp,
    source_code_link: "https://github.com/aaronjsharp/light_saas_landing_page",
    website_link: "https://aaron-sharp-landing-page.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };