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

  const fullStack = [
    {
      name: "Portfolio + Go Contact API",
      tech: "React, Tailwind CSS, Go",
      description: "This site: a React frontend with a Go backend that validates contact-form messages, rate-limits spam and notifies me by email.",
      live: "https://portfolio-aalia98.netlify.app",
      frontend: "https://github.com/Aalia98/Portfolio",
      backend: "https://github.com/Aalia98/portfolio-contact-api",
    },
  ];

  const Title = ({ children, sub }) => (
    <div className="mb-6 mt-14 first:mt-0">
      <h3 className="text-2xl font-bold">{children}</h3>
      <p className="mt-1 text-sm text-[#8a90b8]">{sub}</p>
    </div>
  );
  const btn = "rounded-lg bg-[#232a7a] px-4 py-2 text-center text-sm hover:bg-[#2d36a0] duration-200";
  const ghost = "rounded-lg border border-[#3a418a] px-4 py-2 text-center text-sm hover:bg-[#1b2050] duration-200";

  return (
    <div name="portfolio" className="min-h-screen w-full bg-[#0b0d1a] text-[#e8eaf6]">
      <div className="mx-auto max-w-screen-xl px-6 py-20 sm:px-8">
        <div className="pb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Portfolio</h2>
          <p className="mt-2 text-[#8a90b8]">Backend, frontend and full stack work</p>
        </div>

        <Title sub="Go APIs with source code and setup notes. No live demos linked.">Backend</Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {backendProjects.map(({ name, tech, description, github }) => (
            <article key={name} className="flex flex-col rounded-2xl border border-[#262c55] bg-[#141830] p-6">
              <span className="mb-3 w-fit rounded-full bg-[#232a7a] px-3 py-1 text-xs">Backend API</span>
              <h4 className="mb-2 text-xl font-bold">{name}</h4>
              <p className="mb-4 text-sm leading-relaxed text-[#a9aed0]">{description}</p>
              <p className="mb-5 text-sm font-medium text-[#7c8cff]">{tech}</p>
              <div className="mt-auto flex flex-wrap gap-3">
                <a href={github} target="_blank" rel="noreferrer" className={btn}>Code</a>
                <a href={`${github}/blob/master/README.md`} target="_blank" rel="noreferrer" className={ghost}>README / Setup</a>
              </div>
            </article>
          ))}
        </div>

        <Title sub="React and JavaScript apps with live demos.">Frontend</Title>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map(({ id, src, name, netlify, github, tech }) => (
            <div key={id} className="overflow-hidden rounded-2xl border border-[#262c55] bg-[#141830]">
              <div className="overflow-hidden">
                <img src={src} alt={name} className="h-48 w-full object-cover duration-300 hover:scale-105" />
              </div>
              <div className="p-5">
                <h4 className="min-h-[3rem] font-bold">{name}</h4>
                <p className="mb-4 mt-1 text-sm text-[#7c8cff]">{tech}</p>
                <div className="flex gap-3">
                  <a href={netlify} target="_blank" rel="noreferrer" className={`${btn} w-1/2`}>Demo</a>
                  <a href={github} target="_blank" rel="noreferrer" className={`${ghost} w-1/2`}>Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Title sub="Frontend and backend built together.">Full Stack</Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fullStack.map(({ name, tech, description, live, frontend, backend }) => (
            <article key={name} className="flex flex-col rounded-2xl border border-[#262c55] bg-gradient-to-br from-[#141830] to-[#1a1f4a] p-6">
              <span className="mb-3 w-fit rounded-full bg-[#0e5e8a] px-3 py-1 text-xs">Full stack</span>
              <h4 className="mb-2 text-xl font-bold">{name}</h4>
              <p className="mb-4 text-sm leading-relaxed text-[#a9aed0]">{description}</p>
              <p className="mb-5 text-sm font-medium text-[#7c8cff]">{tech}</p>
              <div className="mt-auto flex flex-wrap gap-3">
                <a href={live} target="_blank" rel="noreferrer" className={btn}>Live site</a>
                <a href={frontend} target="_blank" rel="noreferrer" className={ghost}>Frontend code</a>
                <a href={backend} target="_blank" rel="noreferrer" className={ghost}>Backend code</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
