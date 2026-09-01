import { cloudflare } from '@cloudflare/vite-plugin';
import { sites } from '@openai/sites-vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    sites(),
    cloudflare({
      config: {
        name: 'server',
        main: './worker/index.js',
        compatibility_date: '2026-05-15',
        assets: {
          binding: 'ASSETS',
          not_found_handling: 'single-page-application',
        },
      },
    }),
  ],
});

