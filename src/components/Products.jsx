import { PRODUCTS } from "../data/products";

function ProductCard({ p }) {
  return (
    <div className="card">
      <div className="card-media">
        <span className={`badge ${p.available ? "available" : "limited"}`}>
          {p.available ? "En stock" : "Sur commande"}
        </span>
        <img src={p.photo} alt={`${p.name} — vraie photographie`} loading="lazy" />
      </div>
      <div className="card-body">
        <span className="card-cat">{p.category}</span>
        <h3>{p.name}</h3>
        <p className="desc">{p.desc}</p>
        <p className="photo-credit" style={{ textAlign: "left", margin: "-4px 0 0" }}>{p.credit}</p>
        <div className="card-footer">
          <div className="price">{p.price}<span>MAD</span></div>
          <a href="#contact" className="btn btn-outline btn-sm">Découvrir</a>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="produits">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Notre catalogue</span>
          <h2>Nos fleurs, nos créations</h2>
          <p>Chaque bouquet est composé à la main, avec des fleurs sélectionnées pour leur fraîcheur et leur élégance naturelle.</p>
        </div>
        <div className="grid-products">
          {PRODUCTS.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
