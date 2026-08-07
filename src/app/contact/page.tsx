import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import ContactPage from "./contact-page";

export const metadata: Metadata = {
  title: `Contact | ${SITE_CONFIG.brand}`,
  description: `Get in touch with ${SITE_CONFIG.brand}. Book a free consultation, reach our support team, or contact HR. ${SITE_CONFIG.legalName} — ${SITE_CONFIG.domain}`,
  openGraph: {
    title: `Contact ${SITE_CONFIG.brand}`,
    description: `Reach out to ${SITE_CONFIG.brand} — Free consultation, general inquiries, or support.`,
    url: `${SITE_CONFIG.siteUrl}/contact`,
  },
};

export default function Page() {
  return <ContactPage />;
}
