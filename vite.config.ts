import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue()],
 resolve: {
  alias: {
   "@": path.resolve(__dirname, 'src')
  }
 },
 server: {
    proxy: {
      '/api/user': {
        target: 'http://192.168.43.92:8080',
        changeOrigin: true,
      },
    }
  }
})