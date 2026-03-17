"use client";

import { Award, BadgeCheck, Gem, MapPin } from "lucide-react";
import { SECTION_IDS, WHY_US_FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import FadeContent from "@/components/FadeContent";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Gem,
  MapPin,
};

export default function WhyUs() {
  return (
    <section
      id={SECTION_IDS.whyUs}
      className="relative bg-bg-primary py-24 lg:py-32 section-separator"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Real photo replacing gradient box */}
          <FadeContent blur duration={800} threshold={0.15}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {/* Real photo */}
                <img
                  src="/images/detailer-at-work.jpg"
                  alt="Profesional de detailing trabajando"
                  className="h-full w-full object-cover"
                />

                {/* Red-tinted gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-accent/5 to-transparent" />

                {/* Corner accents over the image */}
                <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-accent/40 rounded-tl-md" />
                <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-accent/40 rounded-tr-md" />
                <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-accent/40 rounded-bl-md" />
                <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-accent/40 rounded-br-md" />

                {/* Bottom text overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <span className="font-accent text-xs uppercase tracking-[0.2em] text-text-secondary">
                    Premium Detailing Studio
                  </span>
                </div>
              </div>
            </div>
          </FadeContent>

          {/* Right: Features list */}
          <div>
            <FadeContent blur duration={700} threshold={0.15}>
              <h2 className="text-accent-gradient text-4xl font-heading font-bold mb-2">
                ¿Por Qué Elegirnos?
              </h2>
              <p className="text-text-secondary mb-10 max-w-lg">
                Somos el estudio de detailing de referencia en Panamá, con
                certificaciones internacionales y productos premium.
              </p>
            </FadeContent>

            <div className="space-y-6">
              {WHY_US_FEATURES.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                return (
                  <FadeContent
                    key={feature.title}
                    blur
                    duration={600}
                    delay={index * 120}
                    threshold={0.1}
                  >
                    <div className="group flex items-start gap-4">
                      {/* Icon circle */}
                      <div
                        className={cn(
                          "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full",
                          "border border-accent/30 bg-accent/5",
                          "transition-all duration-300",
                          "group-hover:border-accent/60 group-hover:bg-accent/10"
                        )}
                      >
                        {Icon && (
                          <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-text-primary mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </FadeContent>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
