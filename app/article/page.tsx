"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES } from "@/constants/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";  

export default function ArticlesPage() {
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
        ease: [0.42, 0, 0.58, 1], // easeInOut as cubic bezier
      },
    },
  };

  const [isIntro, setIsIntro] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-[#050505] min-h-screen text-neutral-100">
     <Navbar
        isIntro={isIntro}
        isMenuOpen={isMenuOpen}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
      />

      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=90"
            alt="SAVORIA restaurant interior"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Multi-layer gradient for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Accent Line + Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-amber-500"></div>
              <span className="text-sm text-amber-400 font-medium tracking-wider uppercase">
                Our Stories
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#F5D0A9] leading-tight mb-6 max-w-4xl">
              Articles & Insights
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-2xl">
              Explore the world of fine dining through our curated collection of
              stories, insights, and culinary journeys. From wine selections to
              plating techniques, discover what makes SAVORIA exceptional.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade to ensure smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
      </section>

      {/* Articles Grid */}
      <section className="bg-[#050505] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {ARTICLES.map((article) => (
              <motion.div key={article.id} variants={itemVariants}>
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </section>
      <Footer/>
    </div>
  );
}