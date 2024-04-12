import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Set the root directory to src
  build: {
    outDir: '../dist', // Specify the output directory
    emptyOutDir: true, // Clear output directory before building
    rollupOptions: {
      input: './index.html', // Specify the entry HTML file
    },
  },
});