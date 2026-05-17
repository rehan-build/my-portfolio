"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            Rehan<span>.</span>
          </a>

          <ul className="navbar-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <a href="#contact" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "14px" }}>
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              style={
                menuOpen
                  ? { transform: "translateY(7px) rotate(45deg)" }
                  : {}
              }
            />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span
              style={
                menuOpen
                  ? { transform: "translateY(-7px) rotate(-45deg)" }
                  : {}
              }
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: "8px", width: "fit-content" }}
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
