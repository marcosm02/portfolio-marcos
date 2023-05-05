import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { DiDjango } from "react-icons/di";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "React",
    img: FaReact,
  },
  { title: "Styled Components", img: SiStyledcomponents },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  { title: "Django | Django REST Framework", img: DiDjango },
];
