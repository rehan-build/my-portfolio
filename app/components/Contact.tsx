"use client";
import { useState } from "react";

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: "rehanansari26353@gmail.com",
    href: "mailto:rehanansari26353@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "/in/rehan-ali-digital-marketer",
    href: "https://www.linkedin.com/in/rehan-ali-digital-marketer/",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static version — just simulate send
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--color-bg-dim)" }}>
      <div className="container">
        <div className="section-header centered">
          <div className="accent-line" />
          <span className="label-sm">Get in Touch</span>
          <h2 className="headline-lg mt-4">Let&apos;s Scale Your Brand</h2>
          <p className="body-lg mt-4" style={{ maxWidth: 540, marginInline: "auto" }}>
            Ready to achieve peak performance? Let&apos;s discuss your growth strategy and turn
            your digital presence into a conversion engine.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="contact-info">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-val"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ transition: "color 0.2s" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLAnchorElement).style.color =
                          "var(--color-primary)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLAnchorElement).style.color =
                          "var(--color-on-surface)")
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="contact-val">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div
              style={{
                background: "rgba(0,212,170,0.06)",
                border: "1px solid rgba(0,212,170,0.2)",
                borderRadius: "var(--radius-md)",
                padding: "24px",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Currently Available
                </span>
              </div>
              <p style={{ fontSize: 14, color: "var(--color-on-surface-muted)" }}>
                Open to freelance projects and monthly retainer arrangements.
                Typical response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <div
                style={{
                  background: "rgba(0,212,170,0.08)",
                  border: "1px solid rgba(0,212,170,0.25)",
                  borderRadius: "var(--radius-md)",
                  padding: "48px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    marginBottom: 8,
                  }}
                >
                  Message Sent!
                </div>
                <p style={{ color: "var(--color-on-surface-muted)" }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="e.g. Ahmed Khan"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="ahmed@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="e.g. Facebook Ads for my clothing brand"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project, goals, and budget..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "fit-content" }}>
                  Send Message
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
