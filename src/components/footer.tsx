"use client";

import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import {
  NAV_LINKS,
  BUSINESS_NAME,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: WHATSAPP_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: MapPin,
    label: BUSINESS_ADDRESS,
    href: null,
  },
  {
    icon: Clock,
    label: BUSINESS_HOURS,
    href: null,
  },
  {
    icon: Instagram,
    label: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
  },
] as const;

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-bg-primary border-t border-border">
      {/* Gold gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #c8a45c 30%, #e8c66a 50%, #c8a45c 70%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Column 1: Brand + About */}
          <div>
            <span className="text-gold-gradient font-heading text-2xl font-bold tracking-wider">
              AUTO FANATICS
            </span>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary max-w-xs">
              Estudio de detailing profesional en Panamá. Transformamos y
              protegemos tu vehículo con técnicas avanzadas y productos de la
              más alta calidad.
            </p>
            {/* IGL Coatings badge */}
            <div
              className={cn(
                "mt-5 inline-flex items-center gap-2 rounded-full",
                "border border-gold/20 bg-gold/5 px-4 py-2"
              )}
            >
              <div className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-xs font-medium text-gold tracking-wide">
                Distribuidor Autorizado IGL Coatings
              </span>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-5">
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm text-text-secondary transition-colors duration-200",
                    "hover:text-gold"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-5">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              {CONTACT_DETAILS.map((item) => {
                const Icon = item.icon;
                const content = (
                  <li
                    className={cn(
                      "flex items-center gap-3",
                      item.href && "group cursor-pointer"
                    )}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0 text-gold" />
                    <span
                      className={cn(
                        "text-sm text-text-secondary",
                        item.href &&
                          "group-hover:text-gold transition-colors duration-200"
                      )}
                    >
                      {item.label}
                    </span>
                  </li>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {BUSINESS_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
