import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weading/",
  build: {
    outDir: resolve(__dirname, 'dist'), // Output directory
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js', // Output filename for main bundle
      }
    }
  }
})
