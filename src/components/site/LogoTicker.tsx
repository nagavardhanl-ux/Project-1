const logos = [
  { name: "Google", url: "/logos/google.svg" },
  { name: "Netflix", url: "/logos/netflix.svg" },
  { name: "Spotify", url: "/logos/spotify.svg" },
  { name: "Stripe", url: "/logos/stripe.svg" },
  { name: "Discord", url: "/logos/discord.svg" },
  { name: "Flipkart", url: "/logos/flipkart.svg" },
  { name: "Swiggy", url: "/logos/swiggy.svg" },
  { name: "Zomato", url: "/logos/zomato.svg" },
  { name: "Paytm", url: "/logos/paytm.svg" },
  { name: "Ola", url: "/logos/ola.svg" },
];

export function LogoTicker() {
  const row = [...logos, ...logos];
  return (
    <div className="logo-ticker-section">
      <div className="marquee-container" style={{ padding: "2rem 0" }}>
        <div className="marquee-content" style={{ animationDuration: "50s", alignItems: "center" }}>
          {row.map((logo, i) => (
            <div key={i} className="logo-item">
              <img src={logo.url} alt={logo.name} className="partner-logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
