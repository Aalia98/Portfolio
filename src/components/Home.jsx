import Profile from "../assets/4.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"
// import './index.css'
import "../index.css"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-between h-full w-full px-4 md:flex-row" 
        // style={{backgroundColor:'red'}}
        >
            <div className="flex flex-col flex-1 justify-center h-full" >
                <h2 className="sm:text-5xl text-white">
                    I'm
                </h2>
                {/* className=" text-6xl sm:text-9xl font-bold text-white" */}
                <h1  className="name">AALIA</h1>
                <p className="sm:text-4xl text-white">
                    Frontend Developer
                </p>
                <p className="text-gray-400 py-4 max-w-md">
                In my portfolio, you will find a collection of projects that showcase my growth as a frontend developer. I can do multiple frontend websites, designs and analyses at a time. Currently, I love to work on web application using technologies like
          JavaScript, React, Next.js, Tailwind CSS and many more.
                </p>
                <div>
                    <Link 
                    to="portfolio" 
                    smooth 
                    duration={500} 
                    className="group text-white  w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500
                    to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight 
                            size={25}
                            className="ml-1"
                            />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="flex-1">
               <img 
               src={Profile} 
               alt="my_profile"
               className="mx-auto w-2/3 md:w-full rounded-full pl-2"
               /> 
            </div>
        </div>
    </div>
  )
}

export default Home