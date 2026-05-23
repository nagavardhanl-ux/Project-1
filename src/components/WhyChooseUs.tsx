import { Target, TrendingUp, LineChart, Cpu } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="bento-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "4rem" }}>
          <div style={{ width: "100%", textAlign: "left" }}>
            <h2 className="section-title">Not Just Another Agency</h2>
            <p className="hero-desc" style={{ marginTop: "1rem", marginBottom: 0, textAlign: "left" }}>
              Why leading D2C brands trust us to handle their growth.
            </p>
          </div>
        </div>

        <div className="bento-grid">
          {/* Box 1: The Growth Partner (Large) */}
          <div className="bento-cell bento-large group hover-lift" style={{ padding: 0 }}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, mixBlendMode: 'luminosity' }} alt="Team" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1))' }} />
            <div className="bento-content" style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
              <div className="bento-icon-wrapper">
                <Target className="w-8 h-8" />
              </div>
              <div className="bento-text">
                <h3 className="bento-title">The Growth Partner</h3>
                <p className="bento-desc">We aren't a traditional agency. We embed ourselves as your outsourced CMO, taking complete ownership of your revenue growth.</p>
                <div className="bento-stat">
                  <span className="bento-stat-num">24/7</span>
                  <span className="bento-stat-label">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2: Performance First (Horizontal) */}
          <div className="bento-cell bento-horizontal group hover-lift" style={{ padding: 0, flexDirection: 'row' }}>
            <div className="bento-content" style={{ padding: '2rem', flex: 1, justifyContent: 'center' }}>
              <h3 className="bento-title">Performance Over Promises</h3>
              <p className="bento-desc">We don't do vanity metrics. We scale your bottom line and optimize unit economics.</p>
              <div className="bento-stat-row">
                <div className="bento-stat">
                  <span className="bento-stat-num">3.8x</span>
                  <span className="bento-stat-label">Avg. ROAS</span>
                </div>
                <div className="bento-stat">
                  <span className="bento-stat-num">$12M+</span>
                  <span className="bento-stat-label">Ad Spend</span>
                </div>
              </div>
            </div>
            <div style={{ width: '40%', position: 'relative' }} className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} alt="Analytics" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-color) 0%, transparent 50%)' }} />
            </div>
          </div>

          {/* Box 3: Data-Driven (Square) */}
          <div className="bento-cell bento-square group hover-lift" style={{ padding: 0 }}>
            <div style={{ height: '40%', position: 'relative', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Data" />
            </div>
            <div className="bento-content" style={{ padding: '1.5rem', flex: 1 }}>
              <h3 className="bento-title" style={{ fontSize: '1.25rem' }}>Data-Driven</h3>
              <p className="bento-desc" style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>Every decision is backed by rigorous testing.</p>
              <div className="bento-stat" style={{ marginTop: 'auto' }}>
                <span className="bento-stat-num" style={{ fontSize: '1.75rem' }}>100%</span>
                <span className="bento-stat-label">Attribution</span>
              </div>
            </div>
          </div>

          {/* Box 4: Bespoke Roadmaps (Square) */}
          <div className="bento-cell bento-square group hover-lift" style={{ padding: 0 }}>
            <div style={{ height: '40%', position: 'relative', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Strategy" />
            </div>
            <div className="bento-content" style={{ padding: '1.5rem', flex: 1 }}>
              <h3 className="bento-title" style={{ fontSize: '1.25rem' }}>Bespoke Strategies</h3>
              <p className="bento-desc" style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>Custom growth roadmaps tailored to your market.</p>
              <div className="bento-stat" style={{ marginTop: 'auto' }}>
                <span className="bento-stat-num" style={{ fontSize: '1.75rem' }}>0</span>
                <span className="bento-stat-label">Templates Used</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
