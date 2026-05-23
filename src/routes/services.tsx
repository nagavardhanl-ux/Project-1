import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BarChart3, Sparkles, ShoppingBag, Repeat, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Axion Growth" },
      { name: "description", content: "Performance marketing, content, Shopify development, and retention — built to drive real revenue for D2C brands." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    value: "Lower CAC. Higher ROAS.",
    desc: "We run paid media on Meta, Google, and TikTok with one job: turn ad spend into profit. Every campaign is tied to a revenue number, not a click.",
    points: ["Daily spend management", "Creative testing pipeline", "Server-side tracking", "Weekly profit reporting"],
  },
  {
    icon: Sparkles,
    title: "Content That Sells",
    value: "Creative built to convert.",
    desc: "UGC, static ads, motion edits, and creator content. Made fast, tested often, and shipped against a clear winning-ad rate.",
    points: ["20+ new ads / month", "UGC creator network", "Winning-ad iteration", "Hook + script testing"],
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    value: "Stores that lift conversion.",
    desc: "Fast, clean, custom Shopify builds. Built for speed, AOV, and mobile. Your store should sell while you sleep.",
    points: ["Custom theme builds", "Speed + Core Web Vitals", "A/B tested PDPs", "Subscription + bundles"],
  },
  {
    icon: Repeat,
    title: "Retention & Email",
    value: "Repeat revenue, on autopilot.",
    desc: "Klaviyo flows, SMS, and lifecycle systems that turn one-time buyers into a loyal base. 30%+ of revenue from owned channels.",
    points: ["Welcome + abandon flows", "Win-back + VIP", "SMS lifecycle", "Monthly campaign calendar"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="about-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="center-header" style={{ marginBottom: "4rem" }}>
            <h1 className="section-title slide-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", maxWidth: "900px", margin: "0 auto", textWrap: "balance" }}>
              Services built around <span className="text-gradient">revenue.</span>
            </h1>
            <p className="hero-desc slide-up" style={{ marginTop: "1.5rem", maxWidth: "600px", marginInline: "auto" }}>
              Four core disciplines. Each one tied to a measurable business outcome to scale your D2C brand.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-services-section">
        <div className="container">
          <div className="ps-grid">
            {services.map((s) => (
              <article key={s.title} className="ps-card group">
                {/* Glowing Bloom Background (Hidden by default, blooms on hover) */}
                <div className="ps-card-glow"></div>
                
                <div className="ps-card-content">
                  <div className="ps-header">
                    <div className="ps-icon-wrapper">
                      <s.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="ps-badge">{s.value}</span>
                  </div>
                  
                  <h2 className="ps-title">{s.title}</h2>
                  <p className="ps-desc">{s.desc}</p>
                  
                  <ul className="ps-points">
                    {s.points.map((p) => (
                      <li key={p} className="ps-point">
                        <div className="ps-check-wrapper">
                          <Check className="w-3.5 h-3.5 text-accent" />
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
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
                Want a custom <span className="text-gradient">growth plan?</span>
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
