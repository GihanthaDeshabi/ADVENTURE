'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const InstagramIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YouTubeIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const DiagonalArrowIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isVisible: boolean;
  delay: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, isVisible, delay }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`
      flex items-center gap-3 sm:gap-4 group 
      motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out 
      hover:bg-white/5 p-2 sm:p-3 -m-2 sm:-m-3 rounded-lg
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}
    style={{
      transitionDelay: isVisible ? `${delay}ms` : '0ms',
    }}
  >
    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/60 rounded text-white group-hover:border-white/80 motion-safe:transition-colors motion-safe:duration-300">
      {icon}
    </div>
    <span className="flex-1 text-white text-sm sm:text-base md:text-lg">{label}</span>
    <div className="text-white/80 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
      <DiagonalArrowIcon />
    </div>
  </a>
);

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isVisible: boolean;
  delay: number;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isVisible, delay }) => (
  <Link
    href={href}
    className={`
      text-white text-base sm:text-lg md:text-xl hover:text-orange-400 
      motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out 
      block
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}
    style={{
      transitionDelay: isVisible ? `${delay}ms` : '0ms',
    }}
  >
    {children}
  </Link>
);

const AdventureFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerTop = footerRef.current.offsetTop;
      const footerHeight = footerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate how close we are to the footer
      const distanceToFooter = footerTop - (scrollY + windowHeight);
      const triggerDistance = windowHeight * 0.3; // Trigger when 30% of viewport away

      // Scroll direction
      const scrollingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;

      // Calculate progress (0 to 1)
      let progress = 0;
      if (distanceToFooter <= triggerDistance) {
        progress = 1 - Math.max(0, distanceToFooter) / triggerDistance;
      }

      // Only show when scrolling down and near footer
      if (scrollingDown && progress > 0.1) {
        setIsVisible(true);
        setScrollProgress(progress);
      } else if (!scrollingDown && scrollY + windowHeight < documentHeight - footerHeight * 0.5) {
        setIsVisible(false);
        setScrollProgress(0);
      }
    };

    // Initial check
    handleScroll();

    // Throttled scroll listener
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const title = 'ADVENTURE';
  const letters = title.split('');

  return (
    <footer
      ref={footerRef}
      aria-label="Site footer"
      className="relative bg-[#181818] text-white overflow-hidden"
      style={{
        transform: `translateY(${isVisible ? 0 : '100%'})`,
        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="relative z-10">
        {/* Top Border Line */}
        {/* <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 xl:pt-24 pb-8 sm:pb-12 lg:pb-16">
          <div
            className={`
              border-t border-white/60
              motion-safe:transition-all motion-safe:duration-1000 motion-safe:ease-out
              origin-center
              ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
            `}
            style={{
              transitionDelay: isVisible ? '300ms' : '0ms',
            }}
          />
        </div> */}

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Title Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 lg:mt-[50px] md:mt-[50px] xl:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold font-dm-sans tracking-tight mb-3 sm:mb-4 md:mb-6">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`
                    inline-block
                    motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    ${letter === 'T' || letter === 'D' ? 'text-[#ff5b3b]' : 'text-white'}
                  `}
                  style={{
                    transitionDelay: isVisible ? `${500 + index * 60}ms` : '0ms',
                  }}
                >
                  {letter}
                </span>
              ))}
            </h2>
            
            {/* Tagline */}
            <div
              className={`
                motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: isVisible ? '1100ms' : '0ms',
              }}
            >
              <p className="text-white/70 text-xs lg:mb-[280px] md:mb-[50px] sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                Your gateway to epic hikes and breathtaking adventures around the globe.
                <br className="hidden sm:block" />
                Discover, explore, and experience the beauty of nature with us.
              </p>
            </div>
          </div>

          {/* Social & Navigation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 mb-12 sm:mb-16 lg:mb-20">
            {/* Social Links */}
            <div className="space-y-4 sm:space-y-6">
              <SocialLink
                href="https://instagram.com"
                icon={<InstagramIcon />}
                label="Instagram"
                isVisible={isVisible}
                delay={1300}
              />
              <SocialLink
                href="https://facebook.com"
                icon={<FacebookIcon />}
                label="Facebook"
                isVisible={isVisible}
                delay={1450}
              />
              <SocialLink
                href="https://youtube.com"
                icon={<YouTubeIcon />}
                label="YouTube"
                isVisible={isVisible}
                delay={1600}
              />
            </div>

            {/* Navigation Links */}
            <div className="space-y-4 sm:space-y-5 lg:text-right">
              <NavLink href="/" isVisible={isVisible} delay={1300}>
                Home
              </NavLink>
              <NavLink href="/trips" isVisible={isVisible} delay={1400}>
                Trips
              </NavLink>
              <NavLink href="/stories" isVisible={isVisible} delay={1500}>
                Stories
              </NavLink>
              <NavLink href="/contact" isVisible={isVisible} delay={1600}>
                Contact us
              </NavLink>
              <NavLink href="/buy" isVisible={isVisible} delay={1700}>
                Buy Template
              </NavLink>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`
              border-t border-white/40 pt-6 sm:pt-8 pb-6 sm:pb-8 lg:pb-10
              motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{
              transitionDelay: isVisible ? '1800ms' : '0ms',
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-white/60 text-xs sm:text-sm">
              <p className="text-center sm:text-left">
                © 2025 Adventure. All rights reserved.
              </p>
              <p className="text-center sm:text-right">
                Designed by Gihantha Deshabi. At SyncosSolutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdventureFooter;