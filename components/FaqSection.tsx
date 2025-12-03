// components/FaqSection.tsx
'use client';

import React, { useState } from 'react';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        id: 'payment-methods',
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For group bookings, we also offer flexible payment plans to make your adventure more accessible.',
      },
      {
        id: 'charge-time',
        question: 'When will my credit card be charged for my booking?',
        answer:
          'Your credit card will be charged immediately upon confirmation of your booking. For trips scheduled more than 60 days in advance, we offer a deposit option where 50% is charged upfront and the remainder 30 days before departure.',
      },
      {
        id: 'refunds',
        question: 'Do you offer refunds for cancellations?',
        answer:
          'Yes, we offer refunds based on our cancellation policy. Cancellations made 30+ days before departure receive a full refund minus a small processing fee. Cancellations within 14-30 days receive 50% refund, and cancellations within 14 days are non-refundable unless you reschedule.',
      },
    ],
  },
  {
    id: 'payment',
    title: 'Payment',
    items: [
      {
        id: 'bring-on-hike',
        question: 'What should I bring on a hike?',
        answer:
          'Essential items include proper hiking boots, weather-appropriate clothing in layers, a daypack, water bottles (at least 2L), sunscreen, hat, snacks, and a basic first-aid kit. We provide a detailed packing list specific to your chosen trip upon booking.',
      },
      {
        id: 'pets',
        question: 'Are pets allowed on your hikes?',
        answer:
          'Unfortunately, pets are not allowed on our group hikes due to safety regulations and wilderness area restrictions. However, we do offer select private tours where well-behaved dogs may be permitted with advance approval.',
      },
      {
        id: 'prepare',
        question: 'How do I prepare for a hike with your company?',
        answer:
          'We recommend starting a fitness routine 4-6 weeks before your trip, focusing on cardio and leg strength. Practice hiking with a loaded backpack if overnight camping is involved. We send detailed preparation guides including training tips, gear recommendations, and what to expect.',
      },
    ],
  },
  {
    id: 'policy',
    title: 'Our policy',
    items: [
      {
        id: 'cancellation-policy',
        question: 'What is your cancellation policy?',
        answer:
          'Our cancellation policy is designed to be fair to both participants and our business. Full refunds (minus processing fees) are available for cancellations 30+ days before departure. Between 14-30 days, you receive 50% refund or full credit toward a future trip. Within 14 days, bookings are non-refundable but can be transferred to another participant.',
      },
      {
        id: 'safety',
        question: 'What are your safety protocols?',
        answer:
          'Safety is our top priority. All guides are certified in wilderness first aid and CPR. We carry comprehensive safety equipment including first-aid kits, emergency communication devices, and navigation tools. Weather conditions are monitored continuously, and we maintain strict guide-to-participant ratios to ensure personalized attention.',
      },
      {
        id: 'age-fitness',
        question: 'Do you have age or fitness requirements for your hikes?',
        answer:
          'Requirements vary by trip difficulty. Our beginner trails welcome ages 8+ with moderate fitness. Intermediate trips require age 12+ and good fitness levels. Advanced expeditions are for ages 16+ with excellent physical conditioning. Each trip listing includes specific requirements, and we offer pre-trip consultations to ensure proper placement.',
      },
    ],
  },
];

const PlusIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`motion-safe:transition-transform motion-safe:duration-300 ${
      isOpen ? 'rotate-45' : 'rotate-0'
    }`}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const FaqSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#e8e4df]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2
            id="faq-heading"
            className="text-4xl font-dm-sans md:text-5xl lg:text-8xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            FAQ
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            Find answers to commonly asked questions about our hiking adventures, booking process,
            and policies. Can&apos;t find what you&apos;re looking for? Feel free to contact us
            directly.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] lg:gap-16 lg:mb-[100px]">
          {/* Categories - Desktop */}
          <div className="hidden lg:block ">
            <div className="space-y-12 sticky top-24 ">
              {FAQ_CATEGORIES.map((category) => (
                <div key={category.id}>
                  <h3 className="text-2xl md:text-3xl font-dm-sans lg:mb-[220px] font-light text-gray-900">
                    {category.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-12">
            {FAQ_CATEGORIES.map((category) => (
              <div key={category.id}>
                {/* Category Title - Mobile */}
                <h3 className="lg:hidden text-2xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h3>

                {/* Questions List */}
                <div className="space-y-0">
                  {category.items.map((item, index) => {
                    const isOpen = openItems.has(item.id);
                    return (
                      <div
                        key={item.id}
                        className={`${
                          index !== 0 ? 'border-t border-gray-900/20' : ''
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          aria-expanded={isOpen}
                          aria-controls={`answer-${item.id}`}
                          className="w-full flex items-center justify-between py-6 text-left group"
                        >
                          <span className="text-lg md:text-xl font-medium text-gray-900 pr-8">
                            {item.question}
                          </span>
                          <div className="flex-shrink-0 text-gray-900">
                            <PlusIcon isOpen={isOpen} />
                          </div>
                        </button>

                        <div
                          id={`answer-${item.id}`}
                          className={`
                            overflow-hidden
                            motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out
                            ${
                              isOpen
                                ? 'max-h-[500px] opacity-100 pb-6'
                                : 'max-h-0 opacity-0'
                            }
                          `}
                        >
                          <p className="text-base md:text-lg text-gray-700 leading-relaxed pr-12">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;