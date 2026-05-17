const projects = [
  {
    emoji: "👔",
    tag: "Social Media",
    title: "Clothing Brand — Facebook Page",
    desc: "Full page setup, cover photo, 10 posts, bio optimization for a Lahore clothing brand.",
    metrics: [
      { val: "10+", lbl: "Posts" },
      { val: "100%", lbl: "Setup" },
    ],
  },
  {
    emoji: "🍽️",
    tag: "Paid Ads",
    title: "Awareness Campaign — Lahore Restaurant",
    desc: "PKR 200 test budget, 4,200 reach, 180 clicks in 3 days — outstanding ROAS.",
    metrics: [
      { val: "4.2K", lbl: "Reach" },
      { val: "180", lbl: "Clicks" },
    ],
  },
  {
    emoji: "🎨",
    tag: "Canva Design",
    title: "Brand Design Kit",
    desc: "Logo, color palette, Instagram posts, Facebook banner — all in Canva.",
    metrics: [
      { val: "20+", lbl: "Assets" },
      { val: "1 Kit", lbl: "Brand" },
    ],
  },
  {
    emoji: "🛒",
    tag: "E-commerce",
    title: "Dropshipping Store",
    desc: "Shopify store with CJ Dropshipping, 8 products listed, Facebook Pixel connected.",
    metrics: [
      { val: "8", lbl: "Products" },
      { val: "Pixel", lbl: "Integrated" },
    ],
  },
  {
    emoji: "📝",
    tag: "SEO",
    title: "SEO Blog — Tech Niche",
    desc: "WordPress site, 2 optimized articles, Yoast green score, submitted to Google.",
    metrics: [
      { val: "Green", lbl: "Yoast Score" },
      { val: "2", lbl: "Articles" },
    ],
  },
  {
    emoji: "▶️",
    tag: "YouTube",
    title: "YouTube Channel Setup",
    desc: "Channel art, 3 thumbnails, script written with ChatGPT, CapCut edit.",
    metrics: [
      { val: "3", lbl: "Thumbnails" },
      { val: "Full", lbl: "Setup" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-header centered">
          <div className="accent-line" />
          <span className="label-sm">Selected Work</span>
          <h2 className="headline-lg mt-4">Portfolio Highlights</h2>
          <p className="body-lg mt-4" style={{ maxWidth: 560, marginInline: "auto" }}>
            Real projects. Real results. A snapshot of work delivered for clients across industries.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p) => (
            <div key={p.title} className="portfolio-card">
              <div className="portfolio-img">
                <div className="overlay" />
                <span style={{ fontSize: 48, position: "relative", zIndex: 1 }}>{p.emoji}</span>
              </div>
              <div className="portfolio-body">
                <div className="portfolio-tag">
                  <span className="chip">{p.tag}</span>
                </div>
                <div className="portfolio-title">{p.title}</div>
                <p className="body-md" style={{ fontSize: 14 }}>{p.desc}</p>
                <div className="portfolio-metrics">
                  {p.metrics.map((m) => (
                    <div key={m.lbl}>
                      <div className="portfolio-metric-val">{m.val}</div>
                      <div className="portfolio-metric-lbl">{m.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
