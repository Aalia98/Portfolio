import kanban from "../assets/portfolio/kanban.png";
import movies from "../assets/portfolio/movieshub.png";
import todoApp from "../assets/portfolio/todo-app.jpg";
import form from "../assets/portfolio/form.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: kanban,
      name: "KANBAN TASK MANAGEMENT WEB APP",
      tech: "React, Redux, Tailwind CSS",
      netlify: "https://kanban-aalia98.netlify.app",
      github: "https://github.com/Aalia98/Kanban-Task-Management.git",
    },
    {
      id: 2,
      src: movies,
      name: "MOVIESHUB",
      tech: "React, Redux, SASS",
      netlify: "https://movieshub-aalia98.netlify.app",
      github: "https://github.com/Aalia98/MoviedHub.git",
    },
    {
      id: 3,
      src: todoApp,
      name: "TODO APP",
      tech: "HTML, CSS, JavaScript",
      netlify: "https://todo-app-aalia98.netlify.app/",
      github: "https://github.com/Aalia98/TODO.git",
    },
    {
      id: 4,
      src: form,
      name: "MULTI STEP FORM",
      tech: "HTML, CSS, JavaScript",
      netlify: "https://ms-form.netlify.app",
      github: "https://github.com/Aalia98/multi-step-form.git",
    },
  ];

  const backendProjects = [
    {
      name: "E-commerce Backend",
      tech: "Go, MySQL, Redis, Kafka",
      description: "An e-commerce API learning project with JWT authentication, admin routes, product filtering, a Redis cart and Kafka order events.",
      github: "https://github.com/Aalia98/Scalable_E-commerce_System",
    },
    {
      name: "Task Management API",
      tech: "Go, MySQL",
      description: "A single-user REST API for creating, listing, updating and deleting tasks. Built with Go's standard library and MySQL.",
      github: "https://github.com/Aalia98/Task-Management-App",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800
      w-full min-h-screen text-white mx-auto"
    >
      <div
        className="w-full sm:w-4/5 px-6 sm:px-8 md:px-4
        py-16 sm:py-20 md:py-24
        mx-auto flex flex-col justify-center"
      >
        {/* Heading */}
        <div className="py-8 sm:py-10">
          <p
            className="text-3xl sm:text-4xl font-bold inline
            border-b-4 border-gray-500"
          >
            PORTFOLIO
          </p>

          <p className="py-5 sm:py-6 text-sm sm:text-base text-gray-300">
            Check out some of my work right here...
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-6">Frontend</h3>
        {/* Portfolio Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {portfolios.map(({ id, src, name, netlify, github, tech }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600
                rounded-lg overflow-hidden
                hover:shadow-xl duration-300"
            >
              {/* Project Name */}
              <h1
                className="font-bold text-center
                  text-lg sm:text-xl py-4 px-2
                  min-h-[72px] flex items-center justify-center"
              >
                {name}
              </h1>

              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={name}
                  className="duration-300 hover:scale-105
                    w-full h-52 sm:h-56 md:h-60
                    object-cover"
                />
              </div>

              {/* Tech Stack */}
              <p
                className="text-center pt-4 px-2
                  text-sm sm:text-base font-medium"
              >
                TECH STACK - {tech}
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-2 px-3 pb-4">
                <a
                  href={netlify}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 text-center px-4 py-2
                    duration-200 hover:scale-105
                    rounded-md bg-gray-700 hover:bg-gray-600"
                >
                  Demo
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 text-center px-4 py-2
                    duration-200 hover:scale-105
                    rounded-md bg-gray-700 hover:bg-gray-600"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold mb-2">Backend</h3>
          <p className="text-gray-300 text-sm mb-6">Go API projects with source code and local setup notes. No live demos linked.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {backendProjects.map(({ name, tech, description, github }) => (
              <article key={name} className="border border-gray-600 rounded-lg p-6 flex flex-col bg-gray-900/40">
                <p className="text-xs tracking-widest uppercase text-cyan-300 mb-3">Backend API</p>
                <h4 className="text-xl font-bold mb-3">{name}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
                <p className="text-sm font-medium mb-6">{tech}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a href={github} target="_blank" rel="noreferrer" className="text-center px-4 py-3 rounded-md bg-gray-700 hover:bg-gray-600" aria-label={`Source code for ${name}`}>Code</a>
                  <a href={`${github}/blob/master/README.md`} target="_blank" rel="noreferrer" className="text-center px-4 py-3 rounded-md border border-gray-500 hover:bg-gray-700" aria-label={`README and setup for ${name}`}>README / Setup</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;