"use client";

export default function Footer() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rehan-ali-digital-marketer/",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:rehanansari26353@gmail.com",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Logo + copy */}
          <div>
            <a
              href="#"
              style={{
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--color-on-surface)",
              }}
            >
              Rehan<span style={{ color: "var(--color-primary-mid)" }}>.</span>
            </a>
            <p className="footer-copy" style={{ marginTop: 8 }}>
              © 2024 Rehan Ali. Performance Marketing Specialist.
            </p>
            <p className="footer-copy">Lahore, Pakistan.</p>
          </div>

          {/* Nav links */}
          <nav className="footer-links" aria-label="Footer navigation">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons — hover handled by CSS class */}
          <div style={{ display: "flex", gap: 12 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="footer-social-icon"
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
