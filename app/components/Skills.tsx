"use client";
import { useEffect, useRef } from "react";

const skills = [
  { name: "Facebook & Meta Ads", pct: 92 },
  { name: "Canva Design", pct: 90 },
  { name: "Shopify E-commerce", pct: 85 },
  { name: "SEO & Keyword Research", pct: 82 },
  { name: "TikTok Advertising", pct: 78 },
  { name: "Social Media Marketing", pct: 95 },
  { name: "WordPress & Blogging", pct: 80 },
  { name: "CapCut Video Editing", pct: 75 },
  { name: "Google Ads", pct: 70 },
  { name: "Email Marketing", pct: 72 },
];

const tools = [
  "Meta Business Suite", "Canva Pro", "Shopify", "WordPress",
  "Google Analytics", "CapCut", "ChatGPT", "Google Search Console",
  "Yoast SEO", "Facebook Pixel", "CJ Dropshipping", "Notion",
];

export default function Skills() {
  const fillRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fillRefs.current.forEach((el, i) => {
            if (el) {
              setTimeout(() => {
                el.style.width = `${skills[i].pct}%`;
              }, i * 60);
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}
      style={{ background: "var(--color-bg-dim)" }}>
      <div className="container">
        <div className="section-header centered">
          <div className="accent-line" />
          <span className="label-sm">Expertise Level</span>
          <h2 className="headline-lg mt-4">Skills &amp; Tools</h2>
          <p className="body-lg mt-4" style={{ maxWidth: 520, marginInline: "auto" }}>
            Hands-on proficiency across all major digital marketing platforms and creative tools.
          </p>
        </div>

        <div className="skills-grid" style={{ marginBottom: 64 }}>
          {skills.map((s, i) => (
            <div key={s.name}>
              <div className="skill-name">
                <span>{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  ref={(el) => { if (el) fillRefs.current[i] = el; }}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div style={{ textAlign: "center" }}>
          <div className="label-sm mb-6" style={{ marginBottom: 24 }}>Tools I Use Daily</div>
          <div className="flex flex-wrap gap-3" style={{ justifyContent: "center" }}>
            {tools.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
