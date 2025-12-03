"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import ArticleCard from "./ArticleCard";
import Navbar from "./Navbar";

import { Article, getSimilarArticles } from "@/constants/articles";
import Footer from "./Footer";

interface ArticleViewPageProps {
  article: Article;
}

const ArticleViewPage = ({ article }: ArticleViewPageProps) => {
  const similarArticles = getSimilarArticles(article.slug, 2);

  return (
    <div className="bg-[#050505] min-h-screen text-neutral-100">
      {/* Article Hero Section */}
      <ArticleHero article={article} />

      {/* Article Content Section */}
      <ArticleContent article={article} />

      {/* Similar Articles Section */}
      <SimilarArticlesSection articles={similarArticles} />
    </div>
  );
};

// ==================== Article Hero ====================
interface ArticleHeroProps {
  article: Article;
}

const ArticleHero = ({ article }: ArticleHeroProps) => {
  return (
    <>
      {/* Hero Background with Title */}
      <section className="relative overflow-hidden">
         <Navbar />
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#050505]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-24 top-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            {/* <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20">
                {article.category}
              </span>
            </div> */}

            {/* Meta Information */}
            <div className="text-xs md:text-sm text-neutral-200 mb-4 flex items-center gap-3">
              <span>{article.date}</span>
              <span className="text-neutral-500">|</span>
              <span>{article.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F5D0A9] leading-tight max-w-3xl">
              {article.title}
            </h1>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-base md:text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Inline Hero Image */}
      <section className="bg-[#050505]">
        <div className="max-w-5xl mx-auto px-4 pb-12 md:pb-16 top-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 rounded-sm overflow-hidden border border-neutral-700/80 bg-black"
          >
            <div className="relative w-full h-72 sm:h-96 md:h-[500px] lg:h-[600px]">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// ==================== Article Content ====================
interface ArticleContentProps {
  article: Article;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  return (
    <section className="bg-[#050505] font-dm-sans">
      <div className="max-w-3xl mx-auto px-4 pb-16 md:pb-24 space-y-10 md:space-y-12">
        {/* Introduction */}
        {article.content.intro && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-neutral-200 leading-relaxed "
          >
            {article.content.intro}
          </motion.div>
        )}

        {/* Content Sections */}
        {article.content.sections.slice(0, 2).map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-xl  text-neutral-100 mb-3 font-dm-sans">
              {section.heading}
            </h2>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              {section.body}
            </p>
          </motion.div>
        ))}

        {/* Image + Quote Block */}
        {article.content.quote && article.contentImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 md:items-center"
          >
            {/* Left: Image */}
            <div className="md:w-1/2">
              <div className="rounded-sm overflow-hidden border border-neutral-700/80 bg-black h-64 sm:h-72 md:h-80">
                <div className="relative w-full h-full">
                  <Image
                    src={article.contentImage}
                    alt={`${article.title} detail`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
              </div>
            </div>

            {/* Right: Quote */}
            <div className="md:w-1/2">
              <blockquote className="font-serif text-lg md:text-2xl leading-relaxed text-[#F5D0A9]">
                "{article.content.quote.text}"
              </blockquote>
              {article.content.quote.author && (
                <p className="text-sm text-neutral-400 mt-4">
                  — {article.content.quote.author}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Remaining Sections */}
        {article.content.sections.slice(2).map((section, index) => (
          <motion.div
            key={index + 2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-neutral-100 mb-3 font-dm-sans">
              {section.heading}
            </h2>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-dm-sans">
              {section.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ==================== Similar Articles Section ====================
interface SimilarArticlesSectionProps {
  articles: Article[];
}

const SimilarArticlesSection = ({ articles }: SimilarArticlesSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="bg-[#050505] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-amber-500"></div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#F5D0A9]">
              Similar Articles
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-300 max-w-md md:text-right leading-relaxed">
            Discover the stories behind every plate, every pour, & every perfect
            evening.
          </p>
        </div>

        <div className="border-b border-neutral-800 mt-6 mb-8"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {articles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default ArticleViewPage;