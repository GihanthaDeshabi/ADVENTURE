"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const HERO_BG =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=90";

const SIDE_IMAGE =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=90";

interface FormData {
  name: string;
  email: string;
  contact: string;
  seats: string;
  date: string;
  time: string;
}

interface InfoTile {
  label: string;
  value: string;
}

const ReservationPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    seats: "",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const infoTiles: InfoTile[] = [
    {
      label: "Address",
      value: "7th Arrondissement\nParis, France",
    },
    {
      label: "Weekdays",
      value: "9:00 AM - 10:00 PM",
    },
    {
      label: "Weekends",
      value: "9:00 AM - 12:00 PM",
    },
    {
      label: "Contact",
      value: "(626) 282-1022",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    console.log("Reservation Data:", formData);

    setTimeout(() => {
      alert("Reservation confirmed! We look forward to serving you.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        seats: "",
        date: "",
        time: "",
      });
    }, 1000);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-neutral-100">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#050505] text-neutral-100 ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HERO_BG}
            alt="Elegant restaurant setting"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#050505]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-20 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F5D0A9] leading-tight mb-4">
              Reserve Your Experience
            </h1>
            <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Every course ascends toward heaven, & time slows to rhythm of fine
              wine, & unforgettable flavor
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Reservation Card */}
      <section className="bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 pb-20 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-sm border border-neutral-800 bg-[#0b0b0b] overflow-hidden"
          >
            {/* Double Border Frame */}
            <div className="border border-neutral-700/80  m-[1px]">
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Form */}
                <div className="flex-1 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-14">
                  <h2 className="text-lg md:text-xl font-semibold text-[#F5D0A9] mb-6">
                    Dine With Us
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4 text-sm md:text-[15px]">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Email & Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact"
                          className="block text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1"
                        >
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          id="contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 123-4567"
                          className="w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Number of Seats */}
                    <div>
                      <label
                        htmlFor="seats"
                        className="block text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1"
                      >
                        Number of Seats
                      </label>
                      <select
                        id="seats"
                        name="seats"
                        value={formData.seats}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="" className="bg-[#0b0b0b]">
                          Select number of guests
                        </option>
                        <option value="1" className="bg-[#0b0b0b]">
                          1 Guest
                        </option>
                        <option value="2" className="bg-[#0b0b0b]">
                          2 Guests
                        </option>
                        <option value="3" className="bg-[#0b0b0b]">
                          3 Guests
                        </option>
                        <option value="4" className="bg-[#0b0b0b]">
                          4 Guests
                        </option>
                        <option value="5" className="bg-[#0b0b0b]">
                          5 Guests
                        </option>
                        <option value="6" className="bg-[#0b0b0b]">
                          6 Guests
                        </option>
                        <option value="6+" className="bg-[#0b0b0b]">
                          6+ Guests (Private Dining)
                        </option>
                      </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="time"
                          className="block text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1"
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-neutral-700 bg-transparent px-3 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full rounded-md bg-[#B58A62] text-neutral-50 py-3 text-sm md:text-base font-medium tracking-wide hover:bg-[#C5966B] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? "Confirming..." : "Confirm My Reservation"}
                    </button>
                  </form>
                </div>

                {/* Right Side - Image */}
                <div className="relative lg:w-[45%] h-64 sm:h-72 md:h-80 lg:h-auto min-h-[260px] overflow-hidden">
                  <Image
                    src={SIDE_IMAGE}
                    alt="Elegant dining table with wine and gourmet food"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    quality={90}
                  />
                  {/* Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Info Tiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {infoTiles.map((tile, index) => (
              <div
                key={index}
                className="rounded-sm border border-neutral-800 bg-[#0b0b0b] px-4 py-4 hover:border-neutral-700 transition-colors"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1">
                  {tile.label}
                </p>
                <p className="text-sm md:text-[15px] text-neutral-200 whitespace-pre-line">
                  {tile.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;