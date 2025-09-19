// File: components/Footer.jsx

"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-gray-300 bg-[#020617]">
      {/* 🌫️ Top Fade Overlay (merge with above section) */}
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[#0a0f2c] via-[#0a0f2c]/80 to-transparent z-10" />

      {/* 🔵 Animated Gradient Dark Blue Background */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          background: [
            "linear-gradient(to bottom, #020617 0%, #0a0f2c 40%, #1e3a8a 80%, #020617 100%)",
            "linear-gradient(to bottom, #020617 0%, #0a0f2c 40%, #2563eb 80%, #020617 100%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Floating Glowing Orbs */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400 blur-sm opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🔮 Glass Blur Layer */}
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px] bg-black/30" />

      {/* 🔹 Footer Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Agency Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-3 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
            Create New Agency
          </h2>
          <p className="text-gray-400">
            We build futuristic websites, apps, video editing, SEO & social
            media solutions with innovation and precision.
          </p>
        </motion.div>

        {/* 📞 Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]">
            Call Us
          </h3>
          <div className="flex flex-col space-y-2">
            <a
              href="tel:919131549901"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              📞 9131549901
            </a>
            <a
              href="tel:919340449716"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              📞 9876543210
            </a>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]">
            Follow Us
          </h3>
          <div className="flex space-x-5">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🔁 Running Text */}
      <div className="w-full border-t border-blue-900/40 py-3 overflow-hidden">
        <motion.div
          className="text-blue-400 whitespace-nowrap text-sm font-medium tracking-wide"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          🚀 Futuristic Web Development • 🎨 Creative Designs • ⚡ Scalable Apps •
          📊 SEO & Marketing Experts • ✨ Create New Agency ✨
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center text-gray-500 mt-6 text-xs"
      >
        © {new Date().getFullYear()} Create New Agency. All rights reserved.
      </motion.div>
    </footer>
  );
}
