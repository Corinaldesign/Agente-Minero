import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import * as fs from 'fs';
import { URL } from 'url';

// Cargar la URL del webhook directamente desde el archivo .env
const envFile = path.resolve(process.cwd(), '.env');
let webhookUrl = 'https://ccmstudio.app.n8n.cloud';
let webhookId = '76cb7ce4-b9e9-42d9-bfe4-26bb7fe84f4c';

if (fs.existsSync(envFile)) {
  const envContent = fs.readFileSync(envFile, 'utf8');
  const matches = envContent.match(/VITE_N8N_API_URL=(.+)/);
  if (matches && matches[1]) {
    try {
      const fullUrl = matches[1].trim().replace(/[\"']/g, '');
      console.log('URL del webhook leída del archivo .env:', fullUrl);
      
      // Extraer la base URL y el path
      const urlObj = new URL(fullUrl);
      webhookUrl = `${urlObj.protocol}//${urlObj.host}`;
      
      // Extraer solo el ID del webhook (última parte del path)
      const pathParts = urlObj.pathname.split('/');
      webhookId = pathParts[pathParts.length - 1];
    } catch (error) {
      console.error('Error al procesar la URL del webhook:', error);
    }
  }
}

console.log('URL base del proxy:', webhookUrl);
console.log('ID del webhook:', webhookId);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/n8n': {
        target: webhookUrl,
        changeOrigin: true,
        rewrite: (path) => {
          // Reescribir la ruta para mantener solo el ID del webhook
          const pathSegments = path.split('/');
          const webhookIdFromPath = pathSegments[pathSegments.length - 1];
          // Construir la ruta con '/webhook/' + ID
          return `/webhook/${webhookIdFromPath}`;
        },
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('Proxy error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Enviando solicitud al proxy:', req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Respuesta recibida del proxy:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
    fs: {
      // Permitir servir archivos desde estos directorios
      allow: ['src', 'node_modules', 'public'],
    },
  },
  css: {
    // Configuración para asegurar que los estilos CSS se carguen correctamente
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  define: {
    'import.meta.env.VITE_WEBHOOK_PATH': JSON.stringify(webhookId),
  },
});
