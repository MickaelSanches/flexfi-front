import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Créer et ajouter le script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.7/dist/build/static/js/bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Créer et ajouter le composant chat
    const chatElement = document.createElement("langflow-chat");
    chatElement.setAttribute("window_title", "Frontend agent");
    chatElement.setAttribute("flow_id", "36c090c0-2639-422f-9fe1-278e59f7d088");
    chatElement.setAttribute("host_url", "https://astra.datastax.com");

    // Ajouter le chat dans le conteneur
    const container = document.getElementById("chatbot-container");
    if (container) {
      container.appendChild(chatElement);
    }

    // Nettoyer lors du démontage
    return () => {
      document.body.removeChild(script);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="chatbot-container"
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 1000,
      }}
    />
  );
};

export default Chatbot;
