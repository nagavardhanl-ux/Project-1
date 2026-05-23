import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Axion Growth" },
      { name: "description", content: "Real D2C results: from 0 to ₹23L in 2 months, 5x ROAS scale, lower CAC. See how we drive revenue." },
    ],
  }),
  component: CaseStudies,
});

const cases = [
  {
    id: 1,
    brand: "Lumina Jewellery",
    category: "Premium Accessories",
    metric: "₹23L",
    metricLabel: "Revenue in 60 Days",
    title: "Scaling a new luxury collection from zero to ₹23L in just two months.",
    image: "/success-stories/success_jewelry_1779537475138.png",
    link: "#"
  },
  {
    id: 2,
    brand: "Verve Ethnic",
    category: "Ethnic Apparel",
    metric: "+50%",
    metricLabel: "MoM Growth",
    title: "From 50L to 75L in a single month by overhauling creative testing.",
    image: "/success-stories/success_apparel_1779537493072.png",
    link: "#"
  },
  {
    id: 3,
    brand: "Aura Home",
    category: "Luxury Homeware",
    metric: "₹1Cr",
    metricLabel: "Generated in 30 Days",
    title: "A journey of ambition and strategy that broke the ₹1 Crore barrier.",
    image: "/success-stories/success_homeware_1779537509907.png",
    link: "#"
  },
  {
    id: 4,
    brand: "Zenith Watches",
    category: "Luxury Accessories",
    metric: "3.2x",
    metricLabel: "Average ROAS",
    title: "Doubling acquisition volume while maintaining strict profitability targets.",
    image: "/success-stories/success_watch_1779537526972.png",
    link: "#"
  },
  {
    id: 5,
    brand: "Glow Skincare",
    category: "Premium Cosmetics",
    metric: "4.5x",
    metricLabel: "Return on Ad Spend",
    title: "Achieved a record 4.5x ROAS by implementing data-driven beauty creatives.",
    image: "/success-stories/success_skincare_1779537542980.png",
    link: "#"
  },
  {
    id: 6,
    brand: "Ember Coffee",
    category: "Specialty Beverage",
    metric: "+120%",
    metricLabel: "DTC Revenue",
    title: "Increased direct-to-consumer revenue by 120% through retention flows.",
    image: "/success-stories/success_coffee_1779537558293.png",
    link: "#"
  }
];

function CaseStudies() {
  return (
    <SiteLayout>
      <section className="about-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="center-header" style={{ marginBottom: "4rem" }}>
            <h1 className="section-title slide-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", maxWidth: "100%", margin: "0 auto", whiteSpace: "nowrap" }}>
              Real numbers. <span className="text-gradient">Real revenue.</span>
            </h1>
            <p className="hero-desc slide-up" style={{ marginTop: "1.5rem", maxWidth: "100%", marginInline: "auto", whiteSpace: "nowrap" }}>
              A selection of D2C brands we've scaled. Every number tied directly to a P&L.
            </p>
          </div>
        </div>
      </section>

      <section className="case-studies-grid-section">
        <div className="container">
          <div className="cs-grid">
            {cases.map((c) => (
              <a href={c.link} key={c.id} className="cs-card group">
                <div className="cs-img-wrapper">
                  <img src={c.image} alt={c.brand} className="cs-img" />
                  <div className="cs-overlay"></div>
                </div>
                <div className="cs-content">
                  <div className="cs-header">
                    <span className="cs-badge">{c.category}</span>
                    <TrendingUp className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="cs-body">
                    <h2 className="cs-brand">{c.brand}</h2>
                    <div className="cs-metric-row">
                      <span className="cs-metric text-gradient">{c.metric}</span>
                      <span className="cs-metric-label">{c.metricLabel}</span>
                    </div>
                    <p className="cs-title">{c.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-cta-section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="premium-cta-wrapper">
            <div className="cta-bg-glow orb-1"></div>
            <div className="cta-bg-glow orb-2"></div>
            <div className="cta-grid-overlay"></div>
            
            <div className="premium-cta-content">
              <h2 className="premium-cta-title">
                Your brand could be <span className="text-gradient">next.</span>
              </h2>
              <p className="premium-cta-desc">
                Book a strategy call today. We'll audit your current funnel and tell you exactly where you're leaving money on the table.
              </p>
              
              <div className="cta-action-wrapper">
                <Link to="/contact" className="god-mode-btn group">
                  <span className="btn-content">
                    Book Your Growth Audit <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="btn-glow-sweep"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
