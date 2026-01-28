// IMPORTANTE: Cargar variables de entorno ANTES de cualquier import de Genkit
import * as dotenv from 'dotenv';
import * as path from 'path';

// Cargar .env desde la raíz del proyecto
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

// Importar la instancia de Genkit y los módulos
import { ai } from './genkit';
import { perplexityAgent } from './agent';
import { webSearch } from './search';

// Exportar para uso externo
export { ai, perplexityAgent, webSearch };

console.log('Genkit inicializado correctamente.');
console.log('Usa "npm run cli" para iniciar la CLI interactiva.');
