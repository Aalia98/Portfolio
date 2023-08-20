import kanban from "../assets/portfolio/kanban.png";
import movies from "../assets/portfolio/movieshub.png"
import todoApp from "../assets/portfolio/todo-app.jpg"
import form from "../assets/portfolio/form.jpg"
import contactUs from "../assets/contact-us.jpg";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: kanban,
            name: "KANBAN TASK MANAGEMENT WEB APP",
            tech: "React, Redux, Tailwind CSS",
            netlify: "https://kanban-aalia98.netlify.app",
            github: "https://github.com/Aalia98/Kanban-Task-Management.git"
        },
        {
            id: 2,
            src: movies,
            name: "MOVIESHUB",
            tech: "React, Redux, SASS",
            netlify: "https://movieshub-aalia98.netlify.app",
            github: "https://github.com/Aalia98/MoviedHub.git"
        },
        {
            id: 3,
            src: todoApp,
            name: "TODO APP",
            tech: "HTML, CSS, JavaScript",
            netlify: "https://todo-app-aalia98.netlify.app/",
            github: "https://github.com/Aalia98/TODO.git"
        },
        {
            id: 4,
            src: form,
            name: "MULTI STEP FORM",
            tech: "HTML, CSS, JavaScript",
            netlify: "https://ms-form.netlify.app",
            github: "https://github.com/Aalia98/multi-step-form.git"
        }
    ]


  return (
    <div 
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen">
        <div className="max-w--screen-lg p-4 pt-96 pb-40 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="py-12">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    PORTFOLIO</p>
                <p className="py-6">Check out some of my work right here . . . . . </p>
            </div>

            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0">
                {
                portfolios.map(({id, src, name, netlify, github, tech}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <h1 className="font-bold text-center text-2xl py-4">{name}</h1>
                    <img 
                    src={src} 
                    alt=""
                    className="duration-200 hover:scale-105 w-full h-80"
                    />
                    <p className="text-center pt-2 font-medium">TECH STACK - {tech}</p>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"><a href={netlify} target="_blank" rel="noreferrer">Demo</a></button>
                        <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"><a href={github} target="_blank" rel="noreferrer">Code</a></button>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio