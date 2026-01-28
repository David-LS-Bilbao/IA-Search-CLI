import { ai } from './genkit';
import { z } from 'zod';
import { webSearch } from './search';

// Prompt del sistema para el agente
const SYSTEM_PROMPT = `Eres un motor de búsqueda inteligente similar a Perplexity AI. Tu trabajo es:

1. SIEMPRE usar la herramienta webSearch para buscar información actualizada antes de responder.
2. Analizar los resultados de búsqueda y proporcionar una respuesta clara, concisa y bien estructurada.
3. SIEMPRE citar las fuentes al final de tu respuesta con el formato [número] URL.
4. Si la búsqueda no devuelve resultados relevantes, indica que no encontraste información actualizada.
5. Responde siempre en el mismo idioma en que el usuario hace la pregunta.

Formato de respuesta:
- Respuesta clara y organizada
- Usa listas o párrafos según sea apropiado
- Al final, incluye una sección "Fuentes:" con las URLs de donde obtuviste la información`;

/**
 * Flujo principal del agente Perplexity
 * Actúa como un motor de búsqueda que siempre busca información actualizada
 */
export const perplexityAgent = ai.defineFlow(
  {
    name: 'perplexityAgent',
    inputSchema: z.object({
      question: z.string().describe('La pregunta del usuario'),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-flash-latest',
      tools: [webSearch],
      prompt: input.question,
      system: SYSTEM_PROMPT,
      config: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
    });

    return response.text;
  }
);
