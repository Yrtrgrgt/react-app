// File: portfolio/components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type Typed from "typed.js"; // ✅ Type import kiya

export default function PortfolioHero() {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let typedInstance: Typed | null = null; // ✅ `any` hataya, proper type diya
    (async () => {
      const { default: Typed } = await import("typed.js");
      if (typedRef.current) {
        typedInstance = new Typed(typedRef.current, {
          strings: [
            "Websites 🚀",
            "Apps 📱",
            "Video Editing 🎬",
            "SEO Projects 📊",
          ],
          typeSpeed: 60,
          backSpeed: 40,
          loop: true,
          showCursor: true,
          cursorChar: "|",
        });
      }
    })();
    return () => {
      typedInstance?.destroy();
    };
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* 🌌 Background Layer: Gradient + Grid */}
      <div className="absolute inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050818] via-[#0a0f2c] to-[#020617]" />
        <div className="absolute inset-0 bg-grid-dark opacity-20" />
      </div>

      {/* 🔮 Floating Orbs (dark pink/purple) */}
      <div className="absolute inset-0 -z-40 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background:
                "radial-gradient(circle, rgba(236,72,153,0.12), transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{ y: [0, -50, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 -z-30">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 6px rgba(255,255,255,0.8)",
            }}
            animate={{ opacity: [0.1, 1, 0.1], scale: [1, 1.5, 1] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 🔗 Digital Network Lines */}
      <svg
        className="absolute inset-0 w-full h-full -z-20 opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          stroke="url(#lineGrad)"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          {Array.from({ length: 15 }).map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
              />
            );
          })}
        </motion.g>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* 🔙 Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #38bdf8" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md 
                       text-blue-300 border border-blue-500/50 shadow-lg text-sm md:text-base"
          >
            ← Back to Home
          </motion.button>
        </Link>
      </div>

      {/* 📌 Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold 
                     bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_25px_rgba(236,72,153,0.7)]"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          Our Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          We build{" "}
          <span ref={typedRef} className="text-pink-300 font-mono"></span>
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 h-[3px] w-40 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-600 mx-auto rounded-full relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* 🔻 Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#020617] -z-10" />

      {/* 🔧 Dark Grid CSS */}
      <style jsx>{`
        .bg-grid-dark {
          background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 79px
            ),
            linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 79px
            );
          background-size: 80px 80px;
          animation: gridShift 18s linear infinite;
        }
        @keyframes gridShift {
          0% {
            background-position: 0px 0px, 0px 0px;
          }
          50% {
            background-position: 0px 80px, 80px 0px;
          }
          100% {
            background-position: 0px 0px, 0px 0px;
          }
        }
      `}</style>
    </section>
  );
}
