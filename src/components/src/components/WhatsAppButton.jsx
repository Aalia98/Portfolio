import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../lib/config";

const WhatsAppButton = ({ label = "Chat on WhatsApp", className = "" }) => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-bold text-[#06210f] hover:scale-105 duration-200 ${className}`}
  >
    <FaWhatsapp size={22} />
    {label}
  </a>
);

export default WhatsAppButton;
