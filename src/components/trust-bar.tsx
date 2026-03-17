"use client";

import FadeContent from "@/components/FadeContent";

const TRUST_ITEMS = [
  "Distribuidor Certificado IGL Coatings",
  "Detailing Profesional Certificado",
  "Costa del Este, Panamá",
];

export default function TrustBar() {
  return (
    <section className="bg-bg-secondary py-6">
      <FadeContent blur duration={800} threshold={0.2}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Desktop: horizontal with vertical separators */}
          <div className="hidden items-center justify-center gap-6 md:flex">
            {TRUST_ITEMS.map((item, i) => (
              <div key={item} className="flex items-center gap-6">
                <span className="font-accent text-sm uppercase tracking-wider text-text-secondary">
                  {item}
                </span>
                {i < TRUST_ITEMS.length - 1 && (
                  <span
                    className="h-4 w-px bg-accent/50"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: stacked vertically with dot separators */}
          <div className="flex flex-col items-center gap-3 md:hidden">
            {TRUST_ITEMS.map((item, i) => (
              <div key={item} className="flex flex-col items-center gap-3">
                <span className="font-accent text-center text-sm uppercase tracking-wider text-text-secondary">
                  {item}
                </span>
                {i < TRUST_ITEMS.length - 1 && (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent/60"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
}
