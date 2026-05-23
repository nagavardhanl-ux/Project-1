import { ArrowUpRight } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    brand: "Lumina Skincare",
    category: "Beauty & Wellness",
    platform: "Meta Ads",
    metric: "3.2x ROAS",
    metricLabel: "Return on Ad Spend",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    className: "masonry-item-tall",
    accentColor: "rgba(236, 72, 153, 0.8)",
  },
  {
    id: 2,
    brand: "Aura Audio",
    category: "Consumer Electronics",
    platform: "Meta Ads",
    metric: "-42% CPA",
    metricLabel: "Cost Per Acquisition",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200&auto=format&fit=crop",
    className: "masonry-item-wide",
    accentColor: "rgba(99, 102, 241, 0.8)",
  },
  {
    id: 3,
    brand: "Oasis Health",
    category: "Health & Supplements",
    platform: "Google Ads",
    metric: "5.1x ROAS",
    metricLabel: "Return on Ad Spend",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    className: "masonry-item-square",
    accentColor: "rgba(20, 184, 166, 0.8)",
  },
  {
    id: 4,
    brand: "Zenith Watches",
    category: "Luxury Accessories",
    platform: "Meta Ads",
    metric: "180% Scale",
    metricLabel: "Revenue Scale",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
    className: "masonry-item-tall",
    accentColor: "rgba(251, 191, 36, 0.8)",
  },
  {
    id: 5,
    brand: "Ember Coffee",
    category: "Food & Beverage",
    platform: "Meta Ads",
    metric: "2.8x ROAS",
    metricLabel: "Return on Ad Spend",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    className: "masonry-item-wide",
    accentColor: "rgba(249, 115, 22, 0.8)",
  },
];

export function Showcase() {
  return (
    <section className="showcase-section" id="case-studies">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "4rem" }}>
          <div style={{ width: "100%", textAlign: "left" }}>
            <h2 className="section-title">Creative That Converts</h2>
            <p className="hero-desc" style={{ margin: "1rem 0 0", textAlign: "left", whiteSpace: "nowrap" }}>
              A glimpse into the high-performance assets we build for our D2C partners.
            </p>
          </div>
        </div>

        <div className="masonry-grid">
          {showcaseItems.map((item) => (
            <div key={item.id} className={`showcase-card ${item.className}`}>
              {/* Background Image */}
              <img src={item.image} alt={item.brand} className="showcase-img" />

              {/* Dark gradient overlay always visible at bottom */}
              <div className="showcase-gradient" />

              {/* Platform Badge — top left, no emoji */}
              <div className="showcase-platform-badge">
                <span className="showcase-platform-dot" />
                <span>{item.platform}</span>
              </div>

              {/* Bottom info strip — always visible */}
              <div className="showcase-info-strip">
                <div className="showcase-brand-info">
                  <span className="showcase-category">{item.category}</span>
                  <h3 className="showcase-title">{item.brand}</h3>
                </div>
                <div className="showcase-result" style={{ borderColor: item.accentColor }}>
                  <span className="showcase-metric">{item.metric}</span>
                  <span className="showcase-metric-label">{item.metricLabel}</span>
                </div>
              </div>

              {/* Hover overlay — arrow button */}
              <div className="showcase-hover-overlay">
                <button className="showcase-btn" aria-label="View case study">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
