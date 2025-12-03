"use client";

import Image from "next/image";
import { useState } from "react";

interface DishCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  index?: number;
}

export default function DishCard({ 
  title, 
  description, 
  imageUrl, 
  index = 0 
}: DishCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative flex flex-col rounded-lg border border-neutral-800 overflow-hidden bg-black/40 group transition-all duration-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:border-[#E8B4A0]/40"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image Container - INCREASED HEIGHT */}
      <div className="relative h-[350px] md:h-[420px] lg:h-[480px] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          priority={index === 0}
        />
        
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
        )}

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

        {/* Decorative corner accent */}
        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#E8B4A0]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Dish Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 pb-6 z-10">
        <h3 className="text-base md:text-lg font-light text-[#F5D0A9] tracking-wide group-hover:text-[#E8B4A0] transition-colors duration-300 mb-2">
          {title}
        </h3>
        
        {description && (
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        {/* Decorative line */}
        <div className="w-12 h-[2px] bg-[#E8B4A0]/60 group-hover:w-20 transition-all duration-500" />
      </div>
    </div>
  );
}