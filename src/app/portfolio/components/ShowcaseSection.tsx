// File: portfolio/components/ShowcaseSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const CATEGORIES = ["All", "Websites", "Thumbnail", "Video Editing", "SEO Projects"];

const SAMPLE_PROJECTS = [
  {
    id: 1,
    category: "Video Editing",
    title: "Loan company promo — USA",
    type: "video",
    video: "/media/vid/vid1.mp4",
    poster: "/media/promo1-poster.jpg",
    desc: "promotional reel",
  },
  {
    id: 2,
    category: "Websites",
    title: "Real Estate website",
    type: "website",
    img: "/media/web1.png",
    url: "https://nibutherealtor.com",
    desc: "For new york, usa client",
  },
    {
     id: 17,
    category: "Websites",
    title: "E-book website",
    type: "website",
    img: "/media/web3.png",
    url: "https://moneymindx.netlify.app/",
    desc: "Book store",
  },
 
  {
    id: 15,
    category: "Video Editing",
    title: "short edit — Italy",
    type: "video",
    video: "/media/vid/vid2.mp4",
    poster: "/media/promo1-poster.jpg",
    desc: "promotional reel",
  },
  {
    id: 4,
    category: "SEO Projects",
    title: "100 score in seo",
    type: "image",
    img: "/media/seo.png",
    url: "#",
    desc: "Keyword & content lift",
  },
  {
    id: 5,
    category: "Websites",
    title: "Astrologer website",
    type: "website",
    img: "/media/web2.png",
    url: "https://www.accuratefortuneastrology.com/",
    desc: "Astro web for haryana client",
  },
  {
    id: 16,
    category: "Video Editing",
    title: "sample edit — ankit arora",
    type: "video",
    video: "/media/vid/vid3.mp4",
    poster: "/media/promo1-poster.jpg",
    desc: "reel",
  },
  {
    id: 6,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail2.jpg",
    url: "#",
  },
  {
    id: 7,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail3.jpg",
    url: "#",
  },

  {
    id: 8,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail4.jpg",
    url: "#",
  },
  {
    id: 9,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail5.jpg",
    url: "#",
  },
  {
    id: 10,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail6.jpg",
    url: "#",
  },
  {
    id: 11,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail7.jpg",
    url: "#",
  },
  {
    id: 12,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail8.jpg",
    url: "#",
  },
  {
    id: 13,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail9.jpg",
    url: "#",
  },
  {
    id: 14,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail10.jpg",
    url: "#",
  },
   {
    id: 3,
    category: "Thumbnail",
    title: "Thumbnail",
    type: "image",
    img: "/media/thumbnail.jpg",
    url: "#",
  },

];

export default function ShowcaseSection() {
  const [active, setActive] = useState<string>("All");
  const [filtered, setFiltered] = useState(SAMPLE_PROJECTS);

  useEffect(() => {
    setFiltered(
      active === "All"
        ? SAMPLE_PROJECTS
        : SAMPLE_PROJECTS.filter((p) => p.category === active)
    );
  }, [active]);

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0a0f2c] via-[#020617] to-[#000510]"
      aria-label="Showcase section"
    >
      {/* 🌌 Animated Blue Grid Background */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-blue" />
      </div>

      {/* 🔹 Top Fade */}
      <div className="absolute top-0 left-0 w-full h-24 z-10 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />

      {/* 🔹 Sticky Filter Bar */}
      <div className="sticky top-4 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto no-scrollbar">
            <LayoutGroup>
              <div className="flex items-center justify-start gap-4 bg-black/40 backdrop-blur-md rounded-full px-4 py-3 border border-blue-900/30 w-max mx-auto">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`relative text-sm md:text-base font-medium transition-colors px-3 py-1 focus:outline-none whitespace-nowrap ${
                      active === c ? "text-blue-300" : "text-gray-300/90"
                    }`}
                    aria-pressed={active === c}
                  >
                    {c}
                    {active === c && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-[60%] rounded-full bg-blue-400 shadow-[0_0_16px_rgba(56,189,248,0.45)]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </LayoutGroup>
          </div>
        </div>
      </div>

      {/* 🔹 Grid Showcase */}
      <div className="relative max-w-7xl mx-auto px-4 mt-10 z-10">
        <div
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          aria-live="polite"
        >
          {(() => {
            const websiteFirst = filtered.find((p) => p.category === "Websites");
            const rest = filtered.filter((p) => p.id !== (websiteFirst?.id ?? -1));
            const combined = websiteFirst ? [websiteFirst, ...rest] : [...filtered];
            return combined.map((item) => (
              <ProjectCard
                key={item.id}
                project={item}
                largeWebsite={websiteFirst?.id === item.id}
              />
            ));
          })()}
        </div>
      </div>

      {/* 🔻 Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-10 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />

      {/* 🔹 Grid BG Animation CSS */}
      <style jsx>{`
        .bg-grid-blue {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              90deg,
              rgba(56, 189, 248, 0.06) 1px,
              transparent 79px
            ),
            linear-gradient(0deg, rgba(56, 189, 248, 0.04) 1px, transparent 79px);
          background-size: 80px 80px;
          transform: skewY(-6deg) scale(1.02);
          opacity: 0.15;
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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 1280px) {
          .grid > :global(.site-large) {
            grid-column: span 2;
            grid-row: span 1;
          }
        }
      `}</style>
    </section>
  );
}

/* 🔹 Project Card */
function ProjectCard({
  project,
  largeWebsite = false,
}: {
  project: typeof SAMPLE_PROJECTS[number];
  largeWebsite?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState(
    "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
  );
  const [isHover, setIsHover] = useState(false);

  function handleMove(e: React.MouseEvent) {
    if (window.innerWidth < 1024) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * 6;
    const ry = ((x - cx) / cx) * -6;
    setTransform(`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`);
  }

  function handleLeave() {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setIsHover(false);
  }

  function handleEnter() {
    if (window.innerWidth >= 1024) setIsHover(true);
  }

  const wrapperClasses = `relative rounded-2xl overflow-hidden cursor-pointer 
    bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-md 
    border border-blue-900/20 shadow-xl transition-transform 
    will-change-transform ${largeWebsite ? "site-large" : ""}`;

  return (
    <motion.div
      ref={ref}
      className={wrapperClasses}
      style={{ transform, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
    >
      {/* Glow Border */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: isHover
            ? "0 10px 40px rgba(56,189,248,0.15), inset 0 0 30px rgba(56,189,248,0.1)"
            : "none",
          border: isHover
            ? "1px solid rgba(56,189,248,0.3)"
            : "1px solid rgba(255,255,255,0.05)",
          transition: "all 300ms ease",
        }}
      />

      {/* Media */}
      <div
        className={`relative w-full ${
          project.category === "Thumbnail"
            ? "aspect-video" // Thumbnail fixed 16:9
            : project.category === "Video Editing"
            ? "aspect-[9/16]" // 9:16 ratio
            : project.type === "website"
            ? "h-72 sm:h-80 md:h-96"
            : "h-56 sm:h-60 md:h-72"
        }`}
      >
        {project.type === "video" ? (
          <video
            src={project.video}
            poster={project.poster}
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded-md text-left w-fit">
            <div className="text-sm md:text-base font-semibold text-white">
              {project.category === "Thumbnail" ? "Thumbnail" : project.title}
            </div>
            <div className="text-xs text-gray-300/80">{project.desc}</div>
          </div>

          {/* ✅ Visit Button for Websites only */}
          {project.type === "website" && project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-lg 
                bg-blue-500/80 text-white text-sm font-medium shadow-md hover:scale-[1.05] transition"
            >
              Visit →
            </a>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center justify-between text-xs text-gray-400">
        <span>{project.category}</span>
        <span>View →</span>
      </div>
    </motion.div>
  );
}
