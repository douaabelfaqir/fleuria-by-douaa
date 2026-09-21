import { useRef, useState } from "react";

// Composant Chatbot réutilisable et indépendant.
// Prêt pour une future connexion à un Webhook n8n :
//   Requête  -> { message: string, sessionId: string }
//   Réponse  -> { response: string }
// Aucune URL de webhook n'est appelée pour l'instant : la réponse est simulée localement.

// Décommentez et complétez pour brancher n8n plus tard :
// const WEBHOOK_URL = "";

function makeSessionId() {
  return "session-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10);
}

async function sendToAssistant(message, sessionId) {
  const payload = { message, sessionId };

  // Exemple d'appel futur vers n8n (désactivé volontairement) :
  // const res = await fetch(WEBHOOK_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) throw new Error("network");
  // const data = await res.json();
  // return data.response;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Merci pour votre message 🌸 Un membre de l'équipe Fleuria reviendra vers vous très bientôt.");
    }, 900);
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const sessionId = useRef(makeSessionId());

  function toggleOpen() {
    setOpen((wasOpen) => {
      const next = !wasOpen;
      if (next && messages.length === 0) {
        setMessages([{ sender: "bot", text: "Bonjour 🌷 Bienvenue chez Fleuria by Douaa ! Comment puis-je vous aider ?" }]);
      }
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setMessages((m) => [...m, { sender: "user", text }]);
    setInput("");
    setLoading(true);
    setError(false);

    try {
      const response = await sendToAssistant(text, sessionId.current);
      setMessages((m) => [...m, { sender: "bot", text: response }]);
    } catch (err) {
      setError(true);
      setMessages((m) => [...m, { sender: "error", text: "Une erreur de connexion est survenue. Merci de réessayer dans un instant." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button className="chat-toggle" aria-label="Ouvrir l'assistant Fleuria" onClick={toggleOpen}>
        {!open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        )}
      </button>

      <div className={`chat-window ${open ? "open" : ""}`}>
        <div className="chat-header">
          <div className="title">✿ Assistant Fleuria</div>
          <button aria-label="Fermer" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div className={`msg ${m.sender}`} key={i}>{m.text}</div>
          ))}
          {loading && (
            <div className="typing"><span></span><span></span><span></span></div>
          )}
        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Écrivez votre message..."
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" aria-label="Envoyer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
