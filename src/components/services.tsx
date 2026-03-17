"use client";

import { SERVICES, SECTION_IDS } from "@/lib/constants";
import { cn, buildWhatsAppUrl } from "@/lib/utils";
import SpotlightCard from "@/components/SpotlightCard";
import FadeContent from "@/components/FadeContent";
import {
  Shield,
  Sparkles,
  Paintbrush,
  Sun,
  Car,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Sparkles,
  Paintbrush,
  Sun,
  Car,
};

export default function Services() {
  return (
    <section
      id={SECTION_IDS.services}
      className="section-separator relative py-24 lg:py-32 bg-bg-primary"
    >
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212, 43, 43, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeContent blur duration={800} threshold={0.2}>
          <div className="mb-16 text-center">
            <h2 className="text-accent-gradient text-4xl font-heading font-bold md:text-5xl">
              Nuestros Servicios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary text-lg">
              Ofrecemos soluciones completas de cuidado automotriz con productos
              y técnicas de clase mundial.
            </p>
          </div>
        </FadeContent>

        {/* Asymmetric Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isFeatured = service.featured;

            return (
              <FadeContent
                key={service.id}
                blur
                duration={700}
                delay={index * 150}
                threshold={0.1}
                className={cn(isFeatured && "md:col-span-2")}
              >
                <SpotlightCard
                  className={cn(
                    "group relative h-full transition-all duration-300",
                    isFeatured
                      ? "p-8 lg:p-10"
                      : "p-8"
                  )}
                  spotlightColor="rgba(212, 43, 43, 0.25)"
                >
                  {/* Featured badge */}
                  {isFeatured && (
                    <span className="absolute right-6 top-6 rounded-full bg-accent/10 px-3 py-1 text-xs font-accent font-semibold uppercase tracking-wider text-accent">
                      Destacado
                    </span>
                  )}

                  <div
                    className={cn(
                      "flex flex-col",
                      isFeatured && "md:flex-row md:items-start md:gap-8"
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "mb-5 flex items-center justify-center rounded-2xl border border-accent/20 bg-accent/5",
                        isFeatured
                          ? "h-16 w-16 md:mb-0 md:h-20 md:w-20 md:shrink-0"
                          : "h-14 w-14"
                      )}
                    >
                      {Icon && (
                        <Icon
                          className={cn(
                            "text-accent transition-transform duration-300 group-hover:scale-110",
                            isFeatured ? "h-8 w-8 md:h-10 md:w-10" : "h-7 w-7"
                          )}
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={cn(
                          "font-heading font-bold text-text-primary",
                          isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-3 leading-relaxed text-text-secondary",
                          isFeatured ? "text-base md:text-lg" : "text-sm"
                        )}
                      >
                        {service.description}
                      </p>

                      {/* WhatsApp CTA */}
                      <a
                        href={buildWhatsAppUrl(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 hover:gap-3 hover:text-accent-light"
                      >
                        <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                        <span>Consultar por WhatsApp</span>
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
