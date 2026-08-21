"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, MapPin, Send, CheckCircle, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { MultiStepForm } from "@/components/ui/multistep-form";

const faqs = [
  { q: "How quickly do you respond to inquiries?", a: "We respond to all inquiries within 24 hours on business days. For urgent matters, email general operations at team@techwhales.com." },
  { q: "Do you offer free consultations?", a: "Yes — our initial strategy session is completely free with no obligation. We'll assess your operational bottlenecks and recommend BPO or marketing setups." },
  { q: "What information should I include in my message?", a: "Tell us your industry, what department tasks you are looking to outsource (customer support, cold calls, development), and your approximate scaling timeline." },
  { q: "Do you work with businesses outside the US?", a: "Yes, we coordinate operations globally. Our BPO teams are situated across optimal time zones to ensure seamless support." },
  { q: "How do you price your services?", a: "Pricing is structure-based or project-based. Outbound SDR or Support campaigns utilize standard hourly or monthly agent rates." },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "", email: "", company: "", service: "", budget: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    "Business Process Outsourcing (BPO)",
    "Performance Marketing / Media Buying",
    "Affiliate Network setup (Everflow)",
    "Custom Web/App Development",
    "HR Talent & Recruiting",
    "Finance Support & Bookkeeping",
    "Other Growth Services",
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#fafafa] border-b border-black/10 py-16 md:py-24">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-xs text-black/50 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-4">
            Start the Conversation.
          </h1>
          <p className="text-black/60 text-sm max-w-xl leading-relaxed">
            Let&apos;s review your operational bottlenecks, outbound appointment setting pipelines, or media campaigns. No sales scripts, just solutions.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Contact Info Sidebar */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-heading font-black uppercase text-black mb-4">Get in Touch</h2>
                <p className="text-black/60 text-sm leading-relaxed">
                  {SITE_CONFIG.brand} operations are run by {SITE_CONFIG.legalName}. We support global teams with reliable outsourcing solutions.
                </p>
              </div>

              {/* Contact Info blocks */}
              <div className="flex flex-col gap-4">
                <a href={`mailto:${SITE_CONFIG.contact.general}`}
                  className="border border-black/10 hover:border-black rounded-2xl p-5 block bg-[#fafafa] transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail size={14} className="text-black/40" />
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-black/55">General Counsel & Strategy</span>
                  </div>
                  <p className="text-sm font-bold text-black">{SITE_CONFIG.contact.general}</p>
                </a>

                <div className="border border-black/10 rounded-2xl p-5 bg-[#fafafa]">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-black/40" />
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-black/55">Business Hours</span>
                  </div>
                  <p className="text-sm font-bold text-black">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                </div>

                <div className="border border-black/10 rounded-2xl p-5 bg-[#fafafa]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-black/40" />
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-black/55">Corporate Address</span>
                  </div>
                  <p className="text-xs text-black/75 leading-relaxed">
                    {SITE_CONFIG.legalName}<br />
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>
            </div>

            {/* MultiStep Interactive Form */}
            <div className="lg:col-span-2 flex justify-center">
              <MultiStepForm 
                theme="light" 
                title="Get a Free Strategy Consultation" 
                subtitle="Answer 4 quick questions so our leadership team can prepare your solution."
                className="max-w-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-black/10 bg-[#fafafa]">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-widest text-black/50 font-bold block mb-2">FAQ</span>
            <h2 className="text-3xl font-heading font-black uppercase text-black">Common Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-black/10 bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  id={`faq-${i}`}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-heading font-black text-sm uppercase">{faq.q}</span>
                  <ChevronDown size={14} className={`flex-shrink-0 text-black/40 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-sm text-black/65 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
