import Link from "next/link";
import { ArrowUpRight, Mail, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/config";

export default function Footer() {
  const serviceLinks = SERVICES.slice(0, 6);
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white text-black overflow-hidden border-t border-black/10">
      {/* Main Footer Grid */}
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1.5 mb-6">
              <span className="text-xl font-heading font-black tracking-tighter text-black uppercase">
                {SITE_CONFIG.brand}
              </span>
            </Link>
            <p className="text-black/60 text-sm leading-relaxed mb-6 max-w-sm">
              Strategic outsourcing and growth partner. We combine BPO, performance marketing, and custom web development to reduce operational costs and accelerate revenue.
            </p>

            {/* Address & Owner Info */}
            <p className="text-black/60 text-sm leading-relaxed mb-6">
              <strong>Office:</strong> {SITE_CONFIG.address}<br />
              <strong>Owned & Operated by:</strong> {SITE_CONFIG.legalName} (Owner: {SITE_CONFIG.owner})
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${SITE_CONFIG.contact.general}`} className="flex items-center gap-2 text-black/60 hover:text-black transition-colors">
                <Mail size={14} className="text-black/40" />
                {SITE_CONFIG.contact.general}
              </a>
              <div className="flex items-center gap-2 text-black/60">
                <Clock size={14} className="text-black/40" />
                Monday – Friday: 9:00 AM – 6:00 PM EST
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { href: SITE_CONFIG.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: SITE_CONFIG.social.twitter, Icon: Twitter, label: "Twitter" },
                { href: SITE_CONFIG.social.facebook, Icon: Facebook, label: "Facebook" },
                { href: SITE_CONFIG.social.instagram, Icon: Instagram, label: "Instagram" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:border-black transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-5">Services</h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-black/60 hover:text-black transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Info */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-5">Company</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Portfolio", href: "/#portfolio" },
                { name: "Why Partner", href: "/#why-partner" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/60 hover:text-black transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-5">Legal</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Legal Terms & Conditions", href: "/legal" },
                { name: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/60 hover:text-black transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-wider text-black/40 uppercase">
            &copy; {year} {SITE_CONFIG.legalName}. All Rights Reserved.
          </p>
          <p className="text-xs tracking-wider text-black/40 uppercase">
            Designed to match premium standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
