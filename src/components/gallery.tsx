"use client";

import { SECTION_IDS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";
import FadeContent from "@/components/FadeContent";
import BeforeAfterSlider from "@/components/before-after-slider";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  {
    id: "gallery-1",
    title: "Corrección de Pintura",
    before:
      "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 30%, #333333 60%, #1f1f1f 100%)",
    after:
      "linear-gradient(135deg, #1a1a1a 0%, #2a2520 30%, rgba(200, 164, 92, 0.15) 60%, #1a1a1a 100%)",
  },
  {
    id: "gallery-2",
    title: "Ceramic Coating",
    before:
      "linear-gradient(160deg, #222222 0%, #1a1a1a 40%, #2d2d2d 70%, #181818 100%)",
    after:
      "linear-gradient(160deg, #1c1a16 0%, rgba(200, 164, 92, 0.12) 40%, #2a2520 70%, #1a1712 100%)",
  },
  {
    id: "gallery-3",
    title: "Detailing Completo",
    before:
      "linear-gradient(200deg, #252525 0%, #1e1e1e 35%, #303030 65%, #1a1a1a 100%)",
    after:
      "linear-gradient(200deg, #221f1a 0%, rgba(200, 164, 92, 0.1) 35%, #2c2720 65%, #1a1712 100%)",
  },
];

export default function Gallery() {
  return (
    <section
      id={SECTION_IDS.gallery}
      className="section-separator relative py-24 md:py-32 bg-bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeContent blur duration={800} threshold={0.2}>
          <div className="mb-16 text-center">
            <h2 className="text-gold-gradient text-4xl font-heading font-bold md:text-5xl">
              Galería de Resultados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary text-lg">
              Desliza para ver la transformación. Resultados reales que hablan
              por sí solos.
            </p>
          </div>
        </FadeContent>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <FadeContent
              key={item.id}
              blur
              duration={700}
              delay={index * 200}
              threshold={0.1}
            >
              <div>
                <BeforeAfterSlider
                  beforeSrc={item.before}
                  afterSrc={item.after}
                />
                <p className="mt-3 text-center text-sm font-medium text-text-secondary">
                  {item.title}
                </p>
              </div>
            </FadeContent>
          ))}
        </div>

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
