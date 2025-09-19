"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Video, Search, Globe, Share2 } from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: <Code size={40} />,
    desc: "Modern, fast & responsive websites built with latest tech.",
  },
  {
    title: "Web App Development",
    icon: <Globe size={40} />,
    desc: "Powerful web applications tailored to your business needs.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone size={40} />,
    desc: "Cross-platform mobile apps with sleek design & performance.",
  },
  {
    title: "Video Editing",
    icon: <Video size={40} />,
    desc: "High-quality professional video editing for brands & creators.",
  },
  {
    title: "Google SEO",
    icon: <Search size={40} />,
    desc: "Rank higher on Google with expert SEO optimization.",
  },
  {
    title: "Social Media Management",
    icon: <Share2 size={40} />,
    desc: "Grow your brand with smart social media strategies.",
  },
];

export default function OurServices() {
  const particles = Array.from({ length: 20 });
  const orbs = Array.from({ length: 4 });

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* === Moving Particles === */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-green-400/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* === Rotating Orbs === */}
      {orbs.map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full bg-green-500/10 blur-xl"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40 + i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* === Thunder Flash === */}
     
      {/* === Graph Lines Grid === */}
      <svg
        className="absolute bottom-0 left-0 w-full h-80 opacity-30"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="graphLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(34,197,94,0.8)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0.2)" />
          </linearGradient>
        </defs>
        {/* Curved graph path */}
        <motion.path
          d="M0,160 L120,140 C240,120,480,200,720,160 C960,120,1200,180,1440,140 L1440,320 L0,320 Z"
          fill="url(#graphLine)"
          animate={{ d: [
            "M0,150 L120,130 C240,110,480,190,720,150 C960,110,1200,170,1440,130 L1440,320 L0,320 Z",
            "M0,160 L120,140 C240,120,480,200,720,160 C960,120,1200,180,1440,140 L1440,320 L0,320 Z",
            "M0,170 L120,150 C240,130,480,210,720,170 C960,130,1200,190,1440,150 L1440,320 L0,320 Z",
          ]}}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* === Content === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-16 drop-shadow-lg"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.08 }}
              className="relative p-8 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl 
                         shadow-lg hover:shadow-green-500/40 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-green-400 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15, scale: 1.1 }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(34,197,94,0.4), transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
