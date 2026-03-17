"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn, buildWhatsAppUrl } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const WHATSAPP_CTA_MESSAGE = "Hola! Me gustaría agendar una cita.";

export default function Navbar() {
  const scrolled = useScrollPosition(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMobile();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [closeMobile]
  );

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "#inicio")}
              className="flex-shrink-0"
            >
              <span className="text-gold-gradient font-heading text-lg font-bold tracking-wider md:text-xl">
                AUTO FANATICS
              </span>
            </a>

            {/* Desktop navigation links */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop WhatsApp CTA */}
            <div className="hidden items-center md:flex">
              <a
                href={buildWhatsAppUrl(WHATSAPP_CTA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !px-5 !py-2.5 text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={toggleMobile}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-white/5 md:hidden"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-6 py-4 text-center font-heading text-2xl font-semibold text-text-primary transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: NAV_LINKS.length * 0.08,
                  duration: 0.3,
                }}
                className="mt-6"
              >
                <a
                  href={buildWhatsAppUrl(WHATSAPP_CTA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-base"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Agenda tu Cita</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
