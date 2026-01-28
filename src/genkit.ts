// IMPORTANTE: Cargar variables de entorno ANTES de cualquier import de genkit
import 'dotenv/config';

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

console.log('Iniciando configuración de Genkit...');

// Verificar que las API keys están configuradas
if (!process.env.GOOGLE_API_KEY) {
  console.error('ERROR: GOOGLE_API_KEY no está configurada en .env');
}
if (!process.env.TAVILY_API_KEY) {
  console.error('ERROR: TAVILY_API_KEY no está configurada en .env');
}

// Crear y exportar la instancia de Genkit con el plugin de Google AI
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
    }),
  ],
});

console.log('Genkit configurado correctamente.');
