import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weading/",
  build: {
    outDir: new URL('dist', import.meta.url).pathname,
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
      }
    }
  }
})
