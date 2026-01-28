#!/usr/bin/env node

// Cargar variables de entorno antes de cualquier import de Genkit
import 'dotenv/config';

import * as readline from 'readline';
import { perplexityAgent } from './agent';

// Crear interfaz de readline para entrada/salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para hacer una pregunta y obtener respuesta
function prompt(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Función principal del CLI
async function main(): Promise<void> {
  console.log('========================================');
  console.log('   Perplexity CLI - Búsqueda con IA');
  console.log('========================================');
  console.log('Escribe tu pregunta y presiona Enter.');
  console.log('Escribe "exit" o "quit" para salir.\n');

  // Bucle principal
  while (true) {
    const userInput = await prompt('You: ');
    const trimmedInput = userInput.trim();

    // Verificar si el usuario quiere salir
    if (trimmedInput.toLowerCase() === 'exit' || trimmedInput.toLowerCase() === 'quit') {
      console.log('\nHasta luego! Gracias por usar Perplexity CLI.');
      rl.close();
      process.exit(0);
    }

    // Ignorar entradas vacías
    if (!trimmedInput) {
      continue;
    }

    try {
      // Ejecutar el flow con la pregunta del usuario
      const response = await perplexityAgent({ question: trimmedInput });

      console.log(`\nAI: ${response}\n`);
    } catch (error) {
      // Manejar errores sin cerrar el programa
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      console.error(`\nError: ${errorMessage}`);
      console.log('Por favor, intenta de nuevo.\n');
    }
  }
}

// Ejecutar la CLI
main().catch((error) => {
  console.error('Error fatal:', error);
  process.exit(1);
});
