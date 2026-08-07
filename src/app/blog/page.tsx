import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Blog | ${SITE_CONFIG.brand}`,
  description: `Insights on BPO, performance marketing, Meta advertising, SEO, email marketing, and business growth from the ${SITE_CONFIG.brand} team.`,
};

const blogCategories = [
  "All", "BPO & Outsourcing", "Media Buying", "Meta Ads", "SEO",
  "Digital Marketing", "Email Marketing", "Web Development", "Business Growth",
];

const blogPosts = [
  {
    slug: "bpo-vs-in-house",
    category: "BPO & Outsourcing",
    title: "BPO vs. In-House: Why Fast-Growing Companies Are Choosing Both",
    excerpt: "The old debate is settled. Here's how leading companies are blending BPO efficiency with in-house culture to win on both fronts.",
    readTime: "7 min read",
    date: "2025-01-15",
    featured: true,
    color: "#00D4FF",
  },
  {
    slug: "meta-ads-2025",
    category: "Meta Ads",
    title: "Meta Advertising in 2025: What's Actually Working Right Now",
    excerpt: "Creative is king, but structure is queen. We break down the campaign architectures, creative formats, and bidding strategies driving the highest ROAS.",
    readTime: "9 min read",
    date: "2025-01-10",
    featured: true,
    color: "#7B2FFF",
  },
  {
    slug: "email-marketing-reactivation",
    category: "Email Marketing",
    title: "The $0 Revenue Channel You're Ignoring: Email Reactivation",
    excerpt: "Your disengaged list is a sleeping revenue stream. Here's the exact sequence we use to wake it up without burning your sender reputation.",
    readTime: "6 min read",
    date: "2025-01-05",
    featured: false,
    color: "#00B4D8",
  },
  {
    slug: "technical-seo-checklist",
    category: "SEO",
    title: "The Technical SEO Checklist That Moved Our Client to #1",
    excerpt: "A step-by-step breakdown of the exact technical fixes that drove 1,200% organic growth for a financial services client in 12 months.",
    readTime: "11 min read",
    date: "2024-12-20",
    featured: false,
    color: "#00D4FF",
  },
  {
    slug: "outbound-sales-scripts",
    category: "Business Growth",
    title: "Outbound Sales Scripts That Actually Get Responses in 2025",
    excerpt: "Cold calling isn't dead — bad scripts are. We share the exact opening lines, objection handlers, and closes our SDRs use every day.",
    readTime: "8 min read",
    date: "2024-12-15",
    featured: false,
    color: "#7B2FFF",
  },
  {
    slug: "media-buying-fundamentals",
    category: "Media Buying",
    title: "Media Buying 101: How to Stop Wasting Ad Budget",
    excerpt: "Most brands burn 40% of their media budget on poor placements. Here's how to audit, optimize, and reallocate for maximum impact.",
    readTime: "10 min read",
    date: "2024-12-08",
    featured: false,
    color: "#00B4D8",
  },
];

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <section className="min-h-[45vh] flex items-center relative"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}>
        <div className="container mx-auto py-20">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Blog</span>
          </nav>
          <p className="trust-badge mb-6">Insights & Strategy</p>
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6">
            Knowledge that<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              drives growth.
            </span>
          </h1>
        </div>
      </section>

      {/* Categories */}
      <div className="border-b border-white/5 sticky top-20 z-30 bg-[#04070F]/90 backdrop-blur-xl">
        <div className="container mx-auto">
          <div className="flex gap-2 overflow-x-auto py-4">
            {blogCategories.map((cat) => (
              <button key={cat} className="flex-shrink-0 px-4 py-1.5 text-sm font-bold rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          {/* Featured Posts */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="glass rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 group block">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/30">{post.category}</span>
                  <span className="trust-badge text-xs">Featured</span>
                </div>
                <h2 className="text-2xl font-heading font-black mb-3 group-hover:text-cyan-400 transition-colors leading-tight">{post.title}</h2>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-white/30">
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowUpRight size={16} className="text-white/20 group-hover:text-cyan-400 group-hover:rotate-45 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* All Posts */}
          <div className="flex flex-col gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="bg-[#04070F] p-6 flex items-start justify-between gap-6 hover:bg-white/2 transition-colors group">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/30">{post.category}</span>
                    <span className="text-xs text-white/20">{post.date}</span>
                  </div>
                  <h3 className="text-base font-heading font-black mb-1 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                  <p className="text-sm text-white/40 line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-3 pt-1">
                  <span className="text-xs text-white/30 flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  <ArrowUpRight size={16} className="text-white/20 group-hover:text-cyan-400 group-hover:rotate-45 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
