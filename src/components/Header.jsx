import { useEffect, useState } from "react";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#produits", label: "Nos fleurs" },
  { href: "#occasions", label: "Occasions" },
  { href: "#livraison", label: "Livraison" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

function Logo({ dark }) {
  return (
    <a href="#accueil" className="logo">
      <span className="mark">✿ FLEURIA</span>
      <span className="by">by Douaa</span>
      <span className="tagline">L'art d'offrir des fleurs.</span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="site-header" className={scrolled ? "scrolled" : ""}>
        <div className="nav-wrap">
          <Logo />
          <nav className="desktop-nav">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="nav-cta">
            <button
              className="hamburger"
              aria-label="Ouvrir le menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
