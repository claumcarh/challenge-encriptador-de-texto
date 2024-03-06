import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
});
