"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Magnet from "@/components/Magnet";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2000);

    const footer = document.querySelector("footer");
    if (!footer) return () => clearTimeout(showTimer);

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);

    return () => {
      clearTimeout(showTimer);
      observer.disconnect();
    };
  }, []);

  if (!visible || footerVisible) return null;

  const url = buildWhatsAppUrl("Hola! Me gustaría saber más sobre sus servicios.");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Magnet padding={60} magnetStrength={3}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 pulse-ring"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </Magnet>
    </div>
  );
}
