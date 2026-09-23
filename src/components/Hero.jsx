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
          <div className="hero-photo">
            <img
              src="https://images.pexels.com/photos/68570/roses-bouquet-congratulations-arrangement-68570.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Bouquet de roses roses pastel, photo réelle"
            />
          </div>
        </div>
      </div>
      <p className="photo-credit" style={{ textAlign: "right", maxWidth: 420, marginLeft: "auto", paddingRight: 28 }}>Photo : Pixabay / Pexels — « Bouquet of Pink Roses »</p>
    </section>
  );
}
