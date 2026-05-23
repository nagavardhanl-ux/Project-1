import { ArrowRight } from "lucide-react";

const stories = [
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

export function SuccessStories() {
  return (
    <section className="success-stories-section overflow-hidden" id="success-stories">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "4rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
          <h2 className="section-title" style={{ margin: 0 }}>Partner Success Stories</h2>
          <p className="hero-desc" style={{ margin: 0, maxWidth: "600px" }}>
            We don't just run ads. We build scalable revenue engines.
          </p>
        </div>
      </div>

      <div className="success-marquee-container">
        <div className="success-marquee-content">
          {stories.map((story) => (
            <a href={story.link} key={story.id} className="success-slide-card group">
              <div className="success-s-image-wrapper">
                <img src={story.image} alt={story.brand} className="success-s-img" />
                <div className="success-s-badge">{story.category}</div>
              </div>
              <div className="success-s-content">
                <div className="success-s-brand">{story.brand}</div>
                <div className="success-s-metric">{story.metric}</div>
                <div className="success-s-metric-label">{story.metricLabel}</div>
                <p className="success-s-title">{story.title}</p>
              </div>
            </a>
          ))}
          {/* Duplicate for infinite loop */}
          {stories.map((story) => (
            <a href={story.link} key={`dup-${story.id}`} className="success-slide-card group">
              <div className="success-s-image-wrapper">
                <img src={story.image} alt={story.brand} className="success-s-img" />
                <div className="success-s-badge">{story.category}</div>
              </div>
              <div className="success-s-content">
                <div className="success-s-brand">{story.brand}</div>
                <div className="success-s-metric">{story.metric}</div>
                <div className="success-s-metric-label">{story.metricLabel}</div>
                <p className="success-s-title">{story.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
