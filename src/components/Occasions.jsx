import { OCCASIONS } from "../data/occasions";
import { SMALL_ICONS } from "./Icons";

export default function Occasions() {
  return (
    <section id="occasions" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Trouvez l'inspiration</span>
          <h2>Pour chaque occasion</h2>
          <p>Un moment précis, une émotion à transmettre : nous vous aidons à choisir la composition la plus juste.</p>
        </div>
        <div className="grid-occasions">
          {OCCASIONS.map((o) => (
            <div className="occasion-card" key={o.name}>
              <div className="occasion-icon-wrap" style={{ background: `${o.color}22` }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={o.color} strokeWidth="1.8"
                     strokeLinecap="round" strokeLinejoin="round"
                     dangerouslySetInnerHTML={{ __html: SMALL_ICONS[o.icon] }} />
              </div>
              <h3>{o.name}</h3>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
