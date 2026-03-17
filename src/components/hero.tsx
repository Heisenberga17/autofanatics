"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import BlurText from "@/components/BlurText";
import { SECTION_IDS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

const WHATSAPP_CTA_MESSAGE = "Hola! Me gustaría agendar una cita.";

function handleScrollToServices(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const el = document.getElementById(SECTION_IDS.services);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)",
      }}
    >
      {/* Aurora background */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#D42B2B", "#1a1a1a", "#E84444"]}
          amplitude={1.2}
          speed={0.5}
          blend={0.6}
        />
      </div>

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/50" />

      {/* Car image overlay — right side, fades into dark left */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          maskImage: "linear-gradient(to left, black 30%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 70%)",
        }}
      >
        <img
          src="/images/hero-car.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Extra dark overlay on the car image */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Mobile: car image as subtle full background */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/images/hero-car.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-20"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 lg:items-start lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl lg:max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-5 py-2 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-accent text-sm font-medium tracking-wider text-accent">
                Certificados IGL Coatings
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="mb-6">
              <BlurText
                text="Detailing Profesional Certificado en Panamá"
                delay={80}
                className="font-heading text-5xl font-bold leading-tight text-text-primary md:text-7xl lg:text-left"
                animateBy="words"
                direction="bottom"
              />
            </div>

            {/* Subheadline */}
            <div className="mb-10">
              <BlurText
                text="Protección cerámica, corrección de pintura y detailing premium en Costa del Este"
                delay={40}
                className="max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl lg:text-left"
                animateBy="words"
                direction="bottom"
              />
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <a
                href={buildWhatsAppUrl(WHATSAPP_CTA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Agenda tu Cita</span>
              </a>
              <a
                href={`#${SECTION_IDS.services}`}
                onClick={handleScrollToServices}
                className="btn-outline text-base"
              >
                <span>Nuestros Servicios</span>
                <ChevronDown className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-text-secondary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
