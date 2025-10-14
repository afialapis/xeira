// vitest.config.js

import { defineConfig } from 'vitest/config';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  test: {
    include: ['./test/unit.mjs'],
    //include: ['**/*.{test,spec,unit}.?(c|m)[jt]s?(x)'], // Aquí le dices que también busque archivos que terminen en '.unit'
    // Aquí es donde defines los helpers de configuración global
    //setupFiles: [
    //  // Vitest maneja el soporte para React y JSX de forma nativa.
    //  // Así que no necesitas babel.cjs.
    //  // Los archivos helpers de Mocha se convierten en setupFiles:
    //  //'/home/lapis/repos/gh/xeira/src/scripts/test/mocha/helpers/dom.mjs',
    //  //'node_modules/xeira/src/scripts/test/mocha/helpers/chai.mjs',
    //  path.join(__dirname, '../../src/scripts/test/mocha/helpers/react.mjs'),
    //],
    // Vitest no necesita --exit o --bail, los tests fallidos detienen el runner.
    // También maneja el entorno de Node.js por defecto.
    environment: 'jsdom',
    // La opción 'globals' te permite usar 'expect' y 'describe' sin importarlos
    globals: true
  },
});