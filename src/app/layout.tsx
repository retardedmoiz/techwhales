import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.seo.title,
    template: `%s | ${SITE_CONFIG.brand}`,
  },
  description: SITE_CONFIG.seo.description,
  keywords: [
    "BPO",
    "Business Process Outsourcing",
    "Performance Marketing",
    "Lead Generation",
    "Meta Advertising",
    "Web Development",
    "Digital Marketing",
    "IT Consulting",
    "TechWhales",
    "United Tech LLC",
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.brand,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.brand,
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: [
      {
        url: SITE_CONFIG.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand} - Premium Digital Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: [SITE_CONFIG.seo.ogImage],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.legalName,
  alternateName: SITE_CONFIG.brand,
  url: SITE_CONFIG.siteUrl,
  logo: `${SITE_CONFIG.siteUrl}/logo.svg`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: SITE_CONFIG.contact.general,
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      email: SITE_CONFIG.contact.support,
      contactType: "technical support",
    },
  ],
  sameAs: Object.values(SITE_CONFIG.social),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <PageLoader />
        <CustomCursor />
        <SmoothScroll>
          <Navigation />
          <main className="relative z-10 w-full min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
