import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { LogoTicker } from "@/components/site/LogoTicker";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Showcase } from "@/components/site/Showcase";
import { SuccessStories } from "@/components/site/SuccessStories";
import { ArrowRight, BarChart3, ShoppingBag, Sparkles, Repeat, MessageSquare, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agency — Direct Response & Performance Marketing" },
      { name: "description", content: "We build creative systems that drive profitable growth for D2C brands." },
    ],
  }),
  component: Home,
});

const services = [
  { 
    title: "Performance Marketing", 
    desc: "Data-driven campaigns across Meta, Google, and TikTok. We lower acquisition costs and scale your ROAS.",
    features: ["Meta & TikTok Ads Management", "Google Search & Shopping", "Conversion Rate Optimization"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Direct Response Creative", 
    desc: "We develop creatives that actually work. From research to production, we build complete systems that scale.",
    features: ["UGC & Video Production", "Static & Motion Graphics", "A/B Testing & Iteration"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Marketplace Scaling", 
    desc: "Expert strategies for Amazon, Flipkart, and Quick Commerce to boost your ROI and market share.",
    features: ["Amazon PPC Management", "Listing Optimization", "Inventory & Forecasting Analytics"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Strategy & Consulting", 
    desc: "You don’t just need more customers; you need a game plan. We act as your outsourced CMO.",
    features: ["Go-To-Market Strategy", "Unit Economics Breakdown", "Competitor & Market Analysis"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
];

const testimonials = [
  { quote: "They manage our performance marketing campaigns across Instagram, facebook, Google, YouTube etc. I am quite happy with the way they manage our account.", author: "Growth Head", company: "MetaShot", rating: 5 },
  { quote: "Been working with them for 3 years. Amazing team and founders. Have helped our business grow over the years, achieving great ROAS.", author: "Ananya Raniwala", company: "Sugar Watchers", rating: 5 },
  { quote: "Their result-oriented approach has helped us identify the right areas to focus on, and we have seen significant improvements. Highly recommend.", author: "Lokesh Meghwal", company: "Julo", rating: 5 },
  { quote: "Within 3 months of partnering, our CPA dropped by 40% while volume doubled. Absolute game changers.", author: "Sarah Jenkins", company: "Luxe Beauty", rating: 5 },
  { quote: "The only agency that actually understands unit economics. They treat our ad spend like their own money.", author: "David Chen", company: "Nomad Gear", rating: 5 },
  { quote: "Incredible attention to detail in creative testing. They found winning angles we never would have thought of.", author: "Marcus Thorne", company: "Verve Nutrition", rating: 4 },
  { quote: "We scaled from 50 orders a day to 500+ under their guidance. Their strategic input goes way beyond just media buying.", author: "Elena Rodriguez", company: "Casa Decor", rating: 5 },
  { quote: "Honest, transparent reporting. No vanity metrics, just real revenue numbers that match our backend.", author: "Tom Hastings", company: "Urban Athletics", rating: 5 },
  { quote: "Their retention strategies and email flows added a baseline 20% bump to our monthly revenue. Phenomenal work.", author: "Priya Patel", company: "Glow Skincare", rating: 5 },
  { quote: "The smoothest onboarding I've ever experienced with an agency. They were launching new campaigns within 48 hours.", author: "James Wilson", company: "TechAccessories Co", rating: 4 },
  { quote: "Finally, an agency that doesn't just set it and forget it. Constant optimization and proactive communication.", author: "Amanda Lewis", company: "FitLife Apparel", rating: 5 },
  { quote: "Their Amazon marketplace scaling strategies completely turned our struggling listings into category bestsellers.", author: "Robert King", company: "Kingston Goods", rating: 5 },
];

function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !trackRef.current) return;
      
      const wrapper = wrapperRef.current;
      const rect = wrapper.getBoundingClientRect();
      const wrapperTop = rect.top;
      const maxScroll = wrapper.offsetHeight - window.innerHeight;
      
      let progress = 0;
      if (wrapperTop <= 0) {
        progress = Math.min(Math.max(-wrapperTop / maxScroll, 0), 1);
      }
      
      const cards = Array.from(trackRef.current.querySelectorAll('.horizontal-stack-card')) as HTMLElement[];
      const totalTransitions = Math.max(cards.length - 1, 1);
      
      cards.forEach((card, i) => {
        card.style.position = 'absolute';
        card.style.top = '0';
        card.style.left = '0';
        card.style.width = '100%';
        card.style.height = '100%';
        card.style.zIndex = i.toString();
        card.style.transition = 'none';
        card.style.transformOrigin = 'left center';

        if (i === 0) {
          const nextProgress = Math.min(Math.max((progress - 0) * totalTransitions, 0), 1);
          const scale = 1 - (nextProgress * 0.05);
          const blur = nextProgress * 4;
          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${1 - nextProgress * 0.4}) blur(${blur}px)`;
        } else {
          const startProgress = (i - 1) / totalTransitions;
          const endProgress = i / totalTransitions;
          
          let cardProgress = 0;
          if (progress > startProgress) {
            cardProgress = Math.min((progress - startProgress) / (endProgress - startProgress), 1);
          }
          
          const finalX = i * 40; 
          const startX = window.innerWidth;
          const currentX = startX - (cardProgress * (startX - finalX));
          
          let scale = 1;
          let blur = 0;
          let brightness = 1;
          
          if (i < totalTransitions) {
            const nextStart = i / totalTransitions;
            const nextCardProgress = Math.min(Math.max((progress - nextStart) * totalTransitions, 0), 1);
            scale = 1 - (nextCardProgress * 0.05);
            blur = nextCardProgress * 4;
            brightness = 1 - nextCardProgress * 0.4;
          }

          card.style.transform = `translateX(${currentX}px) scale(${scale})`;
          card.style.filter = `brightness(${brightness}) blur(${blur}px)`;
          card.style.boxShadow = '-20px 0 50px rgba(0,0,0,0.15)';
        }
      });
      
      const trackOffset = progress * (cards.length - 1) * 40;
      trackRef.current.style.transform = `translateX(-${trackOffset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SiteLayout>
      <section className="hero">
        {/* Colorful Photographic Background Layer */}
        <div className="hero-bg-layer">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop" 
            alt="Creative Agency Workspace" 
            className="hero-bg-img" 
          />
          <div className="hero-bg-overlay"></div>
        </div>
        <div className="container relative z-10">
          <div className="hero-content" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h1 className="hero-title slide-up" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", textWrap: "balance", margin: "0 auto 1.5rem" }}>
              We Build Creative Systems<br />
              That Drive Profitable Growth.
            </h1>
            <p className="hero-desc fade-in-delay" style={{ margin: "0 auto 3rem" }}>
              Partner with us to scale your D2C brand online. From research to production, media buying to optimization, we build complete systems that scale ad spend profitably.
            </p>
            <div className="hero-actions fade-in-delay" style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <Link to="/contact" className="btn-primary">
                Book a Call <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#case-studies" className="btn-secondary">
                Explore Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      <LogoTicker />

      <section className="stats-section">
        <div className="container">
          <div className="section-header center-header">
            <h2 className="section-title">The Numbers Don't Lie</h2>
          </div>
          <div className="stats-grid">

            {/* Card 1 */}
            <div className="stat-card hover-lift">
              <div className="stat-card-accent" style={{ background: "linear-gradient(90deg, rgba(236,72,153,0.8), rgba(168,85,247,0.8))" }} />
              <p className="stat-label">Generated Over</p>
              <p className="stat-value"><Counter end={100} suffix="Cr+" /></p>
              <div className="stat-divider" />
              <p className="stat-desc">In Sales for our partners</p>
            </div>

            {/* Card 2 */}
            <div className="stat-card hover-lift">
              <div className="stat-card-accent" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.8), rgba(20,184,166,0.8))" }} />
              <p className="stat-label">Worked With</p>
              <p className="stat-value"><Counter end={60} suffix="+" /></p>
              <div className="stat-divider" />
              <p className="stat-desc">Ambitious D2C Brands</p>
            </div>

            {/* Card 3 */}
            <div className="stat-card hover-lift">
              <div className="stat-card-accent" style={{ background: "linear-gradient(90deg, rgba(251,191,36,0.8), rgba(249,115,22,0.8))" }} />
              <p className="stat-label">Ads Created</p>
              <p className="stat-value"><Counter end={1000} suffix="+" /></p>
              <div className="stat-divider" />
              <p className="stat-desc">High-converting creatives</p>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section-custom">
        <div className="container">
          
          {/* Row 1: Centered Title */}
          <div className="center-header" style={{ marginBottom: "4rem" }}>
            <h2 className="section-title slide-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "900px", margin: "0 auto", textWrap: "balance" }}>
              We're not an agency.<br/>We're your growth partner.
            </h2>
          </div>

          {/* Row 2: Desc (Left) + Image (Right) */}
          <div className="about-split-grid" style={{ marginBottom: "4rem" }}>
            <div className="about-desc fade-in-delay">
              <p className="hero-desc" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                Most agencies focus on vanity metrics—likes, shares, and clicks. We focus strictly on what matters: <strong>revenue, profit margins, and scalable growth.</strong>
              </p>
              <p className="hero-desc" style={{ textAlign: "left" }}>
                Founded by former brand owners and elite media buyers, we understand the unit economics of scaling a D2C business in today's cutthroat landscape. We don't just run ads; we engineer your entire acquisition funnel.
              </p>
            </div>
            <div className="about-image shadow-wrapper hover-lift" style={{ maxWidth: "450px", marginLeft: "auto" }}>
              <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop" alt="The Team" className="premium-img" style={{ height: "300px", objectFit: "cover", width: "100%", borderRadius: "1.5rem" }} />
            </div>
          </div>

          {/* Row 3: Three Cards */}
          <div className="values-grid">
            <div className="value-card group">
              <div className="value-card-glow" style={{ background: "var(--accent-gradient-1, linear-gradient(135deg, #ec4899, #8b5cf6))" }}></div>
              <div className="value-card-content">
                <div className="value-icon-wrapper">
                  <Sparkles className="w-6 h-6 value-icon-svg" />
                </div>
                <h3 className="value-card-title">Skin in the Game</h3>
                <p className="value-card-desc">We treat your ad spend exactly like it's our own capital. Zero fluff, absolute accountability.</p>
              </div>
            </div>
            
            <div className="value-card group">
              <div className="value-card-glow" style={{ background: "var(--accent-gradient-2, linear-gradient(135deg, #3b82f6, #14b8a6))" }}></div>
              <div className="value-card-content">
                <div className="value-icon-wrapper">
                  <BarChart3 className="w-6 h-6 value-icon-svg" />
                </div>
                <h3 className="value-card-title">Data-Obsessed</h3>
                <p className="value-card-desc">Every creative iteration and scaling decision is driven by hard numbers, not gut feelings.</p>
              </div>
            </div>
            
            <div className="value-card group">
              <div className="value-card-glow" style={{ background: "var(--accent-gradient-3, linear-gradient(135deg, #f59e0b, #ef4444))" }}></div>
              <div className="value-card-content">
                <div className="value-icon-wrapper">
                  <ArrowRight className="w-6 h-6 value-icon-svg" />
                </div>
                <h3 className="value-card-title">Relentless Execution</h3>
                <p className="value-card-desc">We launch faster, test harder, and optimize deeper than anyone else in the industry.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="process-section">
        <div className="container process-grid">
          <div className="process-visual hover-lift">
            <div className="image-wrapper shadow-wrapper">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Campaign Dashboard" className="premium-img" />
            </div>
          </div>
          <div className="process-content">
            <h2 className="section-title">A Dashboard for Real Results</h2>
            <p className="hero-desc" style={{ textAlign: "left", margin: "1.5rem 0" }}>
              We don't do vanity metrics. We give you a clear, data-driven window into how your ad spend is converting into real revenue.
            </p>
            <ul className="checklist">
              <li><CheckCircle2 className="check-icon" /> Granular attribution tracking across all channels.</li>
              <li><CheckCircle2 className="check-icon" /> Real-time ROAS monitoring and scaling decisions.</li>
              <li><CheckCircle2 className="check-icon" /> Transparent reporting with zero fluff.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-section" style={{ padding: 0 }}>
        <div className="horizontal-stack-wrapper" ref={wrapperRef}>
          <div className="horizontal-stack-sticky">
            <div className="container" style={{ width: "100%", marginBottom: "3rem", alignSelf: "flex-start", paddingTop: "2rem" }}>
              <div className="section-header" style={{ marginBottom: 0 }}>
                <div style={{ width: "100%" }}>
                  <h2 className="section-title" style={{ whiteSpace: "nowrap", fontSize: "clamp(1.5rem, 4vw, 3rem)", maxWidth: "100%" }}>We're Your Outsourced CMO</h2>
                  <p className="hero-desc" style={{ marginTop: "1rem", marginBottom: 0, textAlign: "left" }}>
                    Support Your Revenue Growth Better Than Anyone Else.
                  </p>
                </div>
              </div>
            </div>

            <div className="horizontal-stack-container" ref={trackRef}>
              {services.map((s) => (
                <article key={s.title} className="service-card horizontal-stack-card">
                  <div className="service-image-container">
                    <img src={s.image} alt={s.title} className="service-image" loading="lazy" />
                  </div>
                  <div className="service-content" style={{ position: "relative" }}>
                    <h3 className="service-title" style={{ position: "relative", zIndex: 1 }}>{s.title}</h3>
                    <p className="service-desc" style={{ position: "relative", zIndex: 1 }}>{s.desc}</p>
                    <ul style={{ marginTop: "1.5rem", paddingLeft: 0, listStyle: "none", flexGrow: 1, position: "relative", zIndex: 1 }}>
                      {s.features.map(f => (
                        <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", fontSize: "0.95rem", color: "var(--text-color)" }}>
                          <CheckCircle2 className="w-4 h-4" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "1.5rem", position: "relative", zIndex: 1 }}>
                      <Link to="#" className="btn-primary" style={{ width: "100%", justifyContent: "space-between", padding: "1rem 1.5rem", borderRadius: "1rem" }}>
                        <span style={{ fontWeight: 600 }}>Explore More</span>
                        <ArrowRight className="w-4 h-4 btn-arrow" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="studio-section">
        <div className="container process-grid reverse-grid">
          <div className="process-content">
            <h2 className="section-title">Direct Response Creative Built to Convert</h2>
            <p className="hero-desc" style={{ textAlign: "left", margin: "1.5rem 0" }}>
              A world-class media buying team needs a world-class creative engine. Our in-house studio builds the assets that stop the scroll and drive the click.
            </p>
            <Link to="/services" className="btn-primary">
              View Our Creative Work
            </Link>
          </div>
          <div className="process-visual hover-lift">
            <div className="image-wrapper shadow-wrapper" style={{ maxHeight: "350px" }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Creative Studio" className="premium-img" style={{ height: "350px" }} />
            </div>
          </div>
        </div>
      </section>

      <Showcase />

      <WhyChooseUs />

      <SuccessStories />

      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-wrapper">
            {/* Background Effects */}
            <div className="cta-bg-glow orb-1"></div>
            <div className="cta-bg-glow orb-2"></div>
            <div className="cta-grid-overlay"></div>
            
            <div className="premium-cta-content">
              <div className="cta-trust-badge">
                <div className="cta-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span>Trusted by 60+ D2C Brands</span>
              </div>
              
              <h2 className="premium-cta-title">
                Stop Burning Ad Spend.<br />
                <span className="text-gradient">Start Scaling.</span>
              </h2>
              
              <p className="premium-cta-desc">
                Book a strategy call today. We'll audit your current funnel and tell you exactly where you're leaving money on the table—no strings attached.
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
