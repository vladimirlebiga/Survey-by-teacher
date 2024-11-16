import { defineConfig } from 'vite'; // Import defineConfig from Vite
import react from '@vitejs/plugin-react'; // Import react plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Your custom output directory
  },
});