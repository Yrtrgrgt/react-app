"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "The Beginning",
    desc: "Create New Agency started with a small but passionate team focused on delivering world-class websites.",
  },
  {
    year: "2023",
    title: "Expanding Horizons",
    desc: "We added mobile apps, web apps, and video editing to our services, serving clients across India and USA.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    desc: "Our professional SEO and social media management helped us gain recognition as one of the most futuristic agencies.",
  },
  {
    year: "2025",
    title: "Future Ready",
    desc: "Pioneering 3D animated websites and next-gen solutions for businesses worldwide.",
  },
];

export default function AboutUs() {
  const canvasRef = useRef(null);

  // Starfield + glowing line animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, stars = [];

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
      gradient.addColorStop(0, "#020817");
      gradient.addColorStop(1, "#031529");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

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

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(56,189,248,0.2)`;
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

      {/* Light Blur Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px] z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 
             text-white [text-shadow:_0_0_4px_#3b82f6,_0_0_8px_#2563eb,_0_0_14px_#1d4ed8]"
        >
          About Us
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-500">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="mb-12 ml-6"
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-4 ring-blue-900"></span>
              <div className="p-6 bg-gradient-to-br from-gray-900/70 to-blue-950/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-blue-600/40">
                <h3 className="text-xl font-bold text-blue-400">{item.year}</h3>
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
