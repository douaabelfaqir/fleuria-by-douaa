import { ICONS } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="eyebrow">Fleuriste d'exception à Casablanca</span>
          <h1>Des fleurs pour <em>chaque émotion</em></h1>
          <p>
            Fleuria by Douaa crée des bouquets et compositions florales soigneusement
            réalisés, pensés pour accompagner les instants qui comptent vraiment dans
            votre vie.
          </p>
          <div className="hero-actions">
            <a href="#produits" className="btn btn-primary">Découvrir nos fleurs</a>
            <a href="#apropos" className="btn btn-outline">Découvrir notre univers</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="halo"></div>
          <svg viewBox="0 0 400 400" fill="none">
            <g transform="translate(40,10) scale(1.5)" dangerouslySetInnerHTML={{ __html: ICONS["gift-rose"] }} />
            <g transform="translate(150,60) scale(1.1)" dangerouslySetInnerHTML={{ __html: ICONS.tulip }} />
            <g transform="translate(30,180) scale(1.2)" dangerouslySetInnerHTML={{ __html: ICONS.sunflower }} />
            <g transform="translate(190,190) scale(0.9)" dangerouslySetInnerHTML={{ __html: ICONS["rose-red"] }} />
          </svg>
        </div>
      </div>
    </section>
  );
}
