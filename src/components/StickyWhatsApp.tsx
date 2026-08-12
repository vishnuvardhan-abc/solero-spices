import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function StickyWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello HITECH SPICES, I would like to know more about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
