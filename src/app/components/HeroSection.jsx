"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection({
  title = "Create New Agency",
  ctas = [
    { label: "Get Started", href: "#contact", primary: true },
   { label: "Portfolio", href: "/portfolio" }
  ],
}) {
  const typedRef = useRef(null);
  const typedInstanceRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (typeof window === "undefined") return;
      const { default: Typed } = await import("typed.js");
      if (!mounted) return;
      typedInstanceRef.current = new Typed(typedRef.current, {
        strings: [
          "We Build Websites 🚀",
          "Web Apps & Mobile Apps 📱",
          "Professional Video Editing 🎬",
          "SEO & Social Media Management 📊",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1400,
        startDelay: 200,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    })();
    return () => {
      mounted = false;
      if (typedInstanceRef.current) typedInstanceRef.current.destroy();
    };
  }, []);

  const headingVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
    },
  };
  const subVariant = {
    hidden: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } },
  };
  const ctaVariant = {
    hidden: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
  };

  const services = [
    { id: 1, label: "Design & UI/UX", icon: "🎨", delay: 0.7 },
    { id: 2, label: "Full-Stack Dev", icon: "⚙️", delay: 0.9 },
    { id: 3, label: "Branding & Motion", icon: "✨", delay: 1.1 },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden text-white"
      aria-label="Hero section - create new agency"
    >
      {/* 🌈 Glowing Neon Line (Navbar ke jagah) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[3px] z-50"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent)",
          filter: "drop-shadow(0 0 8px #3b82f6)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* 🌌 Space Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-30"
        animate={{
          background: [
            "radial-gradient(circle at top, #0b132b 0%, #0a0f1f 50%, #000 100%)",
            "radial-gradient(circle at top, #0f1e3a 0%, #0b132b 50%, #000 100%)",
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Random Moving Stars */}
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            x: [0, Math.random() * 80 - 40],
            y: [0, Math.random() * 80 - 40],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🌠 Shooting Star */}
      <motion.div
        className="absolute top-1/4 left-0 h-[2px] w-[120px] bg-gradient-to-r from-white to-transparent opacity-70 rounded-full"
        initial={{ x: "-20%" }}
        animate={{ x: "120vw", opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 8 }}
      />

      {/* ⚡ Thunder Glow Effect */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 12 }}
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 lg:px-12 py-24">
        <motion.h1
          className="font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight 
             text-white [text-shadow:_0_0_4px_#3b82f6,_0_0_8px_#2563eb,_0_0_14px_#1d4ed8]"
          variants={headingVariant}
          initial="hidden"
          animate="enter"
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-4 md:mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300 font-medium"
          variants={subVariant}
          initial="hidden"
          animate="enter"
        >
          <span ref={typedRef} className="font-mono text-blue-300" />
        </motion.p>
        <motion.div
          className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          variants={ctaVariant}
          initial="hidden"
          animate="enter"
        >
          {ctas.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                c.primary
                  ? "bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-[1.02]"
                  : "bg-white/5 hover:bg-white/8"
              }`}
              whileHover={{ scale: 1.04, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label={c.label}
            >
              {c.primary && <span className="text-xl">➕</span>}
              <span>{c.label}</span>
              {!c.primary && <span className="ml-1">→</span>}
            </motion.a>
          ))}
        </motion.div>

        {/* Floating chips */}
        <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
          {services.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: s.delay,
                type: "spring",
                stiffness: 120,
              }}
              className="flex items-center gap-3 bg-white/6 backdrop-blur-md border border-white/6 rounded-2xl px-4 py-3 shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center text-xl">
                {s.icon}
              </div>
              <div className="text-left text-sm md:text-base">
                <div className="font-semibold">{s.label}</div>
                <div className="text-xs text-slate-300">End-to-end deliveries</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-sm text-slate-400">Scroll to explore ↓</div>
        </motion.div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full -z-10"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 C240 80 360 0 720 40 C1080 80 1200 0 1440 40 L1440 80 L0 80 Z"
          fill="rgba(15,23,42,0.85)"
        />
      </svg>
    </section>
  );
}
