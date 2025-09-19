// File: app/page.tsx

import HeroSection from "@/app/components/HeroSection";
import OurServices from "@/app/components/OurServices";
import ClientsServed from "@/app/components/ClientsServed";
import AboutUs from "@/app/components/AboutUs";
import Footer from "@/app/components/Footer";
import GlowingBoxes from "@/app/components/GlowingBoxes";
import WhatsAppButton from "@/app/components/WhatsAppButton"; // ✅ Add import

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ✅ Glowing Boxes section */}
      <GlowingBoxes />

      <OurServices />
      <ClientsServed />
      <AboutUs />
      <Footer />

      {/* ✅ Floating WhatsApp Button (always visible) */}
      <WhatsAppButton />
    </>
  );
}
