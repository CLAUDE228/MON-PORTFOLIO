import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Configure Hot Module Replacement based on environmental settings
      hmr: process.env.DISABLE_HMR !== 'true',
      // Adjust file watching settings for performance
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
