"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import FeatureTile from "./FeatureTile";

const aboutImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80";

const features = [
  {
    title: "Timeless Heritage",
    description: "Signature dishes that evolve with inspiration and culture",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "World-Class Dishes",
    description: "Signature 7–10 course tasting menus are available",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Emotion & Elegance",
    description: "Evenings enhanced by the timeless charm of live music",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "Unmatched Experience",
    description: "Personalized service from a dedicated host",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // Use cubic-bezier array instead of string
      },
    },
  };

  return (
    <section className="w-full bg-[#050505] py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8B4A0]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F5D0A9]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"
        >
          {/* Left: Title with accent line */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-[#E8B4A0]" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F5D0A9] font-normal tracking-wide">
              About Us
            </h2>
          </div>

          {/* Right: Description */}
          <p className="text-sm md:text-base text-neutral-300 max-w-md md:text-right leading-relaxed">
            Discover the story behind our passion for refined cuisine and exquisite ambiance
          </p>
        </motion.div>

        {/* Divider */}
        <div className="border-b border-neutral-800 mb-8" />

        {/* Main Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-sm border border-neutral-800 bg-[#111111] p-5 md:p-7 lg:p-8 space-y-6 md:space-y-8"
        >
          {/* Top Part: Image + Story Content */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left - Image Panel */}
            <motion.div
              variants={itemVariants}
              className="relative w-full lg:w-1/2 rounded-sm overflow-hidden border border-neutral-700/70 bg-black h-64 sm:h-72 lg:h-auto lg:min-h-[500px]"
            >
              <Image
                src={aboutImage}
                alt="Restaurant exterior at dusk"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              variants={itemVariants}
              className="flex-1 flex flex-col justify-center space-y-4 lg:space-y-5"
            >
              {/* Michelin Badge */}
              <div className="inline-flex items-center gap-2 rounded-sm border border-neutral-700 bg-black/50 px-3 py-1.5 text-xs md:text-sm text-neutral-200 w-fit">
                <svg
                  className="w-4 h-4 text-[#E8B4A0]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span>Michelin Star, 2025</span>
              </div>

              {/* Main Headline */}
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight text-[#F5D0A9]">
                Explore Our Story For Refined Cuisine And Timeless Ambiance
              </h3>

              {/* Body Copy */}
              <p className="text-sm md:text-base text-neutral-300 max-w-xl leading-relaxed">
                Our story is one of growth, exploration, and unforgettable culinary memories — where every chapter is served with elegance. From our humble beginnings to earning international recognition, we remain committed to delivering experiences that transcend the ordinary.
              </p>

              {/* Primary Button */}
              <div>
                <button className="group inline-flex items-center gap-3 rounded-sm border border-neutral-700 bg-black px-5 py-3 text-sm md:text-base text-neutral-100 hover:bg-neutral-100 hover:text-black transition-all duration-300">
                  <span className="font-medium">Explore Our Story</span>
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E8B4A0]/20 group-hover:bg-black/20 transition-colors">
                    <svg
                      className="w-3 h-3 text-[#E8B4A0] group-hover:text-black transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Four Feature Tiles */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t font-dm-sans border-neutral-800"
          >
            {features.map((feature, index) => (
              <FeatureTile
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="border-b border-neutral-800" />
      </div>
    </section>
  );
}