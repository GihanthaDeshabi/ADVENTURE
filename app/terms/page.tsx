// app/terms-and-conditions/page.tsx
import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Navbar'

import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Terms & Conditions | Oxygen Gym Matara',
  description: 'Terms and conditions for Oxygen Gym Matara membership and services.',
}

export default function TermsConditionsPage() {
  return (
    
    <div className="w-full bg-white">
      <Header />
      {/* Header */}
      <div className="border-b border-gray-100 mt-[150px]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium mb-3">
            LEGAL • TERMS & CONDITIONS
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
            Terms governing your membership and use of Oxygen Gym Matara facilities and services.
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
            <strong>Disclaimer:</strong> These Terms & Conditions are provided as a template and should 
            be reviewed by a qualified attorney to ensure compliance with Sri Lankan laws.
          </p>
        </div>

        {/* Single Paragraph Terms & Conditions */}
        <div className="prose prose-sm sm:prose-base max-w-none">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            By registering for membership, visiting our facilities, or using any services at Oxygen Gym 
            Matara located at No. 123, Anagarika Dharmapala Mawatha, Matara, Sri Lanka, you agree to be 
            bound by these Terms and Conditions. Membership is available to individuals aged 18 and above 
            (minors require parental consent) and requires accurate registration information and adherence 
            to our facility rules including wearing appropriate athletic attire, wiping down equipment after 
            use, respecting other members and staff, and following all safety guidelines. Membership fees 
            are payable in advance according to your selected plan (monthly, quarterly, or annual) via cash, 
            bank transfer, or card, and we reserve the right to modify fees with 30 days' notice. To cancel 
            your membership, you must provide written notice at least 7 days before your next billing date 
            to{' '}
            <a href="mailto:info@oxygengym.com" className="text-[#FF6A2A] hover:underline font-medium">
              info@oxygengym.com
            </a>
            ; membership fees are generally non-refundable except in cases of medical emergency or facility 
            closure, and failed payments may result in membership suspension. Group fitness classes require 
            advance booking, arrive at least 5 minutes early (late arrivals may be denied entry), and cancel 
            at least 2 hours in advance to avoid penalties. You acknowledge that physical exercise carries 
            inherent risks including injury, heart attack, or stroke, and you should consult a physician before 
            beginning any exercise program, especially if you have pre-existing health conditions; our trainers 
            are not medical professionals and do not provide medical advice, and you voluntarily assume all 
            risks associated with using our facilities. To the maximum extent permitted by Sri Lankan law, 
            Oxygen Gym, its owners, employees, and trainers shall not be liable for any injuries, accidents, 
            loss of personal belongings, or damages arising from facility use, and you agree to indemnify us 
            from any claims. We reserve the right to suspend or terminate your membership immediately for 
            violations including non-payment, misconduct, safety violations, or fraudulent activity, and 
            outstanding fees remain due even after termination. These terms are governed by the laws of Sri 
            Lanka with exclusive jurisdiction in Matara courts, and disputes should first be resolved through 
            good-faith negotiation. We may modify these Terms with 30 days' notice via email or posted notices, 
            and your continued use constitutes acceptance; if you disagree, you must cancel before the effective 
            date. Photography and videography require permission, personal training by non-staff is prohibited, 
            and behavior endangering safety will result in immediate termination without refund.
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
            <p>
              <strong>Hours:</strong> Monday – Sunday, 5:00 AM – 10:00 PM
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200 pt-8 mt-10">
          <div>
            <p className="font-medium text-gray-900 mb-1">Need help?</p>
            <p className="text-sm text-gray-600">
              Questions about these terms? Our team is here to help.
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