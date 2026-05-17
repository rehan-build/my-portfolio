export default function About() {
  const features = [
    {
      icon: "📊",
      title: "E-commerce Mastery",
      desc: "Deep-funnel optimization for online retailers looking to scale beyond current plateaus. We don't just drive traffic; we drive purchase intent.",
    },
    {
      icon: "🌍",
      title: "International Expansion",
      desc: "Localized performance strategies for markets in the UK, US, and PK. Navigating cultural nuances to ensure your brand resonates globally.",
    },
    {
      icon: "📈",
      title: "Data-Driven Strategy",
      desc: "Eliminating guesswork with rigorous A/B testing and attribution modeling. Every dollar spent is tracked, measured, and optimized for profit.",
    },
  ];

  const markets = [
    {
      title: "United States & Canada",
      desc: "Hyper-targeted Meta and Google Ads for premium consumer segments.",
    },
    {
      title: "United Kingdom",
      desc: "Efficiency-focused campaigns optimizing CPA in competitive retail sectors.",
    },
    {
      title: "Pakistan & Emerging Markets",
      desc: "Scalable infrastructure for brands ready to lead domestic digital commerce.",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div>
            <div className="section-header">
              <div className="accent-line" />
              <span className="label-sm">About Me</span>
              <h2 className="headline-lg mt-4">
                Certified Digital Marketer from Lahore, Pakistan
              </h2>
            </div>

            <p className="body-lg" style={{ marginBottom: 16 }}>
              I am a certified digital marketing specialist with hands-on experience
              in social media marketing, Facebook &amp; TikTok advertising, Canva content
              creation, Shopify e-commerce, and SEO.
            </p>
            <p className="body-md">
              Based in Lahore, I work with local Pakistani businesses and international
              clients in the UK and US. I offer freelance services and I am available
              for monthly retainers.
            </p>

            <div className="about-feature-list">
              {features.map((f) => (
                <div key={f.title} className="about-feature">
                  <div className="about-feature-icon">{f.icon}</div>
                  <div>
                    <div className="about-feature-title">{f.title}</div>
                    <p className="body-md" style={{ fontSize: 14 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-right">
            <div className="about-card">
              <div className="about-card-title">Core Expertise</div>
              <div className="about-chips">
                {[
                  "Facebook Ads",
                  "TikTok Ads",
                  "Google Ads",
                  "Shopify",
                  "SEO",
                  "WordPress",
                  "Canva",
                  "CapCut",
                  "Social Media",
                  "Email Marketing",
                ].map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-title" style={{ marginBottom: 20 }}>
                The Global Edge
              </div>
              <p className="body-md" style={{ marginBottom: 20 }}>
                We bridge the gap between high-potential markets — from the saturated
                competitiveness of the US, to the rapid digital acceleration in Pakistan.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {markets.map((m) => (
                  <div
                    key={m.title}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      paddingBottom: 12,
                      borderBottom: "1px solid var(--color-outline-subtle)",
                    }}
                  >
                    <span style={{ color: "var(--color-primary)", marginTop: 2 }}>✓</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-on-surface)", marginBottom: 2 }}>
                        {m.title}
                      </div>
                      <div style={{ fontSize: 13, color: "var(--color-on-surface-muted)" }}>{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-card" style={{ background: "rgba(0,212,170,0.04)", borderColor: "rgba(0,212,170,0.2)" }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--color-primary)" }}>✦</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-on-surface)", marginBottom: 4 }}>
                    Open for Work
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-on-surface-muted)" }}>
                    Freelance projects &amp; monthly retainers available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
