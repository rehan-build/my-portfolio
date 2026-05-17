const services = [
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Facebook & Instagram page setup, content posting, hashtags, and audience growth.",
    tags: ["Facebook", "Instagram", "Content"],
  },
  {
    icon: "🎯",
    title: "Paid Advertising",
    desc: "Campaign setup, audience targeting, ad creative design, and performance tracking.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads"],
  },
  {
    icon: "🎨",
    title: "Canva Content Creation",
    desc: "Posts, stories, banners, logos, thumbnails — branded and ready to publish.",
    tags: ["Canva", "Branding", "Design"],
  },
  {
    icon: "🛒",
    title: "Shopify Store Setup",
    desc: "Complete store design, product listing with SEO, Facebook Pixel integration.",
    tags: ["Shopify", "E-commerce", "Pixel"],
  },
  {
    icon: "🔍",
    title: "SEO & WordPress",
    desc: "Keyword research, blog writing, on-page SEO, Google Search Console setup.",
    tags: ["SEO", "WordPress", "Content"],
  },
  {
    icon: "▶️",
    title: "YouTube & Video Content",
    desc: "Channel setup, thumbnails, scripts, CapCut editing, AI voiceover.",
    tags: ["YouTube", "CapCut", "Video"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--color-bg-dim)" }}>
      <div className="container">
        <div className="section-header centered">
          <div className="accent-line" />
          <span className="label-sm">What I Offer</span>
          <h2 className="headline-lg mt-4">Services That Grow Your Business</h2>
          <p className="body-lg mt-4" style={{ maxWidth: 560, marginInline: "auto" }}>
            From content creation to paid ads — I handle your entire digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <p className="body-md" style={{ fontSize: 14, marginBottom: 20 }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
