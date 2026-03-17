import type { Metadata } from "next";
import { plusJakartaSans, dmSans, outfit } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Fanatics Panama | Detailing Profesional & Ceramic Coating en Costa del Este",
  description:
    "Estudio de detailing profesional certificado en Costa del Este, Panamá. Ceramic coating IGL Coatings, corrección de pintura, detailing interior y exterior. Agenda tu cita por WhatsApp.",
  keywords: [
    "detailing panama",
    "ceramic coating panama",
    "detailing costa del este",
    "corrección de pintura",
    "IGL Coatings panama",
    "auto detailing",
    "protección cerámica",
    "Auto Fanatics Panama",
  ],
  openGraph: {
    title: "Auto Fanatics Panama | Detailing Profesional & Ceramic Coating",
    description:
      "Estudio de detailing profesional certificado en Costa del Este, Panamá. Ceramic coating, corrección de pintura y más.",
    locale: "es_PA",
    type: "website",
    siteName: "Auto Fanatics Panama",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Auto Fanatics Panama",
  description:
    "Estudio de detailing profesional certificado. Ceramic coating IGL Coatings, corrección de pintura, detailing interior y exterior.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Costa del Este",
    addressRegion: "Ciudad de Panamá",
    addressCountry: "PA",
  },
  telephone: "+507 6905-9397",
  openingHours: "Mo-Sa 08:00-18:00",
  image: "/og-image.jpg",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Ciudad de Panamá",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${dmSans.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
