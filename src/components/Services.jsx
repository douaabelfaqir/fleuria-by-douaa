import { SERVICES } from "../data/services";
import { SMALL_ICONS } from "./Icons";

export default function Services() {
  return (
    <section className="services-band">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Notre savoir-faire</span>
          <h2>Nos services</h2>
          <p>Au-delà du bouquet, un accompagnement complet pour sublimer chaque occasion.</p>
        </div>
        <div className="grid-services">
          {SERVICES.map((s) => (
            <div className="service-item" key={s.name}>
              <div className="service-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8"
                     strokeLinecap="round" strokeLinejoin="round"
                     dangerouslySetInnerHTML={{ __html: SMALL_ICONS[s.icon] }} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
