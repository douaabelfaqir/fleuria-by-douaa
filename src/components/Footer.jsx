export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#accueil" className="logo">
              <span className="mark">✿ FLEURIA</span>
              <span className="by">by Douaa</span>
              <span className="tagline">L'art d'offrir des fleurs.</span>
            </a>
            <p className="foot-desc">
              Boutique florale fictive imaginant des bouquets et compositions
              élégantes pour chaque moment de vie.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#produits">Nos fleurs</a></li>
              <li><a href="#occasions">Occasions</a></li>
              <li><a href="#livraison">Livraison</a></li>
              <li><a href="#apropos">À propos</a></li>
            </ul>
          </div>
          <div>
            <h4>Boutique</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#produits">Coffrets cadeaux</a></li>
              <li><a href="#occasions">Mariage</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+212661234567">+212 6 61 23 45 67</a></li>
              <li><a href="mailto:contact@fleuria-douaa.ma">contact@fleuria-douaa.ma</a></li>
              <li><span style={{ color: "#c9beb8", fontSize: 14 }}>Casablanca, Maroc</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Fleuria by Douaa — Boutique fictive</div>
      </div>
    </footer>
  );
}
