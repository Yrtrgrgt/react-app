"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    country: "India",
    flag: "🇮🇳",
    projects: "150+ Projects",
    desc: "Delivered cutting-edge websites, apps & digital solutions in India.",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    projects: "100+ Projects",
    desc: "Trusted by US-based startups & businesses for premium services.",
  },
];

export default function ClientsServed() {
  const canvasRef = useRef(null);

  // Starfield + glowing line animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    let stars = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.2,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "#020817"); // deep navy
      gradient.addColorStop(1, "#031529"); // darker blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Stars
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,200,255,${0.7 + Math.random() * 0.3})`;
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 8;
        ctx.fill();
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0 || s.x > w) s.dx *= -1;
        if (s.y < 0 || s.y > h) s.dy *= -1;
      });

      // Glowing lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(56,189,248,${0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
         className="text-4xl md:text-5xl font-bold text-center mb-16 
             text-white [text-shadow:_0_0_4px_#3b82f6,_0_0_8px_#2563eb,_0_0_14px_#1d4ed8]"
        >
          Clients Served
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gradient-to-br from-blue-900/70 to-blue-950/70 backdrop-blur-md rounded-2xl shadow-lg border border-blue-500/40 hover:border-blue-400/80"
            >
              <div className="text-5xl mb-4">{client.flag}</div>
              <h3 className="text-2xl font-semibold mb-2">{client.country}</h3>
              <p className="text-blue-400 font-bold mb-2">{client.projects}</p>
              <p className="text-gray-300">{client.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
