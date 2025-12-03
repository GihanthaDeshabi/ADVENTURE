"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

interface AmbianceImage {
  id: number;
  url: string;
  alt: string;
  position: "up" | "down";
}

const AmbianceSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimationControls();

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll-based horizontal animation on desktop
  useEffect(() => {
    if (isMobile) return;

    let isScrolling = false;
    let scrollAccumulator = 0;
    const maxScroll = 100; // Total scroll needed to complete animation

    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInView) {
        // Section is sticky, handle horizontal scroll
        if (scrollProgress < 1) {
          e.preventDefault();
          
          scrollAccumulator += e.deltaY;
          scrollAccumulator = Math.max(0, Math.min(maxScroll, scrollAccumulator));
          
          const progress = scrollAccumulator / maxScroll;
          setScrollProgress(progress);
          
          // Transform to horizontal movement (-60% at completion)
          controls.start({ x: `${progress * -60}%` });
        } else if (e.deltaY < 0) {
          // Scrolling up and already at end, allow reverse
          e.preventDefault();
          
          scrollAccumulator += e.deltaY;
          scrollAccumulator = Math.max(0, Math.min(maxScroll, scrollAccumulator));
          
          const progress = scrollAccumulator / maxScroll;
          setScrollProgress(progress);
          controls.start({ x: `${progress * -60}%` });
        }
        // else: scrollProgress is 1 and scrolling down - allow natural scroll
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isMobile, scrollProgress, controls]);

  // High-quality luxury restaurant images
  const images: AmbianceImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90",
      alt: "Modern restaurant interior",
      position: "up",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=90",
      alt: "Elegant dining space",
      position: "down",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=90",
      alt: "Fine dining presentation",
      position: "up",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90",
      alt: "Upscale restaurant design",
      position: "down",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1600&q=90",
      alt: "Luxury table setting",
      position: "up",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=90",
      alt: "Contemporary dining room",
      position: "down",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1600&q=90",
      alt: "Artistic restaurant space",
      position: "up",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1600&q=90",
      alt: "Premium ambiance",
      position: "down",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#050505] py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          {/* Left: Accent Line + Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-amber-500"></div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F5D0A9] tracking-wide">
              The Ambiance
            </h2>
          </div>

          {/* Right: Description */}
          <p className="text-sm md:text-base text-neutral-300 max-w-md md:text-right leading-relaxed">
            Where gilded whispers and candlelight compose an evening of warmth,
            elegance, and quiet allure.
          </p>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-800 mb-8 md:mb-12"></div>
      </div>

      {/* Gallery - Conditional Rendering */}
      {isMobile ? (
        // Mobile: Simple Vertical Grid
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative rounded-sm overflow-hidden border border-neutral-700/70 bg-black/40 aspect-[3/4]"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, 320px"
                  quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop: Horizontal Scroll Animation
        <>
          <div className="relative py-8 md:py-12">
            <motion.div
              animate={controls}
              initial={{ x: "0%" }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
              className="flex gap-2 md:gap-8 will-change-transform px-4 sm:px-6 lg:px-8"
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className={`
                    group relative rounded-sm overflow-hidden 
                    border border-neutral-700/70 bg-black/40 
                    min-w-[200px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[280px]
                    h-[300px] sm:h-72 md:h-80 lg:h-[516px]
                    flex-shrink-0 
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)] 
                    transition-all duration-500
                    ${image.position === "up" ? "mt-0" : "mt-12 md:mt-16 lg:mt-20"}
                  `}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    quality={90}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Hint */}
          <div className="text-center mt-8 md:mt-10">
            <p className="text-xs text-neutral-500 tracking-wider">
              SCROLL TO EXPLORE OUR SPACES
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default AmbianceSection;