import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Services | ${SITE_CONFIG.brand}`,
  description: `Explore all ${SITE_CONFIG.brand} services: BPO, outbound sales, lead generation, performance marketing, Meta advertising, web development, SEO, and more.`,
};

export default function ServicesPage() {
  const categories = ["operations", "sales", "marketing", "technology", "monetization"];
  const categoryLabels: Record<string, string> = {
    operations: "Operational Infrastructure",
    sales: "Sales & Pipeline",
    marketing: "Performance Marketing",
    technology: "Technology & Web",
    monetization: "Search Monetization",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#fafafa] border-b border-black/10 py-24 md:py-32">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-red-600">Services</span>
          </nav>
          <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-heading font-black tracking-tighter text-black uppercase mb-6 leading-[0.9] max-w-5xl">
            14 Services. <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>One Partner.</span>
          </h1>
          <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
            Stop juggling multiple agencies and disjointed tools. We provide an integrated suite of operational, technical, and marketing capabilities engineered for ruthless efficiency and exponential revenue growth.
          </p>
        </div>
      </section>

      {/* Service Grid by Category */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto">
          {categories.map((cat) => {
            const catServices = SERVICES.filter((s) => s.category === cat);
            if (!catServices.length) return null;
            return (
              <div key={cat} className="mb-24 last:mb-0">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-xl md:text-2xl font-heading font-black uppercase tracking-widest text-black">
                    {categoryLabels[cat]}
                  </h2>
                  <div className="flex-1 h-px bg-black/10" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {catServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group block bg-[#fafafa] border border-black/10 rounded-3xl p-8 md:p-10 hover:bg-white hover:border-red-600/30 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={16} className="text-red-600" />
                      </div>
                      
                      <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform origin-left">{service.icon}</span>
                      
                      <h3 className="text-xl md:text-2xl font-heading font-black mb-4 text-black group-hover:text-red-600 transition-colors uppercase leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-black/60 font-medium leading-relaxed mb-8 h-[60px] line-clamp-3">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 pt-6 border-t border-black/5">
                        {((service.details as any).items || (service.details as any).outbound || (service.details as any).inbound || []).slice(0, 3).map((detail: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-[0.7rem] font-bold uppercase tracking-wider text-black/50 group-hover:text-black/70">
                            <CheckCircle2 size={12} className="mt-0.5 text-red-600 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fafafa] border-t border-black/10 text-center">
        <div className="container mx-auto">
          <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-4">Strategic Mapping</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none">
            Not Sure Which <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #000" }}>Service Fits?</span>
          </h2>
          <p className="text-black/60 max-w-xl mx-auto mb-10 font-medium text-lg">
            Book a strategy session. We'll audit your current infrastructure and map out the exact capabilities you need to scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-colors duration-300"
          >
            Request Audit <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
