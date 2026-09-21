// Données produits — séparées de la présentation pour faciliter les mises à jour.
export const PRODUCTS = [
  { id: 1, name: "Bouquet Rose Éternelle", category: "Roses", price: 250, icon: "rose",
    desc: "Un bouquet raffiné de roses roses et blanches, symbole de tendresse durable.", available: true },
  { id: 2, name: "Douceur Printanière", category: "Bouquets de saison", price: 220, icon: "mixed",
    desc: "Un mélange délicat de fleurs pastel, frais et lumineux comme le printemps.", available: true },
  { id: 3, name: "Jardin de Roses", category: "Roses", price: 300, icon: "rose",
    desc: "Une composition généreuse de roses variées, pour un effet jardin luxuriant.", available: true },
  { id: 4, name: "Bouquet Passion", category: "Roses rouges", price: 350, icon: "rose-red",
    desc: "Des roses rouges intenses assemblées avec élégance pour déclarer votre amour.", available: true },
  { id: 5, name: "Tulipes Élégantes", category: "Tulipes", price: 180, icon: "tulip",
    desc: "Des tulipes fraîches aux teintes douces, pour une élégance simple et naturelle.", available: true },
  { id: 6, name: "Bouquet Soleil", category: "Fleurs jaunes", price: 200, icon: "sunflower",
    desc: "Un bouquet solaire et joyeux, parfait pour illuminer une journée spéciale.", available: true },
  { id: 7, name: "Coffret Amour", category: "Coffrets", price: 400, icon: "gift-rose",
    desc: "Un coffret précieux de roses accompagné d'une présentation haut de gamme.", available: false },
  { id: 8, name: "Coffret Fleurs & Chocolat", category: "Coffrets gourmands", price: 350, icon: "gift-choco",
    desc: "L'alliance parfaite entre un bouquet délicat et une sélection de chocolats fins.", available: true },
  { id: 9, name: "Composition Mariage", category: "Événements", price: 800, icon: "wedding",
    desc: "Une composition florale raffinée, pensée pour sublimer votre jour le plus précieux.", available: true },
  { id: 10, name: "Bouquet Anniversaire", category: "Occasions festives", price: 300, icon: "mixed",
    desc: "Un bouquet coloré et festif pour célébrer avec éclat un anniversaire.", available: true },
];

export const CARD_BG = {
  "rose": "radial-gradient(circle at 50% 30%, rgba(209,102,122,0.30), transparent 65%), #fdf1f0",
  "rose-red": "radial-gradient(circle at 50% 30%, rgba(224,120,86,0.32), transparent 65%), #fcece2",
  "tulip": "radial-gradient(circle at 50% 30%, rgba(185,143,201,0.30), transparent 65%), #f6eef8",
  "sunflower": "radial-gradient(circle at 50% 30%, rgba(240,185,58,0.34), transparent 65%), #fdf5e2",
  "mixed": "radial-gradient(circle at 50% 30%, rgba(111,143,86,0.24), rgba(209,102,122,0.18), transparent 70%), #f6f4ea",
  "gift-rose": "radial-gradient(circle at 50% 30%, rgba(217,164,65,0.34), transparent 65%), #fbf2df",
  "gift-choco": "radial-gradient(circle at 50% 30%, rgba(162,77,114,0.24), transparent 65%), #f5ede6",
  "wedding": "radial-gradient(circle at 50% 30%, rgba(111,143,86,0.28), transparent 65%), #f1f5ea",
};
