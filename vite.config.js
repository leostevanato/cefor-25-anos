import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~codyhouse-framework': path.resolve(__dirname, 'node_modules/codyhouse-framework'),
    }
  },
  base: '/cefor25anos/',
  server: {
    base: '/cefor25anos/'
  },
  define: {
    '__TIME_DA_BUILD__': JSON.stringify(Date.now())
}
});