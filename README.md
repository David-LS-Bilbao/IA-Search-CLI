# Perplexity Clone - CLI & Web

Un motor de busqueda conversacional con **CLI** e **interfaz web**, construido con **Firebase Genkit**, **Google Gemini** y **Tavily Search API**.

Implementa un flujo RAG (Retrieval-Augmented Generation) que busca informacion en tiempo real, cita fuentes y responde preguntas complejas.

## Caracteristicas

- **RAG en Tiempo Real:** Detecta cuando necesita informacion externa y busca en la web
- **Citas Inteligentes:** Las respuestas incluyen referencias a las fuentes utilizadas
- **CLI Interactiva:** Interfaz de terminal con manejo de errores
- **API REST:** Servidor Express para integracion con frontends
- **Web UI:** Interfaz React moderna con modo oscuro
- **Genkit UI:** Interfaz visual para depurar trazas y probar prompts

## Stack Tecnologico

### Backend
- **Runtime:** Node.js + TypeScript
- **Framework AI:** [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **LLM:** Google Gemini Flash (via Google AI SDK)
- **Search Tool:** [Tavily API](https://tavily.com/)
- **Server:** Express + CORS

### Frontend
- **Framework:** React 19 + Vite 7
- **Estilos:** Tailwind CSS
- **Markdown:** react-markdown
- **Iconos:** lucide-react

## Estructura del Proyecto

```
perplexity-cli/
├── src/
│   ├── genkit.ts      # Configuracion de Genkit
│   ├── search.ts      # Tool de busqueda (Tavily)
│   ├── agent.ts       # Flow principal del agente
│   ├── server.ts      # API REST (Express)
│   ├── cli.ts         # Interfaz de terminal
│   └── index.ts       # Entry point
├── frontend/
│   ├── src/
│   │   ├── App.tsx    # Componente Chat UI
│   │   ├── main.tsx   # Entry point React
│   │   └── index.css  # Estilos Tailwind
│   └── ...
├── .env.example
└── package.json
```

## Instalacion

1. **Clonar el repositorio:**
```bash
git clone https://github.com/David-LS-Bilbao/IA-Search-CLI.git
cd IA-Search-CLI
```

2. **Instalar dependencias del backend:**
```bash
npm install
```

3. **Instalar dependencias del frontend:**
```bash
cd frontend && npm install && cd ..
```

4. **Configurar variables de entorno:**
```bash
cp .env.example .env
```

5. **Editar `.env` con tus API keys:**
```env
GOOGLE_API_KEY=tu_clave_de_google
TAVILY_API_KEY=tu_clave_de_tavily
```

## Obtencion de API Keys

- **Google AI:** [Google AI Studio](https://aistudio.google.com/app/apikey)
- **Tavily:** [Tavily AI](https://tavily.com/)

## Uso

### Opcion A: CLI Interactiva
```bash
npm run cli
```

### Opcion B: Web (Full Stack)
```bash
# Terminal 1 - Backend API (puerto 3000)
npm run api

# Terminal 2 - Frontend (puerto 5173)
cd frontend && npm run dev
```
Abrir http://localhost:5173

### Opcion C: Genkit UI (Depuracion)
```bash
npm run genkit:start
```

## API REST

### POST /api/chat
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"query": "¿Cual es la capital de Francia?"}'
```

**Response:**
```json
{
  "text": "La capital de Francia es Paris..."
}
```

### GET /health
```bash
curl http://localhost:3000/health
```

## Capturas

La interfaz web incluye:
- Modo oscuro (slate/gris pizarra)
- Mensajes de usuario a la derecha
- Respuestas de IA a la izquierda con avatar
- Indicador "Buscando y analizando..."
- Renderizado de Markdown (negritas, links, codigo)

## Licencia

ISC

---

Creado con Firebase Genkit + React
