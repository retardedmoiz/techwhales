import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import AboutPage from "./about-page";

export const metadata: Metadata = {
  title: `About Us | ${SITE_CONFIG.brand}`,
  description: `Learn about ${SITE_CONFIG.brand} — our story, mission, vision, core values, and the leadership team driving premium digital agency services.`,
  openGraph: {
    title: `About ${SITE_CONFIG.brand} | Our Story & Mission`,
    description: `Founded to solve the gap between strategy and execution — ${SITE_CONFIG.legalName} operates ${SITE_CONFIG.brand} to scale businesses without limits.`,
    url: `${SITE_CONFIG.siteUrl}/about`,
  },
};

export default function Page() {
  return <AboutPage />;
}
