import html from "../assets/html.png";
import css from "../assets//css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
// import scss from "../assets/scss.png";
// import redux from "../assets/redux.png";
import linux from "../assets/linux.png";
import cursor from "../assets/cursor.png";
import docker from "../assets/docker.png";
import go from "../assets/go.png";
import kafka from "../assets/kafka.png";
import mysql from "../assets/mysql.png";
import postman from "../assets/postman.png";
import redis from "../assets/redis.png";
import sql from "../assets/sql.png";
import typescript from "../assets/typescript.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: go,
      title: "Go",
      style: "shadow-cyan-300",
    },
    {
      id: 2,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: sql,
      title: "SQL",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-700",
    },
    {
      id: 6,
      src: redis,
      title: "Redis",
      style: "shadow-red-700",
    },
    {
      id: 7,
      src: kafka,
      title: "Kafka",
      style: "shadow-white",
    },
    {
      id: 8,
      src: reactImage,
      title: "React.js",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: css,
      title: "CSS",
      style: "shadow-cyan-500",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-600",
    },
    {
      id: 12,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-500",
    },
    {
      id: 13,
      src: docker,
      title: "Docker",
      style: "shadow-sky-500",
    },
    {
      id: 14,
      src: postman,
      title: "Postman",
      style: "shadow-orange-700",
    },
    {
      id: 15,
      src: github,
      title: "GitHub",
      style: "shadow-gray-600",
    },
    {
      id: 16,
      src: cursor,
      title: "Cursor",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-96"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 pt-96 flex flex-col
        justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            SKILLS
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8
            text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="image" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
