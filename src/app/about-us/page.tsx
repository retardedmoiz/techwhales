export default function AboutUs() {
  return (
    <div className="pt-32 px-6 md:px-12 pb-24">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-24">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter mb-8 text-deep-charcoal">
            The Performance <br/> <span className="text-muted-sage">Engine</span>
          </h1>
        </header>

        <div className="prose prose-lg md:prose-xl text-muted-gray max-w-none">
          <p className="text-2xl text-deep-charcoal font-medium leading-relaxed mb-12">
            TechWhales is a modern digital performance company focused on building scalable traffic ecosystems, search monetization strategies, digital advertising campaigns, and advanced web experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-bold font-heading text-deep-charcoal mb-4">Our Philosophy</h3>
              <p>
                We believe in data-driven decision-making. Every campaign, every line of code, and every strategy we deploy is measured and optimized for maximum ROI. We operate at the intersection of high-speed digital infrastructure and advanced performance marketing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-deep-charcoal mb-4">Global Reach</h3>
              <p>
                Operating multi-country campaign management across 30+ GEOs, we understand the nuances of local search behaviors and intent. Our systems handle high-volume traffic with precision and compliance, establishing long-term relationships with the world's leading advertisers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
