"use client";

import { motion, Variants } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  dishImageUrl: string;
  title: string;
  quote: string;
  rating: number;
}

// Move variants outside the component and properly type them
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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
      ease: "easeInOut",
    },
  },
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Lizzy B.",
      role: "Actress",
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      dishImageUrl:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=90",
      title: "A Memorable Feast For The Senses",
      quote:
        "It's more than a meal; it's a memory. The setting was intimate, the staff gracious, and each dish a masterpiece.",
      rating: 5,
    },
    {
      id: 2,
      name: "Nolan Brown",
      role: "CEO",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      dishImageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=90",
      title: "An Opulent And Luxury Experience",
      quote:
        "An extraordinary experience from start to finish. Every detail from the ambiance to the final course was flawless.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-[#050505] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          {/* Left: Accent Line + Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-amber-500"></div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F5D0A9] tracking-wide">
              Dining Testimonials
            </h2>
          </div>

          {/* Right: Tagline */}
          <p className="text-sm md:text-base text-neutral-300 max-w-md md:text-right leading-relaxed">
            Where Every Review is a Testament to Excellence, and Every Visit
            Becomes a Legend
          </p>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-800 mt-6 mb-8 md:mb-12"></div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                avatarUrl={testimonial.avatarUrl}
                dishImageUrl={testimonial.dishImageUrl}
                title={testimonial.title}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;