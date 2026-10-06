// import Profile from "../assets/4.jpg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
// // import './index.css'
// import "../index.css";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div
//         className="max-w-screen-lg mx-auto flex flex-col items-center
//         justify-between h-full w-full px-4 md:flex-row"
//         // style={{backgroundColor:'red'}}
//       >
//         <div className="flex flex-col flex-1 justify-center h-full">
//           <h2 className="sm:text-5xl text-white">I'm</h2>
//           {/* className=" text-6xl sm:text-9xl font-bold text-white" */}
//           <h1 className="name">AALIA</h1>
//           <p className="sm:text-4xl text-white">Software Engineer</p>
//           <p className="text-gray-400 py-4 max-w-md">
//             In my portfolio, you will find a collection of projects that
//             showcase my growth as a Software Engineer. I loves building scalable
//             backend systems and full-stack applications. I work primarily with
//             <b> Go</b>, <b>React</b>, <b>TypeScript</b>, <b>Kafka</b>,{" "}
//             <b>Redis</b>, and <b>MySQL</b>. I'm passionate about distributed
//             systems, performance optimization, concurrency, and creating
//             software that is reliable, scalable, and built to solve real
//             problems. Welcome to my portfolio — feel free to explore my work and
//             projects!
//           </p>
//           <div>
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white  w-fit px-6 py-3 my-2
//                     flex items-center rounded-md bg-gradient-to-r from-cyan-500
//                     to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div className="flex-1">
//           <img
//             src={Profile}
//             alt="my_profile"
//             className="mx-auto w-2/3 md:w-full rounded-full pl-2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import Profile from "../assets/4.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../index.css";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 sm: mt-5"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-center min-h-screen w-full px-6 py-12
        md:flex-row md:justify-between md:px-4 md:py-2"
      >
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full md:flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">
            I'm
          </h2>

          <h1 className="name text-5xl sm:text-6xl md:text-8xl">
            AALIA
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl text-white">
            Software Engineer
          </p>

          <p className="text-gray-400 py-4 max-w-md text-sm sm:text-base leading-relaxed">
            In my portfolio, you will find a collection of projects that
            showcase my growth as a Software Engineer. I love building scalable
            backend systems and full-stack applications. I work primarily with{" "}
            <b>Go</b>, <b>React</b>, <b>TypeScript</b>, <b>Kafka</b>,{" "}
            <b>Redis</b>, and <b>MySQL</b>. I'm passionate about distributed
            systems, performance optimization, concurrency, and creating
            software that is reliable, scalable, and built to solve real
            problems. Welcome to my portfolio — feel free to explore my work
            and projects!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2
              flex items-center rounded-md bg-gradient-to-r
              from-cyan-500 to-blue-500 cursor-pointer"
            >
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

        {/* Right Section */}
        <div className="w-full md:flex-1 mt-10 md:mt-0">
          <img
            src={Profile}
            alt="my_profile"
            className="mx-auto w-2/3 sm:w-1/2 md:w-full pl-2
            rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
