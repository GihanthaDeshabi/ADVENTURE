// components/ContactSection.tsx
'use client';

import React, { useState } from 'react';

const LocationIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
);

const ClockIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const HandshakeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const contactData: ContactInfo[] = [
  {
    icon: <LocationIcon />,
    label: 'Address',
    value: 'Kyiv, Ukraine, Independence Square 14',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+1 (999) 999-9999',
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'support@ditych.com',
  },
  {
    icon: <ClockIcon />,
    label: 'Working hours',
    value: 'Monday to Friday, 9:00 AM to 5:00 PM (GMT+1)',
  },
  {
    icon: <HandshakeIcon />,
    label: 'Partnerships',
    value: 'partnerships@ditych.com',
  },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    continent: '',
    season: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="py-16 md:py-20 lg:py-24 px-4 md:px-8"
    >
      <div className="max-w-[1400px] lg:mt-[100px] mx-auto ">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1
            id="contact-heading"
            className="text-4xl md:text-5xl lg:text-8xl font-extrabold font-dm-sans text-gray-900 mb-4 tracking-tight"
          >
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl lg:mb-[100px]">
            We value open communication and are here to assist you with any inquiries or
            support you may need. Reach out to us anytime!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[140px]">
          {/* Left Column - Contact Info */}
          <div>
            <div className="space-y-0">
              {contactData.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-4 py-6 ${
                    index !== contactData.length - 1 ? 'border-b border-gray-900/10' : ''
                  }`}
                >
                  <div className="flex-shrink-0 text-gray-900">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-8 uppercase tracking-wide">
                      {item.label}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-dm-sans">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below to start your journey with us.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 gap-2">
              {/* Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Continent */}
              <div>
                <label htmlFor="continent" className="block text-sm font-medium text-gray-900 mb-2">
                  Continent
                </label>
                <select
                  id="continent"
                  name="continent"
                  value={formData.continent}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors duration-200"
                  required
                >
                  <option value="">Select continent</option>
                  <option value="africa">Africa</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="north-america">North America</option>
                  <option value="south-america">South America</option>
                  <option value="oceania">Oceania</option>
                  <option value="antarctica">Antarctica</option>
                </select>
              </div>

              {/* Season */}
              <div>
                <label htmlFor="season" className="block text-sm font-medium text-gray-900 mb-2">
                  Season
                </label>
                <select
                  id="season"
                  name="season"
                  value={formData.season}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors duration-200"
                  required
                >
                  <option value="">Select season</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
                  <option value="winter">Winter</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your adventure plans..."
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors duration-200 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 md:py-3.5 rounded-lg font-medium motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 motion-safe:hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;