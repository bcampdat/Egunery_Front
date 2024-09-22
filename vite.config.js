import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react';

// Detectar si estamos en producción
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  
  // Configuración de proxy solo para desarrollo
  server: {
    proxy: isProduction ? {} : {
      '/api': {
        target: 'http://localhost:3001',  // Backend local para desarrollo
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  // Definir variables globales y configurar backend URL dinámicamente según el entorno
  define: {
    'process.env': {
      VITE_BACKEND_URL: isProduction 
        ? 'https://eguneryback-production.up.railway.app' // URL de tu backend en producción
        : 'http://localhost:3001'  // URL de tu backend en desarrollo
    },
    global: "window",  // Hace que 'global' apunte a 'window' en el navegador
  },
});
