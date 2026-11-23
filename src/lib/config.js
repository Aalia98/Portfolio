// Public contact details. Change here only.
export const WHATSAPP_NUMBER = "917903168712"; // country code + number, digits only
export const WHATSAPP_MESSAGE =
  "Hi Aalia, I saw your portfolio and I'd like to talk about a project.";
export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
// Go contact API (set VITE_CONTACT_API_URL at build time). Empty = form shows a fallback message.
export const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "";
