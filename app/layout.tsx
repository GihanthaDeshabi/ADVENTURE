import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

// SEO Metadata for SAVORIA Café
export const metadata: Metadata = {
  metadataBase: new URL('https://savoriacafe.com'),

  title: {
    default: "SAVORIA Café — Luxury Dining & Culinary Harmony",
    template: "%s | SAVORIA Café"
  },

  description:
    "Welcome to SAVORIA Café — A refined dining experience blending luxury, artistry, and exceptional flavors. Crafted menus, premium ingredients, and unforgettable ambiance.",

  keywords: [
    "Savoria Café",
    "luxury dining",
    "fine dining Sri Lanka",
    "premium cafe",
    "gourmet cuisine",
    "artisan coffee",
    "culinary experience",
    "restaurant Colombo",
    "cafe Sri Lanka",
    "Savoria restaurant"
  ],

  authors: [{ name: "SAVORIA Café" }],
  creator: "SAVORIA Café",
  publisher: "SAVORIA Café",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://savoriacafe.com",
    siteName: "SAVORIA Café",
    title: "SAVORIA Café — Luxury Dining & Culinary Harmony",
    description:
      "A refined culinary experience with crafted menus, premium ingredients, and harmonious luxury dining.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAVORIA Café — Luxury Dining Experience",
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SAVORIA Café — Luxury Dining & Culinary Harmony",
    description: "Experience elevated dining crafted with passion and precision.",
    creator: "@savoriacafe",
    images: ["/twitter-image.jpg"],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'your-google-verification-code',
  },

  category: 'restaurant',

  other: {
    'contact:phone_number': '+94XXXXXXXXX',
    'contact:email': 'info@savoriacafe.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  // Structured Data (JSON-LD) for SAVORIA Café
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': 'https://savoriacafe.com',
    name: 'SAVORIA Café',
    alternateName: 'SAVORIA Fine Dining',
    description:
      "SAVORIA Café brings an elevated culinary experience with premium ingredients, handcrafted dishes, and luxurious ambiance.",
    url: 'https://savoriacafe.com',
    logo: 'https://savoriacafe.com/logo.png',
    image: 'https://savoriacafe.com/og-image.jpg',
    telephone: '+94XXXXXXXXX',
    email: 'info@savoriacafe.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Colombo',
      addressRegion: 'Western Province',
      postalCode: '00000',
      addressCountry: 'LK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.9271,
      longitude: 79.8612
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '22:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '23:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/savoriacafe',
      'https://www.instagram.com/savoriacafe',
      'https://twitter.com/savoriacafe',
      'https://www.youtube.com/@savoriacafe',
      'https://www.tiktok.com/@savoriacafe'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94XXXXXXXXX',
      contactType: 'Customer Service',
      availableLanguage: ['en', 'si'],
      areaServed: 'LK'
    },
    servesCuisine: ['Continental', 'Fusion', 'Coffee', 'Desserts'],
    hasMenu: 'https://savoriacafe.com/menu',
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>

      <body className="font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
