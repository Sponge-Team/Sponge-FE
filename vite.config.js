import { defineConfig } from 'vite';
import UnocssVitePlugin from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue(), UnocssVitePlugin()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  }
});
