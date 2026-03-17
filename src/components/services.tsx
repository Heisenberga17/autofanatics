"use client";

import { SERVICES, SECTION_IDS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
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
  const featured = SERVICES.find((s) => s.featured)!;
  const medium = SERVICES.filter((s) => !s.featured).slice(0, 2);
  const compact = SERVICES.filter((s) => !s.featured).slice(2);

  const FeaturedIcon = iconMap[featured.icon];

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

        {/* Zone 1: Featured Service — Full width horizontal */}
        <FadeContent blur duration={700} threshold={0.1}>
          <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-bg-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 lg:h-[400px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bg-secondary/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent lg:hidden" />
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-accent font-semibold uppercase tracking-wider text-accent">
                  Destacado
                </span>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5">
                  {FeaturedIcon && (
                    <FeaturedIcon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  )}
                </div>
                <h3 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
                  {featured.description}
                </p>
                <a
                  href={buildWhatsAppUrl(featured.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-fit text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </FadeContent>

        {/* Zone 2: Medium services — 2 col with background images */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {medium.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeContent
                key={service.id}
                blur
                duration={700}
                delay={index * 150}
                threshold={0.1}
              >
                <div className="group relative h-72 overflow-hidden rounded-2xl border border-border md:h-80">
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Content at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-black/40 backdrop-blur-sm">
                      {Icon && (
                        <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      )}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-secondary line-clamp-2">
                      {service.description}
                    </p>
                    <a
                      href={buildWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 hover:gap-3"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                      <span>Consultar</span>
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </div>

        {/* Zone 3: Compact services — 2 col horizontal cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {compact.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeContent
                key={service.id}
                blur
                duration={700}
                delay={index * 150}
                threshold={0.1}
              >
                <div className="group flex overflow-hidden rounded-2xl border border-border bg-bg-secondary transition-all duration-300 hover:border-accent/20">
                  {/* Thumbnail */}
                  <div className="relative w-32 flex-shrink-0 sm:w-40">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-5">
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/5">
                      {Icon && (
                        <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
                      {service.description}
                    </p>
                    <a
                      href={buildWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-300 hover:gap-2.5"
                    >
                      <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span>Consultar</span>
                      <ArrowRight className="h-3 w-3" strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
