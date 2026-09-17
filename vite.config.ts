import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // This project uses Vite's TSX transform; run it on the URL used by the
    // existing local workflow instead of serving src/main.tsx as raw text.
    port: 5500,
    open: false,
    host: true,
  },
});
