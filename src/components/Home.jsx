import Profile from "../assets/home-white.svg";
import { Link } from "react-scroll";
import WhatsAppButton from "./WhatsAppButton";

const stats = [
  ["2+", "years building"],
  ["20+", "live games"],
  ["10K+", "concurrent users"],
];

const Home = () => (
  <div name="home" className="min-h-screen w-full bg-[#0b0d1a] pt-16 text-[#e8eaf6]"
    style={{ backgroundImage: "radial-gradient(700px 380px at 80% 20%, rgba(59,47,209,.35), transparent)" }}>
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-screen-lg flex-col-reverse items-start justify-center gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between md:gap-16">
      <div className="flex-1">
        <p className="text-xs tracking-[0.25em] text-[#7c8cff]">FULL STACK SOFTWARE ENGINEER</p>
        <h1 className="my-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          I build{" "}
          <span className="bg-gradient-to-r from-[#7c8cff] to-[#38e1ff] bg-clip-text text-transparent">complete products</span>
          , front to back.
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-[#a9aed0] sm:text-lg">
          Around 2 years building Go backends and React + TypeScript frontends.
          Available now for full-time roles and freelance projects.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="portfolio" smooth duration={500}
            className="cursor-pointer rounded-xl bg-gradient-to-r from-[#6d7bff] to-[#38c8ff] px-6 py-3 font-semibold text-white hover:scale-105 duration-200">
            View portfolio
          </Link>
          <WhatsAppButton />
        </div>
        <div className="mt-8 flex gap-8">
          {stats.map(([a, b]) => (
            <div key={b}><b className="block text-2xl sm:text-3xl">{a}</b><span className="text-xs text-[#8a90b8]">{b}</span></div>
          ))}
        </div>
      </div>
      <img src={Profile} alt="Aalia Amin"
        className="h-48 w-48 rounded-full border-4 border-[#6d7bff] object-cover shadow-[0_0_80px_rgba(91,107,255,.4)] sm:h-72 sm:w-72 md:h-80 md:w-80" />
    </div>
  </div>
);

export default Home;
