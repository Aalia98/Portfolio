import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const links = ["home", "about", "portfolio", "skills", "contact"];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-[#0b0d1a]/90 px-5 text-white backdrop-blur sm:px-10">
      <h1 className="text-xl font-bold">Aalia Amin</h1>
      <ul className="hidden items-center md:flex">
        {links.map((l) => (
          <li key={l} className="cursor-pointer px-4 font-medium capitalize text-[#9aa0c3] duration-200 hover:text-white">
            <Link to={l} smooth duration={500}>{l}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="z-[60] cursor-pointer text-[#9aa0c3] md:hidden">
        {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>
      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0b0d1a] text-[#c3c8ff]">
          {links.map((l) => (
            <li key={l} className="cursor-pointer py-6 text-3xl capitalize">
              <Link onClick={() => setNav(false)} to={l} smooth duration={500}>{l}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
