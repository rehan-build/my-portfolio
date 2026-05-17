const testimonials = [
  {
    quote:
      "He set up our Facebook page and ran our first ad campaign. We got 200+ new followers in the first week and our sales inquiries doubled.",
    name: "Ahmed K.",
    role: "Clothing Brand Owner, Lahore",
    initials: "AK",
  },
  {
    quote:
      "Our Shopify store was built professionally with all products listed and SEO done. Very satisfied with the work and communication.",
    name: "Sara M.",
    role: "E-commerce Entrepreneur",
    initials: "SM",
  },
  {
    quote:
      "The Canva designs for our Instagram were exactly what we needed. Clean, professional, and delivered on time.",
    name: "Bilal R.",
    role: "Restaurant Owner, Lahore",
    initials: "BR",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header centered">
          <div className="accent-line" />
          <span className="label-sm">Client Feedback</span>
          <h2 className="headline-lg mt-4">What Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
