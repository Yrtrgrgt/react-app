"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Website Development",
        "Web Applications",
        "Mobile Apps",
        "SEO & Marketing",
        "Video Editing",
        "Social Media Management",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero">
      {/* 3D Background */}
      <Canvas className="hero-canvas">
        <Stars radius={100} depth={50} count={4000} factor={4} fade />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Create New Agency</h1>
        <h2 className="hero-subtitle">
          We specialize in <span ref={el} className="typing"></span>
        </h2>
        <a href="#services" className="cta-btn">
          Start Your Project
        </a>

        {/* Scroll indicator */}
        <div className="scroll-indicator">▼</div>
      </div>
    </section>
  );
}
