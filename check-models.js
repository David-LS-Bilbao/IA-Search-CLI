// check-models.js
require('dotenv').config();

const apiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;

if (!apiKey) {
  console.error("❌ ERROR: No se encontró API Key. Revisa tu archivo .env");
  process.exit(1);
}

console.log(`🔑 Probando clave: ${apiKey.substring(0, 10)}...`);
console.log("📡 Conectando con Google para listar modelos...");

async function main() {
  // Probamos contra la API v1beta que es la que usa Genkit
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("❌ Error de Google:", data.error.message);
      return;
    }

    console.log("\n✅ MODELOS DISPONIBLES PARA TI:");
    console.log("--------------------------------");
    const models = data.models || [];
    
    // Filtramos solo los que generan texto (chat)
    const chatModels = models.filter(m => m.supportedGenerationMethods.includes("generateContent"));
    
    if (chatModels.length === 0) {
      console.log("⚠️ Tu clave funciona, pero no tienes acceso a modelos de chat.");
    }

    chatModels.forEach(m => {
      // Limpiamos el prefijo 'models/' para ver el nombre claro
      console.log(`➡️  ${m.name.replace('models/', '')}`);
    });
    console.log("--------------------------------");
    console.log("💡 COPIA uno de estos nombres exactos para usarlo en src/agent.ts");

  } catch (e) {
    console.error("❌ Error de conexión:", e);
  }
}

main();