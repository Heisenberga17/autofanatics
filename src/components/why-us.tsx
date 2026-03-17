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
      className="relative bg-bg-primary py-20 md:py-28 section-separator"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Decorative gradient box with animated shine */}
          <FadeContent blur duration={800} threshold={0.15}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-2xl",
                  "bg-gradient-to-br from-gold/20 via-gold-dark/10 to-bg-tertiary",
                  "border border-gold/10"
                )}
              >
                {/* Inner layered gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary/60 via-transparent to-gold/5" />

                {/* Diamond pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #c8a45c 0, #c8a45c 1px, transparent 0, transparent 50%)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Animated shine/reflection effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(200,164,92,0.12) 45%, rgba(232,198,106,0.18) 50%, rgba(200,164,92,0.12) 55%, transparent 60%)",
                    animation: "shine 4s ease-in-out infinite",
                  }}
                />

                {/* Center emblem */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="mb-3 h-16 w-16 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-gold" />
                  </div>
                  <span className="text-gold-gradient font-heading text-xl font-bold tracking-widest">
                    AUTO FANATICS
                  </span>
                  <span className="mt-1 text-xs tracking-[0.2em] text-text-muted uppercase">
                    Premium Detailing Studio
                  </span>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-gold/20 rounded-tl-md" />
                <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-gold/20 rounded-tr-md" />
                <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-gold/20 rounded-bl-md" />
                <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-gold/20 rounded-br-md" />
              </div>
            </div>
          </FadeContent>

          {/* Right: Features list */}
          <div>
            <FadeContent blur duration={700} threshold={0.15}>
              <h2 className="text-gold-gradient text-4xl font-heading font-bold mb-2">
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
                          "border border-gold/30 bg-gold/5",
                          "transition-all duration-300",
                          "group-hover:border-gold/60 group-hover:bg-gold/10"
                        )}
                      >
                        {Icon && (
                          <Icon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" />
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
