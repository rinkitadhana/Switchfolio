import { BiLogoPostgresql } from "react-icons/bi"
import { FaGithub, FaLinkedinIn, FaPython, FaXTwitter } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { PiFigmaLogoBold } from "react-icons/pi"
import { FaDocker, FaMediumM } from "react-icons/fa"
import { BsFiletypeSql } from "react-icons/bs"

import {
  RiBearSmileLine,
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiRedis,
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
  SiReactquery,
  SiLeetcode,
  SiPrisma,
} from "react-icons/si"
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"

const skills = [
  { id: 1, icon: RiReactjsLine, text: "ReactJs" },
  { id: 2, icon: RiNextjsLine, text: "NextJs" },
  { id: 3, icon: DiJavascript, text: "JavaScript" },
  { id: 4, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 6, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 7, icon: SiReactquery, text: "Tanstack Query" },
  { id: 8, icon: RiBearSmileLine, text: "Zustand" },
  { id: 9, icon: SiShadcnui, text: "shadcn" },
  { id: 10, icon: TbBrandFramerMotion, text: "Motion" },
  { id: 11, icon: SiGreensock, text: "GSAP" },
  { id: 12, icon: IoLogoNodejs, text: "NodeJS" },
  { id: 13, icon: SiExpress, text: "ExpressJS" },
  { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 15, icon: SiMongodb, text: "MongoDB" },
  { id: 16, icon: SiRedis, text: "Redis" },
  { id: 17, icon: SiPrisma, text: "Prisma" },
  { id: 18, icon: SiPostman, text: "Postman" },
  { id: 19, icon: FaGitAlt, text: "Git" },
  { id: 20, icon: FaGithub, text: "GitHub" },
  { id: 21, icon: FaPython, text: "Python" },
  { id: 22, icon: RiJavaLine, text: "Java" },
  { id: 23, icon: TbHexagonLetterC, text: "C" },
  { id: 24, icon: TbBrandCpp, text: "C++" },
  { id: 25, icon: BsFiletypeSql, text: "SQL" },
  { id: 26, icon: FaDocker, text: "Docker" },
  { id: 27, icon: VscTerminalLinux, text: "Linux" },
  { id: 28, icon: SiVercel, text: "Vercel" },
  { id: 29, icon: PiFigmaLogoBold, text: "Figma" },
]
const projects = [
  {
    id: 1,
    img: "./assets/Images/project/DailyCrime.png",
    title: "Daily Crimes",
    status: true,
    content:
      "Created a newspaper-inspired website combining classic layouts with modern design for an authentic feel. Covered the rise in crime in India, offering insightful and engaging news stories on this pressing issue. Added animations and moving visuals to deliver a dynamic and immersive user experience.",
    url: "https://thedailycrimes.vercel.app/",
    github: "https://github.com/rinkitadhana/The-Daily-Crimes",
    skill: ["React", "TypeScript", "Tailwind", "GSAP", "Motion"],
    preview: "./assets/Videos/preview/dailycrimes.mp4",
  },
  {
    id: 2,
    img: "./assets/Images/project/Anecdot.png",
    title: "Anecdot.",
    status: true,
    content:
      "Built a full-stack blogging platform with profile management and CRUD functionality for blogs. Integrated JWT authentication, real-time updates, and Redis caching for security and performance. Designed a sleek, user-friendly interface for an engaging experience.",
    url: "https://anecblog.vercel.app/",
    github: "https://github.com/rinkitadhana/Anecdot",
    skill: [
      "React",
      "Tailwind",
      "ShanCN",
      "Motion",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
    ],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 3,
    img: "./assets/Images/project/cuez.png",
    title: "Cuez",
    status: false,
    content:
      "Cuez is a social media platform designed specifically for programmers. It offers multiple features tailored to developers, including the ability to upload projects, ask doubts, and explore job opportunities. With a community-driven approach, Cuez helps programmers connect, learn, and grow together.",
    github: "https://github.com/rinkitadhana/Cuez",
    url: "https://cuez.vercel.app/",
    skill: ["Next", "Tailwind", "Motion", "Tanstack Query", "Zustand", "Axios", "Express", "MongoDB", "Redis"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 4,
    img: "./assets/Images/project/apple.jpg",
    title: "Apple Clone",
    status: true,
    content:
      "Built a replica website of the iPhone 15 Pro, featuring interactive 3D models and dynamic animations for a lifelike experience. Designed seamless interactions to closely mimic the official Apple product page. Delivered a polished, engaging user experience with meticulous attention to detail and functionality.",
    url: "https://therinkit-appleclone.vercel.app/",
    github: "https://github.com/rinkitadhana/iphone15-Apple-Clone",
    skill: ["React", "Tailwind", "GSAP", "Motion", "ThreeJS"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 5,
    img: "./assets/Images/project/jwt.jpg",
    title: "JWT-auth",
    status: true,
    content:
      "A ready-to-use JWT authentication API built with Express, TypeScript, and MongoDB. It includes secure password hashing and robust authentication measures. Perfect for integrating secure user authentication into your projects effortlessly",
    github: "https://github.com/rinkitadhana/JWT-auth",
    skill: ["TypeScript", "Node", "Express", "JWT", "MongoDB"],
  },
  {
    id: 6,
    img: "./assets/Images/project/brain-rot.png",
    title: "Brain-Rot Converter",
    status: true,
    content:
      "Created a fun and interactive project designed to convert normal text into GenZ or brainrot slang with just one click. This tool ensures everyone can stay up-to-date with the latest trends and internet language. A playful solution to keep no one feeling left behind in the ever-evolving digital culture.",
    url: "https://brainrot-language-converter.vercel.app/",
    github: "https://github.com/rinkitadhana/BrainRot-Language-Converter",
    skill: ["React", "Tailwind", "Gemini api"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 7,
    img: "./assets/Images/project/TweetSpree.png",
    title: "TweetSpree",
    status: true,
    content:
      "A project to boost your Twitter engagement by generating a variety of programming-related content, including fun questions, creative tweets, and useful advice. This tool helps you connect with your audience by providing fresh and engaging posts tailored to the programming community.",
    url: "https://therinkit-tweetspree.vercel.app/",
    github: "https://github.com/rinkitadhana/TweetSpree",
    skill: ["React", "Tailwind"],
    preview: "./assets/Videos/preview/tweetspree.mp4",
  },
  {
    id: 8,
    img: "./assets/Images/project/port.jpeg",
    title: "Old Portfolio",
    status: true,
    content:
      "My old portfolio combines a sleek, minimalistic design with powerful features, including About, Projects, and Blog sections. It offers seamless routing for smooth navigation and a theme switcher for personalized customization. A simple yet functional showcase of my work and creativity.",
    url: "https://therinkit.online",
    github: "https://github.com/rinkitadhana/My-Portfolio-Website",
    skill: ["React", "Tailwind", "Motion", "GSAP"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 9,
    img: "./assets/Images/project/promptopia.svg",
    title: "Promptopia",
    status: true,
    content:
      "A full-stack Next.js project for sharing your AI prompts and using others' shared prompts, featuring Google authentication, profile management, and options to like, edit, and delete prompts. It also includes advanced search and filtering capabilities to easily find and manage prompts.",
    url: "https://therinkit-promptopia.vercel.app",
    github: "https://github.com/rinkitadhana/Promptopia",
    skill: ["NextJS", "Tailwind", "MongoDB"],
    preview: "./assets/Videos/preview/promptopia.mp4",
  },
  {
    id: 10,
    img: "./assets/Images/project/LinkIt.png",
    title: "LinkIt",
    status: true,
    content:
      "A project that includes all your social media and project links, fully customizable with a simple and easy-to-use interface. It provides a streamlined way to showcase your online presence, allowing you to effortlessly update and manage your profiles.",
    url: "https://therinkit-linkit.vercel.app/",
    github: "https://github.com/rinkitadhana/LinkIt",
    skill: ["React", "Tailwind", "GSAP"],
    preview: "./assets/Videos/preview/linkit.mp4",
  },
  {
    id: 11,
    img: "./assets/Images/project/11Hack.png",
    title: "11Hack",
    status: false,
    content:
      "A full-stack project showcasing the top 11 hackathon ideas from various students, ranked by popularity. This project helps you effectively implement these ideas and improve your chances of winning.",
    skill: ["React", "Tailwind", "Node", "Express", "MongoDB"],
  },
  {
    id: 12,
    img: "./assets/Images/project/snake.jpg",
    title: "Snake Game",
    status: true,
    content:
      "I made this snake game in my first year just for fun. At that time, I was a big Java fan and created this project using Java and JavaFX. This project really helped me deepen my understanding of object-oriented programming.",
    github: "https://github.com/rinkitadhana/SnakeByJava",
    skill: ["Java", "JavaFX"],
  },
  {
    id: 13,
    img: "./assets/Images/project/stopwatch.jpg",
    title: "Stop Watch",
    status: true,
    content:
      "I created this stopwatch to customize its functionality. It was built using only Java and JavaFX and is fully operational. This project helped me enhance my skills in Java programming and GUI design.",
    github: "https://github.com/rinkitadhana/StopWatchByJava",
    skill: ["Java", "JavaFX"],
  },
]

const writings = [
  {
    id: 1,
    img: "./assets/Images/writing/jwt.png",
    head: "JWT Authentication APIs with TypeScript, Node.js, and MongoDB.",
    des: "This blog guides you through building a JWT authentication system using TypeScript, Node.js, Express, and MongoDB. Learn to implement secure authentication, protect routes, and test APIs with Postman.",
    link: "https://medium.com/@rinkitadhana/jwt-authentication-apis-with-typescript-node-js-and-mongodb-b05a8a3cb062",
  },
  {
    id: 2,
    img: "./assets/Images/writing/docker1.png",
    head: "Part 1: Docker with Node.js & Express.js — Basics.",
    des: "This blog is part one of the Docker series, and it will guide you through how to containerize your simple Node.js application at a basic level with some extra CLI commands.",
    link: "https://medium.com/@rinkitadhana/part-1-docker-with-node-js-express-js-basics-06229c95ff7a",
  },
]

const hireText =
  "I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!"

const emailLink =
  "mailto:therinkit@gmail.com?subject=Interested%20in%20Hiring%20You"

const navLinks = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "Medium",
    link: "https://medium.com/@rinkitadhana",
    icon: FaMediumM,
  },
  {
    id: 5,
    name: "LeetCode",
    link: "https://leetcode.com/u/rinkitadhana",
    icon: SiLeetcode,
  },
]

export { projects, writings, emailLink, skills, hireText, navLinks }
