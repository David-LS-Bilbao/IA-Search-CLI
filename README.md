# 🔍 Perplexity Clone CLI

Un motor de búsqueda conversacional en tu terminal, construido con **Firebase Genkit**, **Google Gemini** y **Tavily Search API**.

Este proyecto implementa un flujo RAG (Retrieval-Augmented Generation) capaz de buscar información en tiempo real en internet, citar fuentes y responder preguntas complejas desde la línea de comandos.

## 🚀 Características

- **RAG en Tiempo Real:** Detecta cuándo necesita información externa y busca en la web.
- **Citas Inteligentes:** Las respuestas incluyen referencias numéricas a las fuentes utilizadas.
- **Model Agnostic:** Configurado para usar los últimos modelos de Gemini (Flash/Pro) via Genkit.
- **CLI Interactiva:** Interfaz de terminal limpia y robusta con manejo de errores.
- **Developer UI:** Incluye la interfaz visual de Genkit para depurar trazas y probar prompts.

## 🛠️ Stack Tecnológico

- **Runtime:** Node.js + TypeScript
- **Framework AI:** [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **LLM:** Google Gemini 1.5 Flash (via Google AI SDK)
- **Search Tool:** [Tavily API](https://tavily.com/)
- **CLI:** Node Readline

## 📦 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/perplexity-clone-cli.git](https://github.com/TU_USUARIO/perplexity-clone-cli.git)
   cd perplexity-clone-cli


   ## 🔑 Configuración de API Keys

Este proyecto requiere claves API para funcionar. Como medida de seguridad, el archivo de configuración `.env` no se incluye en el repositorio.

1.  **Obtener las claves:**
    * [Google AI Studio](https://aistudio.google.com/app/apikey) (Para Gemini)
    * [Tavily AI](https://app.tavily.com/home) (Para la búsqueda web)

2.  **Crear el archivo de entorno:**
    Copia el archivo de ejemplo proporcionado:
    ```bash
    cp .env.example .env
    ```
    *(O manualmente crea un archivo llamado `.env` en la raíz del proyecto).*

3.  **Añadir tus claves:**
    Abre el archivo `.env` creado y pega tus claves reales:
    ```env
    GOOGLE_GENAI_API_KEY=AIzaSyTuClaveReal...
    TAVILY_API_KEY=tvly-TuClaveReal...
    ```

> **Nota:** Nunca subas tu archivo `.env` con claves reales a GitHub.