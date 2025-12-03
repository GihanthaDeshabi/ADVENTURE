// components/BlogPostLayout.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/constants/BlogData'

interface BlogPostLayoutProps {
  post: BlogPost
  recentPosts: BlogPost[]
}

export default function BlogPostLayout({ post, recentPosts }: BlogPostLayoutProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Main Article */}
          <article className="w-full">
            
            {/* Hero Image */}
            <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-sm overflow-hidden shadow-lg mb-6">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              
              {/* Date Overlay */}
              <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-gray-900 uppercase shadow-md">
                {post.date}
              </div>
            </div>

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3">
              <Link href="/blog" className="hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <span>•</span>
              <span>{post.category}</span>
            </nav>

            {/* Post Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <span>By <span className="font-semibold text-gray-700">{post.author}</span></span>
              <span>•</span>
              <span>{post.authorRole}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                {post.content.intro}
              </p>

              {/* Content Sections */}
              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {/* Conclusion */}
              <div className="bg-orange-50 border-l-4 border-[#FF6A2A] p-6 rounded-r-lg my-8">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium italic">
                  {post.content.conclusion}
                </p>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Share This Article
              </p>
              <div className="flex gap-3">
                <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Back to Blog Link */}
            <div className="mt-12">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </article>

          {/* RIGHT COLUMN - Recent Posts Sidebar */}
          <aside className="w-full lg:pl-8 lg:border-l lg:border-gray-200 lg:sticky lg:top-24 lg:self-start">
            
            {/* Section Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
              Related Blogs
            </h3>

            {/* Recent Posts List */}
            <div className="space-y-4">
              {recentPosts.map((recentPost, index) => (
                <Link
                  key={recentPost.id}
                  href={`/blogs/${recentPost.slug}`}
                  className={`
                    block group transition-all duration-200
                    ${index === 0 ? 'p-4 rounded-sm hover:bg-[#f3f3f3]' : 'flex gap-4 py-3 rounded-sm hover:bg-[#f3f3f3]'}
                  `}
                >
                  {/* Featured First Post (Larger) */}
                  {index === 0 ? (
                    <div>
                      {/* Large Thumbnail */}
                      <div className="relative h-32 w-full rounded-sm overflow-hidden mb-3">
                        <Image
                          src={recentPost.imageUrl}
                          alt={recentPost.imageAlt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      </div>

                      {/* Category & Date */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-medium tracking-[0.16em] text-gray-500 uppercase">
                          {recentPost.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {recentPost.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#FF6A2A] transition-colors">
                        {recentPost.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="mt-2 text-xs text-gray-600 line-clamp-2">
                        {recentPost.excerpt}
                      </p>
                    </div>
                  ) : (
                    // Smaller Posts
                    <>
                      {/* Thumbnail */}
                      <div className="relative h-16 w-24 rounded-sm overflow-hidden flex-shrink-0">
                        <Image
                          src={recentPost.imageUrl}
                          alt={recentPost.imageAlt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="96px"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        {/* Category */}
                        <span className="text-[11px] font-medium tracking-[0.16em] text-gray-500 uppercase">
                          {recentPost.category}
                        </span>

                        {/* Title */}
                        <h4 className="mt-1 text-sm font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#FF6A2A] transition-colors">
                          {recentPost.title}
                        </h4>

                        {/* Date */}
                        <p className="mt-1 text-xs text-gray-400">
                          {recentPost.date}
                        </p>
                      </div>
                    </>
                  )}
                </Link>
              ))}
            </div>

            {/* View All Posts Link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-orange-600 transition-colors"
              >
                View All Posts
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}