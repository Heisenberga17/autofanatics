"use client";

import { SECTION_IDS, INSTAGRAM_URL, INSTAGRAM_HANDLE, GALLERY_IMAGES } from "@/lib/constants";
import FadeContent from "@/components/FadeContent";
import BeforeAfterSlider from "@/components/before-after-slider";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  return (
    <section
      id={SECTION_IDS.gallery}
      className="section-separator relative py-24 lg:py-32 bg-bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeContent blur duration={800} threshold={0.2}>
          <div className="mb-16 text-center">
            <h2 className="text-accent-gradient text-4xl font-heading font-bold md:text-5xl">
              Galería de Resultados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary text-lg">
              Resultados reales que hablan por sí solos. Cada vehículo recibe
              atención meticulosa al detalle.
            </p>
          </div>
        </FadeContent>

        {/* Top: Full-width cinematic image */}
        <FadeContent blur duration={800} threshold={0.1}>
          <div className="relative mb-8 h-64 overflow-hidden rounded-2xl border border-border md:h-96">
            <img
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="font-accent text-xs uppercase tracking-widest text-accent">
                Portfolio
              </span>
              <h3 className="mt-1 font-heading text-2xl font-bold text-text-primary md:text-3xl">
                Nuestro Trabajo
              </h3>
            </div>
          </div>
        </FadeContent>

        {/* Masonry grid: 2 columns, staggered */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <FadeContent blur duration={700} delay={100} threshold={0.1}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={GALLERY_IMAGES[1].src}
                  alt={GALLERY_IMAGES[1].alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </FadeContent>
            <FadeContent blur duration={700} delay={300} threshold={0.1}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={GALLERY_IMAGES[3].src}
                  alt={GALLERY_IMAGES[3].alt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </FadeContent>
          </div>

          {/* Right column — offset for stagger */}
          <div className="flex flex-col gap-4 pt-0 sm:pt-12 md:gap-6">
            <FadeContent blur duration={700} delay={200} threshold={0.1}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={GALLERY_IMAGES[2].src}
                  alt={GALLERY_IMAGES[2].alt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </FadeContent>
            <FadeContent blur duration={700} delay={400} threshold={0.1}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={GALLERY_IMAGES[4].src}
                  alt={GALLERY_IMAGES[4].alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </FadeContent>
          </div>
        </div>

        {/* Before/After slider with real images */}
        <FadeContent blur duration={700} delay={200} threshold={0.1}>
          <div className="mx-auto max-w-2xl">
            <BeforeAfterSlider
              beforeSrc={GALLERY_IMAGES[5].src}
              afterSrc={GALLERY_IMAGES[4].src}
            />
            <p className="mt-3 text-center text-sm font-medium text-text-secondary">
              Desliza para comparar — Corrección de Pintura
            </p>
          </div>
        </FadeContent>

        {/* Instagram CTA */}
        <FadeContent blur duration={700} delay={600} threshold={0.1}>
          <div className="mt-16 flex flex-col items-center text-center">
            <p className="mb-6 text-lg text-text-secondary">
              Mira más resultados en nuestro Instagram
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>{INSTAGRAM_HANDLE}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
