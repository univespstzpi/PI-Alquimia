document.addEventListener("DOMContentLoaded", function() {
  const chatContainer = document.getElementById("chat-container");
  const userInput = document.getElementById("user-input");

  function sendMessage() {
      let message = userInput.value.trim();
      if (message === "") return;

      appendMessage("Você: " + message, "user");
      userInput.value = "";

      setTimeout(() => {
          let response = getResponse(message);
          appendMessage("Bot: " + response, "bot");
      }, 500);
  }

  function appendMessage(text, sender) {
      let msg = document.createElement("div");
      msg.classList.add(sender);
      msg.textContent = text;
      chatContainer.appendChild(msg);
      chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function getResponse(userMessage) {
      const responses = {
          "olá": "Olá! Bem-vindo à Cervejaria Alquimia! Como posso te ajudar?",
          "tipos de cervejas": "Temos cervejas do tipo Pilsen, Trigo, Stout, Sour, Red Ale e IPA",
          "horário de funcionamento": "Estamos abertos de terça a domingo das 15h às 22h.",
          "onde fica a cervejaria": "Nossa cervejaria está localizada na Avenida Maria Aparecida Andrade, 342, no bairro Jd. Veneto II, na cidade de Sertãozinho-SP. Clique no link e Venha nos visitar!"
      };

      return responses[userMessage.toLowerCase()] || "Desculpe, não entendi. Você quer saber quais os nossos 'tipos de cervejas', 'horário funcionamento' ou 'onde fica a cervejaria'?";
  }

  window.sendMessage = sendMessage;
});
