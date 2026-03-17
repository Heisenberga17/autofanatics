"use client";

import { PROCESS_STEPS, SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import FadeContent from "@/components/FadeContent";
import {
  Search,
  Droplets,
  Wrench,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Droplets,
  Wrench,
  ShieldCheck,
  CheckCircle,
};

export default function Process() {
  return (
    <section
      id={SECTION_IDS.process}
      className="section-separator relative py-24 lg:py-32 bg-bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeContent blur duration={800} threshold={0.2}>
          <div className="mb-16 text-center">
            <h2 className="text-accent-gradient text-4xl font-heading font-bold md:text-5xl">
              Nuestro Proceso
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary text-lg">
              Un proceso meticuloso de 5 pasos para garantizar resultados
              excepcionales en cada vehículo.
            </p>
          </div>
        </FadeContent>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-10 z-0 mx-auto h-px w-[calc(100%-120px)]"
              style={{
                left: '60px',
                right: '60px',
                background:
                  "linear-gradient(90deg, transparent 0%, #D42B2B 5%, #D42B2B 95%, transparent 100%)",
              }}
            />

            <div className="relative z-10 grid grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon];

                return (
                  <FadeContent
                    key={step.number}
                    blur
                    duration={600}
                    delay={index * 150}
                    threshold={0.1}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Number circle */}
                      <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-bg-secondary">
                        <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white font-accent">
                          {step.number}
                        </span>
                        {Icon && (
                          <Icon
                            className="h-8 w-8 text-accent"
                            strokeWidth={1.5}
                          />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 font-heading text-lg font-bold text-text-primary">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </FadeContent>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative ml-6 border-l-2 border-accent/30 pl-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isLast = index === PROCESS_STEPS.length - 1;

              return (
                <FadeContent
                  key={step.number}
                  blur
                  duration={600}
                  delay={index * 150}
                  threshold={0.1}
                >
                  <div
                    className={cn(
                      "relative",
                      !isLast ? "pb-12" : "pb-0"
                    )}
                  >
                    {/* Circle on the line */}
                    <div className="absolute -left-[calc(2.5rem+1.5px)] top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-bg-secondary">
                      <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white font-accent">
                        {step.number}
                      </span>
                      {Icon && (
                        <Icon
                          className="h-5 w-5 text-accent"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    {/* Dot connector on the line (except last) */}
                    {!isLast && (
                      <div
                        className="absolute -left-[calc(2.5rem+1.5px)] bottom-0 h-px w-12"
                        style={{
                          background: "transparent",
                        }}
                      />
                    )}

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="font-heading text-xl font-bold text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeContent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
