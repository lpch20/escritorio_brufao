import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.4', // Especifica la dirección IP
    port: 3000, // Especifica el puerto
  },
})
