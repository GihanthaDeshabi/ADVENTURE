'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// NOTE: Add these domains to your next.config.js:
// images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] }

const tripImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    alt: 'Misty mountain peaks at sunrise with fog in valleys',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    alt: 'Winding mountain trail through foggy alpine valley',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    alt: 'Highland sheep grazing in green mountain meadow',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    alt: 'Scenic hiking path along dramatic mountain ridge',
  },
];

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, options]);

  return { ref, isVisible };
};

const FutureTripsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      aria-labelledby="future-trips-heading"
      className="bg-[#e8e4df] py-20 sm:py-20 lg:py-[100px] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column - Image Grid */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {tripImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`
                    relative aspect-[4/3] overflow-hidden rounded-sm sm:rounded-sm
                    transition-all duration-500 ease-out
                    motion-safe:hover:scale-105 hover:shadow-2xl
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  `}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 25vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div
            className={`
              space-y-6 lg:space-y-8
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
            style={{
              transitionDelay: isVisible ? '250ms' : '0ms',
            }}
          >
            <h2
              id="future-trips-heading"
              className="text-5xl sm:text-5xl lg:text-8xl font-extrabold font-dm-sans text-gray-900 leading-tight tracking-tight"
            >
              Future Trips
            </h2>

            <div className="space-y-5 text-black tracking-tight">
              <p className="text-base sm:text-lg lg:text-lg leading-relaxed">
                Looking ahead to future hiking adventures, we're excited to explore new trails
                and breathtaking landscapes. From discovering remote mountain ranges to
                immersing ourselves in diverse cultures and observing incredible wildlife,
                each journey promises unforgettable experiences.
              </p>

              <p className="text-base sm:text-lg lg:text-lg leading-relaxed">
                Whether you prefer solo excursions or group expeditions, our upcoming trips
                offer unique experiences that create lasting memories. Join us as we continue
                to explore the wonders of nature and keep the spirit of adventure alive.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="
                  inline-flex items-center justify-center
                  px-8 py-3.5
                  bg-[#e8e4df] text-gray-900 font-medium text-base
                  border border-gray-300 rounded-lg
                  transition-all duration-300 ease-out
                  hover:bg-[#e8e4df] hover:border-gray-500
                  motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#f5f1ee]
                "
              >
                Choose Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTripsSection;