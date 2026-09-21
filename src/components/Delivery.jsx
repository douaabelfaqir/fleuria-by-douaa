export default function Delivery() {
  return (
    <section id="livraison">
      <div className="container delivery-wrap">
        <div>
          <span className="eyebrow">Service de livraison</span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,34px)", marginBottom: 20 }}>
            Vos fleurs livrées avec soin à Casablanca
          </h2>
          <ul className="delivery-info-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 8v4l3 3M12 21a9 9 0 100-18 9 9 0 000 18z" />
              </svg>
              <span>Livraison tous les jours de <strong>09h00 à 20h00</strong></span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 12l2-7h14l2 7M5 12v7h14v-7M9 21v-4h6v4" />
              </svg>
              <span>Livraison à Casablanca et ses environs</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
              <span>Livraison le jour même possible, selon la disponibilité du produit</span>
            </li>
          </ul>
        </div>
        <div className="delivery-cards">
          <div className="delivery-card">
            <div className="label">Livraison standard<span>Sous 2 à 4 heures</span></div>
            <div className="amount">30 MAD</div>
          </div>
          <div className="delivery-card">
            <div className="label">Livraison express<span>Sous 1 heure</span></div>
            <div className="amount">50 MAD</div>
          </div>
        </div>
      </div>
    </section>
  );
}
