import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Restons en contact</span>
          <h2>Contactez Fleuria</h2>
          <p>Une question, une commande sur mesure ou un projet floral pour un événement ? Écrivez-nous.</p>
        </div>
        <div className="contact-wrap">
          <ul className="contact-info">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <div><div className="label">Téléphone</div><div className="value">+212 6 61 23 45 67</div></div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16v16H4V4z" /><path d="M22 6l-10 7L2 6" />
              </svg>
              <div><div className="label">Email</div><div className="value">contact@fleuria-douaa.ma</div></div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <div><div className="label">Adresse</div><div className="value">12 Rue des Orangers, Quartier Gauthier, Casablanca</div></div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
              <div><div className="label">Horaires d'ouverture</div><div className="value">Lundi – Samedi, 09h00 – 20h00</div></div>
            </li>
          </ul>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field"><label>Nom</label><input type="text" placeholder="Votre nom" required /></div>
              <div className="field"><label>Téléphone</label><input type="tel" placeholder="06 XX XX XX XX" /></div>
            </div>
            <div className="field"><label>Email</label><input type="email" placeholder="vous@exemple.com" required /></div>
            <div className="field">
              <label>Message</label>
              <textarea placeholder="Parlez-nous de votre projet floral..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Envoyer</button>
            {sent && (
              <div className="form-success" style={{ display: "block" }}>
                Merci ! Votre message a bien été noté (démonstration front-end).
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
