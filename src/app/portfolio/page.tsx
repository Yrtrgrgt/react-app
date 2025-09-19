// File: portfolio/page.tsx
"use client";

import PortfolioHero from "./components/HeroSection";
import ShowcaseSection from "./components/ShowcaseSection";
import Footer from "../components/Footer"; // ✅ Footer import kiya (components folder se)

export default function PortfolioPage() {
  return (
    <main>
      {/* 🔹 Hero Section */}
      <PortfolioHero />

      {/* 🔹 Category Filter + Showcase Grid */}
      <ShowcaseSection />

      {/* 🔹 Footer Section */}
      <Footer />
    </main>
  );
}
