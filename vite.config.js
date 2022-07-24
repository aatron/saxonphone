import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
  build: {
    // https://rollupjs.org/guide/en/#big-list-of-options
    rollupOptions: {
      output: {
        name: 'saxonphone',

        // Hardcode file names to make it easier to be a git submodule. Parent project will handle cache busting.
        file: resolve(__dirname, 'dist/saxonphone.js'),
        dir: null,
        assetFileNames: 'assets/saxonphone.min[extname]'
      }
    }
  }
})