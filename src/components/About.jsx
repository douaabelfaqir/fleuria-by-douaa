export default function About() {
  return (
    <section id="apropos" style={{ background: "var(--cream)" }}>
      <div className="container about-wrap">
        <div className="about-visual">
          <div className="ring"></div>
          <div className="about-photo">
            <img
              src="https://images.pexels.com/photos/34989978/pexels-photo-34989978.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Bouquet de fleurs roses et blanches tenu à la main, photo réelle"
            />
          </div>
          <p className="photo-credit">Photo : Zariflavin 🌼 / Pexels — « Elegant Floral Bouquet with Pink and White Flowers »</p>
        </div>
        <div className="about-text">
          <span className="eyebrow">Notre histoire</span>
          <h2>Une passion pour les fleurs, un art de les offrir</h2>
          <p>
            Fleuria by Douaa est né d'une passion sincère pour les fleurs et pour
            l'émotion qu'elles transmettent. Chaque création est pensée comme une
            petite œuvre, composée avec soin, créativité et une attention
            particulière portée aux détails.
          </p>
          <p>
            Nous croyons qu'un bouquet n'est jamais un simple objet : c'est un
            message, une attention, un souvenir. C'est pourquoi chaque commande
            est préparée à la main, le jour même, pour vous garantir des fleurs
            toujours fraîches et une composition unique.
          </p>
          <div className="why-list">
            {[
              "Fleurs soigneusement sélectionnées",
              "Créations personnalisées",
              "Livraison rapide et soignée",
              "Attention portée à chaque détail",
            ].map((t) => (
              <div className="why-item" key={t}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
