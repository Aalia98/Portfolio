import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import WhatsAppButton from "./WhatsAppButton";
import { CONTACT_API_URL } from "../lib/config";

const input =
  "w-full rounded-lg border border-[#3a418a] bg-[#ffffff10] p-3 text-white placeholder-[#8a90b8] outline-none focus:border-[#38c8ff] duration-200";

const footerLinks = [
  { name: "LinkedIn", icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/aalia98/" },
  { name: "GitHub", icon: <FaGithub size={20} />, href: "https://github.com/Aalia98" },
  { name: "Email", icon: <HiOutlineMail size={22} />, href: "mailto:aaliaamin98@gmail.com" },
  { name: "Download CV", icon: <BsFillPersonLinesFill size={20} />, href: "/Aalia_Amin_CV.pdf", download: true },
];

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      website: form.website.value, // honeypot, must stay empty
    };
    if (!CONTACT_API_URL) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad status");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div name="contact" className="w-full bg-[#0b0d1a] px-6 pb-8 pt-20 text-[#e8eaf6] sm:px-8 md:px-4">
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-3xl font-bold sm:text-4xl">Contact</h2>
        <p className="mb-10 mt-2 text-[#8a90b8]">Message me directly or send an email</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#262c55] bg-[#141830] p-6">
            <h3 className="mb-2 text-lg font-bold">WhatsApp</h3>
            <p className="mb-5 text-sm text-[#a9aed0]">Fastest way to reach me. Opens WhatsApp with a ready message.</p>
            <WhatsAppButton />
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-[#262c55] bg-[#141830] p-6">
            <h3 className="mb-4 text-lg font-bold">Email form</h3>
            <input name="name" required minLength={2} maxLength={80} placeholder="Your name" className={`${input} mb-3`} />
            <input name="email" type="email" required maxLength={120} placeholder="Your email" className={`${input} mb-3`} />
            <textarea name="message" required minLength={10} maxLength={2000} rows="5" placeholder="Your message" className={`${input} mb-3`} />
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button disabled={status === "sending"} className="w-full rounded-lg bg-gradient-to-r from-[#6d7bff] to-[#38c8ff] py-3 font-semibold text-white hover:scale-[1.02] duration-200 disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "sent" && <p className="mt-3 text-sm text-green-400">Thanks, your message was sent. I will reply soon.</p>}
            {status === "error" && (
              <p className="mt-3 text-sm text-amber-300">Could not send right now. Please use WhatsApp or email me at aaliaamin98@gmail.com.</p>
            )}
          </form>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#232a7a] to-[#0e5e8a] p-8 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
          <p className="mb-6 mt-2 text-[#d0d8ff]">Tell me what you need. I reply quickly on WhatsApp.</p>
          <WhatsAppButton label="Message on WhatsApp" />
        </div>

        <div className="mt-12 border-t border-[#262c55] pt-8">
          <ul className="flex flex-wrap justify-center gap-3">
            {footerLinks.map(({ name, icon, href, download }) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noreferrer" download={download}
                  className="flex items-center gap-2 rounded-full border border-[#3a418a] bg-[#141830] px-5 py-2.5 text-sm text-[#c3c8ff] duration-200 hover:-translate-y-0.5 hover:border-[#38c8ff] hover:text-white">
                  {icon}
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-[#6c72a0]">© 2026 Aalia Amin</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
