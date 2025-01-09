import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.svg'],
  build: {
    assetsInlineLimit: 0, // This will prevent inlining of any assets
  },
  plugins: [react()],
})
