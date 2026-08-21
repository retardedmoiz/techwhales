import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import SmoothScroll from "@/components/smooth-scroll";
import PageLoader from "@/components/page-loader";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.seo.title,
    template: `%s | ${SITE_CONFIG.brand}`,
  },
  description: SITE_CONFIG.seo.description,
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logo-techwhales.png", type: "image/png" },
    ],
    shortcut: "/logo-techwhales.png",
    apple: "/logo-techwhales.png",
  },
  keywords: [
    "Healthcare BPO",
    "Healthcare BPO Services",
    "Healthcare Live Transfer Contact Center",
    "Healthcare Contact Center Call Center",
    "Business Process Outsourcing Los Angeles",
    "BPO Services United States",
    "Performance Marketing Agency",
    "Affiliate Marketing Management",
    "Living Trust Probate Estate Planning",
    "Tax Resolution Debt Relief",
    "Web Development Custom Apps",
    "United Tech LLC",
    "TechWhales",
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.brand,
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Los Angeles, California",
    "geo.position": "34.0482;-118.2612",
    "ICBM": "34.0482, -118.2612",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.brand,
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}/logo-techwhales.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand} - Enterprise BPO & Corporate Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: [`${SITE_CONFIG.siteUrl}/logo-techwhales.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* Rich GEO & Local Schema.org for Google & AI Search Engines */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": `${SITE_CONFIG.siteUrl}/#organization`,
      name: SITE_CONFIG.legalName,
      alternateName: SITE_CONFIG.brand,
      url: SITE_CONFIG.siteUrl,
      logo: `${SITE_CONFIG.siteUrl}/logo-techwhales.png`,
      image: `${SITE_CONFIG.siteUrl}/logo-techwhales.png`,
      description: SITE_CONFIG.seo.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "744 S Figueroa St",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        postalCode: "90017",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.0482,
        longitude: -118.2612,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: SITE_CONFIG.contact.general,
          contactType: "customer service",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          email: SITE_CONFIG.contact.support,
          contactType: "technical support",
          availableLanguage: ["English"],
        },
      ],
      sameAs: Object.values(SITE_CONFIG.social),
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.siteUrl}/#localbusiness`,
      name: `${SITE_CONFIG.brand} (United Tech LLC)`,
      url: SITE_CONFIG.siteUrl,
      logo: `${SITE_CONFIG.siteUrl}/logo-techwhales.png`,
      priceRange: "$$$",
      telephone: "+1-213-5550199",
      address: {
        "@type": "PostalAddress",
        streetAddress: "744 S Figueroa St",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        postalCode: "90017",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.0482,
        longitude: -118.2612,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.siteUrl}/#website`,
      url: SITE_CONFIG.siteUrl,
      name: SITE_CONFIG.brand,
      description: SITE_CONFIG.seo.description,
      publisher: {
        "@id": `${SITE_CONFIG.siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden w-full">
        <PageLoader />
        <CustomCursor color="#ff4c24">
          <SmoothScroll>
            <Navigation />
            <main className="relative z-10 w-full min-h-screen pt-20">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </CustomCursor>
      </body>
    </html>
  );
}
