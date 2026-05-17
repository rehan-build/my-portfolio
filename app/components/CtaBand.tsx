export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <span className="label-sm">Ready to Grow?</span>
        <h2 className="headline-lg mt-4" style={{ marginBottom: 16 }}>
          Ready to out-perform your competition?
        </h2>
        <p className="body-lg" style={{ maxWidth: 520, marginInline: "auto", marginBottom: 40 }}>
          Get a tailored performance audit and growth roadmap. No fluff, just pure revenue strategy.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" className="btn btn-primary">
            Get a Free Audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="mailto:hello@rehanali.com" className="btn btn-outline">
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
