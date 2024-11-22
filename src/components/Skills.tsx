import { FaCss3Alt, FaDocker, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {
  SiJavascript,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-col ">
      <h2 className="text-3xl font-bold mb-3 py-4 self-center">
        Mes Compétences
      </h2>

      <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-6 sm:!justify-items-stretch justify-items-center sm:self-center self-normal">
        <div className="flex flex-col items-center">
          <FaHtml5 size={60} color="#E34F26" />
          <span className="mt-2">HTML5</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt size={60} color="#1572B6" />
          <span className="mt-2">CSS3</span>
        </div>
        <div className="flex flex-col items-center">
          <SiJavascript size={60} color="#F7DF1E" />
          <span className="mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript size={60} color="#3178C6" />
          <span className="mt-2">TypeScript</span>
        </div>
        <div className="flex flex-col items-center">
          <FaReact size={60} color="#61DAFB" />
          <span className="mt-2">React.js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs size={60} color="#000000" />
          <span className="mt-2">Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss size={60} color="#06B6D4" />
          <span className="mt-2">Tailwind</span>
        </div>
        <div className="flex flex-col items-center">
          <FaSass size={60} color="#CC6699" />
          <span className="mt-2">Sass</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./figma.png"
            alt="Figma"
            className="w-16 h-16 object-cover"
          />
          <span className="mt-2">Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <SiRedux size={60} color="#764ABC" className="mb-1" />
          <span className="mt-2">Redux.js</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./zustand.svg"
            alt="Zustand"
            className="w-16 h-16 object-cover"
          />
          <span className="mt-2">Zustand</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPostman size={60} color="#FF6C37" className="mb-1" />
          <span className="mt-2">Postman</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDocker size={60} color="#2496ED" className="mb-1" />
          <span className="mt-2">Docker</span>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoGithub size={60} color="#181717" className="mb-1" />
          <span className="mt-2">Git</span>
        </div>
      </div>
    </div>
  );
}
