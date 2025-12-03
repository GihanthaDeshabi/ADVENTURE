// components/OurTeamSection.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// NOTE: Add these domains to your next.config.js:
// images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] }

const ArrowIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 'emily',
    name: 'Emily Turner',
    role: 'Lead Guide',
    bio: 'With over 10 years of experience leading expeditions across remote wilderness areas, Emily brings unmatched expertise and passion to every adventure.',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80',
  },
  {
    id: 'sarah',
    name: 'Sarah Lee',
    role: 'Adventure Coordinator',
    bio: 'Sarah specializes in crafting personalized outdoor experiences, ensuring every trip is perfectly tailored to your adventure goals and comfort level.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
  },
  {
    id: 'david',
    name: 'David Roberts',
    role: 'Wilderness Expert',
    bio: 'A certified wilderness survival instructor, David ensures all participants are equipped with essential skills and knowledge for safe, memorable journeys.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
];

const OurTeamSection: React.FC = () => {
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);

  return (
    <section
      aria-labelledby="team-heading"
      className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#e8e4df]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2
            id="team-heading"
            className="text-4xl md:text-5xl lg:text-8xl font-dm-sans font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Our Team
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            Meet the passionate adventurers behind every expedition. Our experienced guides and
            coordinators are dedicated to making your outdoor experience safe, memorable, and
            transformative.
          </p>
        </div>

        {/* Team Cards - Desktop */}
        <div className="hidden lg:flex gap-2 h-[600px]">
          {teamMembers.map((member) => {
            const isActive = activeMemberId === member.id;
            return (
              <div
                key={member.id}
                className={`
                  relative rounded-sm font-dm-sans overflow-hidden cursor-pointer
                  transition-all duration-700 ease-in-out
                  ${isActive ? 'flex-[2]' : 'flex-[1]'}
                `}
                onMouseEnter={() => setActiveMemberId(member.id)}
                onMouseLeave={() => setActiveMemberId(null)}
                onFocus={() => setActiveMemberId(member.id)}
                onBlur={() => setActiveMemberId(null)}
                tabIndex={0}
                role="button"
                aria-label={`View ${member.name}'s profile`}
              >
                {/* Background Image */}
                <div
                  className={`
                    absolute inset-0
                    transition-opacity duration-700 ease-in-out
                    ${isActive ? 'opacity-0' : 'opacity-100'}
                  `}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Active State - Red Background */}
                <div
                  className={`
                    absolute inset-0 bg-[#ff5b3b]
                    transition-opacity duration-700 ease-in-out
                    ${isActive ? 'opacity-100' : 'opacity-0'}
                  `}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                  {isActive ? (
                    <>
                      {/* Active Content */}
                      <div>
                        <h3 className="text-3xl font-dm-sans md:text-4xl font-bold text-white mb-3">
                          {member.name}
                        </h3>
                        <p className="text-lg text-white/90 mb-4">{member.role}</p>
                        <p className="text-base text-white/90 leading-relaxed max-w-md">
                          {member.bio}
                        </p>
                      </div>
                      {/* Arrow Icon */}
                      <div className="self-end">
                        <div className="w-12 h-12 border-2 border-white rounded-sm flex items-center justify-center text-white">
                          <ArrowIcon />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Default Content */}
                      <div />
                      <div>
                        <h3 className="text-2xl md:text-3xl font-dm-sans font-bold text-white">
                          {member.name}
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Cards - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative h-96 rounded-sm overflow-hidden"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-white/90 mb-3">{member.role}</p>
                <p className="text-sm text-white/80 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;