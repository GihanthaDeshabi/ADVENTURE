"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import Link from "next/link";
import ArticleCard from "./ArticleCard";
import { getFeaturedArticles } from "@/constants/articles";

const NewsArticlesSection = () => {
  const featuredArticles = getFeaturedArticles(2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="w-full bg-[#050505] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          {/* Left: Accent Line + Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-amber-500"></div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F5D0A9] tracking-wide">
              News & Articles
            </h2>
          </div>

          {/* Right: Tagline */}
          <p className="text-sm md:text-base text-neutral-300 max-w-md md:text-right leading-relaxed">
            Discover the stories behind every plate, every pour, & every perfect
            evening.
          </p>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-800 mt-6 mb-8 md:mb-12"></div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {featuredArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 md:mt-12"
        >
          <Link
            href="/article"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 text-neutral-900 text-sm font-semibold hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Articles
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default NewsArticlesSection;