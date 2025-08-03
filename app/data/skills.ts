import {
    SiExpress,
    SiPrisma,
    SiNextdotjs,
  } from "react-icons/si";
  import {
    FramerMotionIcon,
    ReactRouterDomIcon,
} from "../components/icons";
  import { type SkillsShowcaseProps } from "../components/skill/Skill";
  
  // Languages
import HtmlSvg from "../../public/icons/html.svg";
import CssSvg from "../../public/icons/css.svg";

import JavascriptSvg from "../../public/icons/javascript.svg";
import TypescriptSvg from "../../public/icons/typescript.svg";

  
  // Libraries
import ReactjsSvg from "../../public/icons/reactjs.svg";

import ReduxSvg from "../../public/icons/redux.svg";
import TailwindcssSvg from "../../public/icons/tailwindcss.svg";

import ViteSvg from "../../public/icons/vite.svg";
  
  // Backend
import NodejsSvg from "../../public/icons/nodejs.svg";
  
  // Database and ORMS
import MongoDBSvg from "../../public/icons/mongodb.svg";
import PostgressSvg from "../../public/icons/postgresql.svg";
  
  // Tools and Tech
import GitSvg from "../../public/icons/git.svg";
import DockerSvg from "../../public/icons/docker.svg";
import AwsSvg from "../../public/icons/aws.svg";
import PostmanSvg from "../../public/icons/postman.svg";
  
  export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
    {
      sectionName: "Languages",
      skills: [
        {
          name: "HTML",
          icon: HtmlSvg,
        },
        {
          name: "CSS",
                icon: CssSvg,
        },
        
        {
          name: "Javascript",
          icon: JavascriptSvg,
        },
        {
          name: "Typescript",
          icon: TypescriptSvg,
        },

      ],
    },
    {
      sectionName: "Libraries and Frameworks",
      skills: [
        {
          name: "Reactjs",
          icon: ReactjsSvg,
        },
        {
          name: "Nextjs",
          icon: SiNextdotjs,
        },

        {
          name: "React Router Dom",
          icon: ReactRouterDomIcon,
        },
        {
          name: "Redux",
          icon: ReduxSvg,
        },
        {
          name: "Tailwindcss",
          icon: TailwindcssSvg,
        },

        {
          name: "Framer motion",
          icon: FramerMotionIcon,
        },
        {
          name: "Vite",
          icon: ViteSvg,
        },

      ],
    },
    {
      sectionName: "Backend",
      skills: [
        {
          name: "Nodejs",
          icon: NodejsSvg,
        },
        {
          name: "Express",
          icon: SiExpress,
        },

      ],
    },
    {
      sectionName: "Databases and ORMs",
      skills: [
        {
          name: "MongoDB",
          icon: MongoDBSvg,
        },
        {
          name: "Postgress",
          icon: PostgressSvg,
        },
        {
          name: "Prisma",
          icon: SiPrisma,
        },
      ],
    },
    {
      sectionName: "Tools and Technologies",
      skills: [
        {
          name: "Git",
          icon: GitSvg,
        },
        {
          name: "Docker",
          icon: DockerSvg,
        },
        {
          name: "AWS",
          icon: AwsSvg,
        },
        {
          name: "Postman",
          icon: PostmanSvg,
        },
      ],
    },
  ];
