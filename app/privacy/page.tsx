// app/privacy-policy/page.tsx
import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Navbar'
import Link from "next/link"
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Oxygen Gym Matara',
  description: 'Learn how Oxygen Gym Matara protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white">
      <Header />
      {/* Header */}
      <div className="border-b border-gray-100 mt-[150px]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium mb-3">
            LEGAL • PRIVACY POLICY
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
            Learn how Oxygen Gym Matara collects, uses, and protects your personal information.
          </p>
          <p className="mt-6 text-xs sm:text-sm text-gray-500">
            Last Updated: January 15, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Disclaimer */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-orange-900">
            <strong>Disclaimer:</strong> This privacy policy is provided for informational purposes 
            and should be reviewed by a qualified attorney to ensure compliance with applicable laws.
          </p>
        </div>

        {/* Single Paragraph Privacy Policy */}
        <div className="prose prose-sm sm:prose-base max-w-none">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Oxygen Gym Matara, located at No. 123, Anagarika Dharmapala Mawatha, Matara, Sri Lanka, 
            is committed to protecting your privacy and personal information. When you register for 
            membership, visit our facilities, use our website, or participate in our fitness programs 
            and classes, we collect personal information including your name, contact details, date of 
            birth, emergency contacts, health and fitness goals, payment information (processed securely 
            through third-party providers), class booking preferences, and attendance records. We use 
            this information to manage your membership, process payments, book classes and training 
            sessions, communicate important updates and promotional offers (with your consent), improve 
            our services, ensure facility security, and comply with legal requirements. We do not sell 
            your personal information and only share data with trusted service providers (payment processors, 
            email services), your assigned personal trainers for program customization, and legal authorities 
            when required by law. We implement appropriate security measures including encrypted data storage, 
            secure payment processing, access controls, and regular security audits to protect your information 
            from unauthorized access. You have the right to access, update, delete, or request portability of 
            your personal data, object to certain processing activities, and opt out of marketing communications 
            at any time by contacting us at{' '}
            <a href="mailto:info@oxygengym.com" className="text-[#FF6A2A] hover:underline font-medium">
              info@oxygengym.com
            </a>{' '}
            or calling +94 41 222 3456. We retain your personal information for as long as you maintain an 
            active membership plus an additional period as required by Sri Lankan law for accounting and legal 
            purposes, typically 3 years for inactive members unless you request earlier deletion. Our website 
            uses cookies to enhance functionality and analyze usage patterns; you can manage cookie preferences 
            through your browser settings. We may update this Privacy Policy periodically, and material changes 
            will be communicated via email or notices at our facility at least 30 days before taking effect, 
            with your continued use constituting acceptance of the revised policy.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-[#f3f3f3] border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h2>
          <div className="space-y-1 text-sm text-gray-600">
            <p className="font-semibold text-gray-900">Oxygen Gym Matara</p>
            <p>No. 123, Anagarika Dharmapala Mawatha</p>
            <p>Matara, Sri Lanka</p>
            <p className="pt-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@oxygengym.com" className="text-[#FF6A2A] hover:underline">
                info@oxygengym.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +94 41 222 3456
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200 pt-8 mt-10">
          <div>
            <p className="font-medium text-gray-900 mb-1">Need help?</p>
            <p className="text-sm text-gray-600">
              Questions about this policy? Our team is here to help.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6A2A] text-white text-sm font-medium rounded-md transition-all hover:bg-orange-600 hover:scale-[1.02] whitespace-nowrap"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}