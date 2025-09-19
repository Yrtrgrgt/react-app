"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GlowingBoxes() {
  const [hovered, setHovered] = useState(null);
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !typedInstance.current) {
          (async () => {
            const { default: Typed } = await import("typed.js");
            typedInstance.current = new Typed(typedRef.current, {
              strings: ["Explore Our Expertise"],
              typeSpeed: 60,
              showCursor: false,
            });
          })();
        }
      },
      { threshold: 0.5 }
    );

    if (typedRef.current) observer.observe(typedRef.current);
    return () => observer.disconnect();
  }, []);

  const boxes = [
    { id: 1, title: "Design Excellence", desc: "Crafting stunning user interfaces with precision." },
    { id: 2, title: "Robust Development", desc: "Engineering scalable & secure applications." },
    { id: 3, title: "Marketing Magic", desc: "Boosting brands with powerful strategies." },
    { id: 4, title: "AI Integration", desc: "Next-gen automation & intelligence." },
  ];

  const bgWords = ["INNOVATE", "DESIGN", "SCALE", "IMPACT"];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Base animated dark-blue gradient */}
      <motion.div
        className="absolute -z-30 inset-0"
        animate={{
          background: [
            "linear-gradient(180deg,#071129 0%,#0b1b33 50%,#081827 100%)",
            "linear-gradient(180deg,#071129 0%,#0a203f 50%,#0b1030 100%)",
            "linear-gradient(180deg,#081127 0%,#0e2a53 50%,#071122 100%)",
          ],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      {/* 🔥 Gradient fade overlays to blend sections */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none -z-10"></div>

      {/* Sparkles: left & right clusters */}
      {[{ left: "4%", top: "18%", size: 10, color: "rgba(236,72,153,0.95)", delay: 0 },
        { left: "8%", top: "28%", size: 6, color: "rgba(255,215,64,0.9)", delay: 0.6 },
        { left: "2%", top: "38%", size: 8, color: "rgba(236,72,153,0.7)", delay: 1.2 }]
        .map((s, i) => (
          <motion.span
            key={"l" + i}
            aria-hidden
            className="absolute rounded-full -z-20"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              background: s.color,
              boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
              filter: "blur(8px)",
            }}
            animate={{
              x: [0, -18, 10, 0],
              y: [0, -6, 8, 0],
              opacity: [0.15, 0.9, 0.25, 0.15],
              scale: [1, 1.35, 0.95, 1],
            }}
            transition={{ duration: 6 + i * 1.2, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          />
        ))}

      {/* Right cluster */}
      {[{ right: "4%", top: "20%", size: 9, color: "rgba(255,215,64,0.95)", delay: 0.4 },
        { right: "8%", top: "32%", size: 7, color: "rgba(236,72,153,0.85)", delay: 1.0 },
        { right: "2%", top: "40%", size: 5, color: "rgba(255,215,64,0.7)", delay: 1.6 }]
        .map((s, i) => (
          <motion.span
            key={"r" + i}
            aria-hidden
            className="absolute rounded-full -z-20"
            style={{
              right: s.right,
              top: s.top,
              width: s.size,
              height: s.size,
              background: s.color,
              boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
              filter: "blur(8px)",
            }}
            animate={{
              x: [0, 18, -12, 0],
              y: [0, -8, 6, 0],
              opacity: [0.12, 0.85, 0.22, 0.12],
              scale: [1, 1.25, 0.95, 1],
            }}
            transition={{ duration: 6.5 + i * 1.1, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          />
        ))}

      {/* Background words */}
      <div aria-hidden className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        {bgWords.map((w, i) => (
          <motion.div
            key={w}
            className="absolute select-none font-extrabold text-white/10"
            style={{
              fontSize: "clamp(4rem, 14vw, 12rem)",
              filter: "blur(18px)",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
              letterSpacing: "0.15em",
              whiteSpace: "nowrap",
            }}
            animate={{ opacity: [0, 0.06, 0.06, 0], scale: [1, 1.03, 1.03, 1] }}
            transition={{ duration: 14, repeat: Infinity, delay: i * 3.5, ease: "linear" }}
          >
            {w}
          </motion.div>
        ))}
      </div>

      {/* Animated green graph strip */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-36 -z-15 opacity-30"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(16,185,129,0.18) 0px, rgba(16,185,129,0.18) 2px, transparent 2px, transparent 80px)",
        }}
        aria-hidden
      />

      {/* Main content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2
          ref={typedRef}
         className="text-3xl md:text-6xl font-extrabold text-center mb-20 tracking-wider 
             bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 
             bg-clip-text text-transparent 
             drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        ></h2>

        <div className="flex flex-wrap justify-center gap-12">
          {boxes.map((box, i) => (
            <motion.div
              key={box.id}
              onMouseEnter={() => setHovered(box.id)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                scale: hovered === box.id ? 1.12 : 1,
                rotateX: hovered === box.id ? 6 : 0,
                rotateY: hovered === box.id ? -6 : 0,
                filter:
                  hovered && hovered !== box.id
                    ? "blur(4px) brightness(0.6)"
                    : "blur(0px) brightness(1)",
                zIndex: hovered === box.id ? 30 : 0,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative w-80 h-60 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer 
                bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] backdrop-blur-xl 
                border border-[rgba(99,102,241,0.12)] shadow-[0_8px_30px_rgba(4,8,23,0.6)] hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]"
              whileHover={{ y: -10 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0], opacity: [0.18, 0.6, 0.18] }}
                transition={{
                  duration: 6 + i * 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 20%, rgba(59,130,246,0.12), transparent 20%), radial-gradient(ellipse at 80% 80%, rgba(236,72,153,0.06), transparent 25%)",
                  boxShadow: "inset 0 0 20px rgba(59,130,246,0.08)",
                }}
              />
              <h3 className="relative z-10 text-2xl font-bold text-blue-300 drop-shadow-md">
                {box.title}
              </h3>
              <p className="relative z-10 mt-3 text-sm text-slate-300">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
