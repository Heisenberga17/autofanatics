import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Process from "@/components/process";
import WhyUs from "@/components/why-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider direction="right" fillColor="#111111" />
        <TrustBar />
        <Services />
        <SectionDivider direction="left" fillColor="#111111" />
        <Gallery />
        <SectionDivider direction="right" fillColor="#111111" />
        <Process />
        <WhyUs />
        <SectionDivider direction="left" fillColor="#111111" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
