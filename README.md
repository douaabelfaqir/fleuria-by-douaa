# Fleuria by Douaa — Site React

Boutique de fleurs fictive, version React (Vite) prête à être déployée sur Vercel.

## Structure

\`\`\`
src/
  components/   Header, Hero, Products, Occasions, Services, Delivery,
                About, Contact, Footer, Chatbot, Icons (icônes SVG partagées)
  data/         products.js, occasions.js, services.js — données séparées de l'affichage
  App.jsx       Assemblage des sections
  main.jsx      Point d'entrée React
  index.css     Styles globaux (palette rose poudré / vert sauge / crème)
\`\`\`

## Lancer en local

\`\`\`bash
npm install
npm run dev
\`\`\`

## Déployer sur Vercel

1. Poussez ce dossier sur un dépôt Git (GitHub/GitLab).
2. Sur vercel.com, "Import Project" → sélectionnez le dépôt.
3. Vercel détecte Vite automatiquement (build: \`npm run build\`, output: \`dist\`).
4. Déployez.

## Chatbot & n8n

Le composant \`src/components/Chatbot.jsx\` fonctionne entièrement en local pour
l'instant (aucune requête réseau). Il est déjà structuré pour recevoir une
connexion à un Webhook n8n :

- Requête envoyée : \`{ message, sessionId }\`
- Réponse attendue : \`{ response }\`

Pour connecter n8n plus tard : renseignez \`WEBHOOK_URL\` en haut du fichier et
décommentez le bloc \`fetch(...)\` dans la fonction \`sendToAssistant\`.
