import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { perplexityAgent } from './agent';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint principal
app.post('/api/chat', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Se requiere un campo "query" de tipo string' });
    }

    console.log('Procesando consulta:', query);

    const result = await perplexityAgent({ question: query });

    res.json({ text: result });
  } catch (error) {
    console.error('Error en /api/chat:', error);
    const message = error instanceof Error ? error.message : 'Error desconocido';
    res.status(500).json({ error: message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor API iniciado en http://localhost:${PORT}`);
  console.log(`Endpoint: POST http://localhost:${PORT}/api/chat`);
  console.log(`Health check: GET http://localhost:${PORT}/health`);
});
