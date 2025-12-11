import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MINI IA 💬
function miniIA(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hola") || msg.includes("buenas")) {
    return "¡Hola! Soy tu mini-IA, ¿cómo puedo ayudarte?";
  }

  if (msg.includes("labores") || msg.includes("qué puedes hacer") || msg.includes("que puedes hacer")) {
    return (
      "Puedo ayudarte con varias cosas:\n\n" +
      "✅ Explicarte conceptos básicos de programación\n" +
      "✅ Responder preguntas simples de JavaScript, Node.js, APIs, etc.\n" +
      "✅ Darte definiciones rápidas\n" +
      "❌ No puedo procesar cosas avanzadas como una IA real\n" +
      "❌ No puedo conectarme a bases de datos ni realizar tareas complejas\n" +
      "\n¿Quieres probarme? 😊"
    );
  }

  if (msg.includes("api")) {
    return "Una API es un conjunto de rutas que permiten comunicar el frontend con el backend.";
  }

  if (msg.includes("javascript")) {
    return "JavaScript es el lenguaje que se usa para crear páginas dinámicas y aplicaciones web.";
  }

  if (msg.includes("node")) {
    return "Node.js sirve para crear servidores en JavaScript.";
  }

  return "Lo siento, aún no entiendo eso 😅. ¡Estoy aprendiendo!";
}

// Ruta del chatbot
app.post("/chat", (req, res) => {
  const { message } = req.body;
  const reply = miniIA(message);
  res.json({ reply });
});

// Inicializar server
app.listen(3000, () =>
  console.log("🚀 Servidor de IA corriendo en http://localhost:3000")
);
