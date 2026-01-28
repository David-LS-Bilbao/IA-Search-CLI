import { ai } from './genkit';
import { z } from 'zod';

// Interfaz para los resultados de Tavily
interface TavilyResult {
  title: string;
  url: string;
  content: string;
  score: number;
}

interface TavilyResponse {
  results: TavilyResult[];
  answer?: string;
}

/**
 * Herramienta de búsqueda web usando la API de Tavily
 */
export const webSearch = ai.defineTool(
  {
    name: 'webSearch',
    description: 'Busca información actualizada en la web usando Tavily. Usa esta herramienta para obtener información reciente y relevante sobre cualquier tema.',
    inputSchema: z.object({
      query: z.string().describe('La consulta de búsqueda a realizar'),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    console.log('🔎 BUSCANDO EN TAVILY:', input.query);

    const apiKey = process.env.TAVILY_API_KEY;

    if (!apiKey) {
      console.error('❌ ERROR TAVILY: API Key no configurada');
      return 'Error al buscar: TAVILY_API_KEY no está configurada en las variables de entorno';
    }

    try {
      const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          query: input.query,
          search_depth: 'advanced',
          include_answer: true,
          include_raw_content: false,
          max_results: 5,
        }),
      });

      if (!response.ok) {
        const errorMsg = `Error en la API de Tavily: ${response.status} ${response.statusText}`;
        console.error('❌ ERROR TAVILY:', errorMsg);
        return `Error al buscar: ${errorMsg}`;
      }

      const data = await response.json() as TavilyResponse;

      console.log('✅ TAVILY respondió con', data.results?.length || 0, 'resultados');

      // Verificar si hay resultados
      if (!data.results || data.results.length === 0) {
        console.log('⚠️ TAVILY: No se encontraron resultados');
        return 'No se encontraron resultados para esta búsqueda.';
      }

      // Concatenar los resultados relevantes con sus fuentes
      let context = '';

      if (data.answer) {
        context += `Resumen: ${data.answer}\n\n`;
      }

      context += 'Fuentes encontradas:\n\n';

      data.results.forEach((result, index) => {
        context += `[${index + 1}] ${result.title}\n`;
        context += `URL: ${result.url}\n`;
        context += `Contenido: ${result.content}\n\n`;
      });

      return context;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      console.error('❌ ERROR TAVILY:', errorMessage);
      return `Error al buscar: ${errorMessage}`;
    }
  }
);
