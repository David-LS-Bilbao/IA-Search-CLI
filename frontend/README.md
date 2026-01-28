# 🔍 Perplexity Clone (Full Stack)

Un motor de búsqueda conversacional con IA, disponible tanto en **Web** como en **Terminal**. Construido con **Firebase Genkit**, **Google Gemini 1.5**, **Tavily Search API**, **Express** y **React**.

![Demo](https://via.placeholder.com/800x400?text=Preview+de+la+App)

## 🚀 Características

- **Arquitectura Híbrida:** Úsalo como CLI o como Web App moderna.
- **RAG en Tiempo Real:** Busca información actualizada en internet y cita las fuentes.
- **Frontend Moderno:** Interfaz estilo chat construida con React, Vite y Tailwind CSS (Modo Oscuro).
- **Backend API:** Servidor Express que expone el flujo de IA como una API REST.
- **Model Agnostic:** Configurado para usar los últimos modelos de Google Gemini.

## 🛠️ Stack Tecnológico

* **Core AI:** Firebase Genkit + Google AI SDK
* **Backend:** Node.js, Express, TypeScript
* **Frontend:** React, Vite, Tailwind CSS, Lucide Icons
* **Herramientas:** Tavily API (Búsqueda), Dotenv

## 📦 Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/perplexity-clone-cli.git](https://github.com/TU_USUARIO/perplexity-clone-cli.git)
    cd perplexity-clone-cli
    ```

2.  **Instalar dependencias del Backend (Raíz):**
    ```bash
    npm install
    ```

3.  **Instalar dependencias del Frontend:**
    ```bash
    cd frontend
    npm install
    cd ..
    ```

4.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz (basado en `.env.example`) y añade tus claves:
    ```env
    GOOGLE_GENAI_API_KEY=tu_clave_gemini
    TAVILY_API_KEY=tu_clave_tavily
    ```

## ▶️ Cómo Usar

### Opción A: Modo Web (Recomendado) 🌐
Necesitarás dos terminales abiertas:

1.  **Terminal 1 (Backend API):**
    ```bash
    npm run api
    ```
    *El servidor iniciará en http://localhost:3000*

2.  **Terminal 2 (Frontend):**
    ```bash
    cd frontend
    npm run dev
    ```
    *Abre el navegador en http://localhost:5173*

---

### Opción B: Modo Terminal (CLI) 💻
Para una consulta rápida sin salir de la consola:
```bash
npm run cli

...

### Opción C: Modo Desarrollo (Genkit UI) 🛠️
Para depurar flujos y ver trazas:
npx genkit start -- npx tsx src/index.ts

📂 Estructura del Proyecto
perplexity-clone/
├── src/
│   ├── agent.ts       # Lógica del Flow (Cerebro IA)
│   ├── search.ts      # Tool de Búsqueda (Tavily)
│   ├── server.ts      # API Express (Backend)
│   └── cli.ts         # Interfaz de Terminal
├── frontend/          # Aplicación React (Vite + Tailwind)
├── .env               # API Keys (No subir a GitHub)
└── package.json
Creado con ❤️ usando Genkit.