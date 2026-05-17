export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-inner">
          {/* Left — Copy */}
          <div>
            <div className="hero-overline">
              <div className="hero-overline-dot" />
              <span className="label-sm">Available for freelance projects</span>
            </div>

            <h1 className="display-xl hero-title">
              Hi, I&apos;m{" "}
              <span className="teal">Rehan Ali</span>
            </h1>

            <p className="body-lg hero-desc">
              Digital Marketing Specialist helping businesses in Pakistan and worldwide
              grow their sales using social media, paid ads, and e-commerce.
            </p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline">Let&apos;s Talk</a>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Facebook Ads", "Shopify", "Canva", "SEO", "TikTok Ads", "WordPress"].map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">20+</div>
                <div className="hero-stat-label">Projects Delivered</div>
              </div>
              <div>
                <div className="hero-stat-value">3</div>
                <div className="hero-stat-label">Countries Served</div>
              </div>
              <div>
                <div className="hero-stat-value">150%</div>
                <div className="hero-stat-label">Avg. ROI Boost</div>
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="hero-visual">
            <img
              src="/rehan.jpg"
              alt="Rehan Ali"
              className="hero-avatar"
            />
            <div className="hero-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Lahore, Pakistan
            </div>
            <div className="hero-social">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/rehan-ali-digital-marketer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:rehanansari26353@gmail.com" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
