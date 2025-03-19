# Agente Minero 🤖⛏️

## Descripción
Sistema de Agente Inteligente diseñado para el análisis y procesamiento de datos en el sector minero. Esta herramienta utiliza técnicas avanzadas de IA para optimizar procesos y toma de decisiones en operaciones mineras.

## Características Principales
- 📊 Análisis de datos en tiempo real
- 🔍 Monitoreo de operaciones mineras
- 📈 Predicción de tendencias
- ⚠️ Sistema de alertas inteligentes
- 📱 Interfaz intuitiva y responsive

## Tecnologías
- React 18.3
- TypeScript
- Vite
- Lucide React (para iconos)
- TensorFlow.js
- Axios

## Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Corinaldesign/Agente-Minero.git

# Ingresar al directorio
cd Agente-Minero

# Instalar dependencias
npm install
```

## Uso
```bash
# Iniciar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la versión construida
npm run preview
```

## Estructura del Proyecto
```
/src
  /components      - Componentes React
    /Layout        - Estructura principal de la aplicación
    /MainContent   - Paneles de contenido principal
    /Sidebar       - Barra de navegación lateral
  /services        - Servicios de API y procesamiento
  /styles          - Estilos globales y variables CSS
  /utils           - Utilidades y helpers
  /assets          - Recursos estáticos
```

## Configuración
El proyecto utiliza Vite como sistema de construcción. Puedes encontrar la configuración en el archivo `vite.config.ts`.

Para configurar las integraciones con backend, edita las variables de entorno en un archivo `.env` en la raíz del proyecto:

```
VITE_API_URL=http://localhost:8000
VITE_N8N_API_URL=https://ejemplo.app.n8n.cloud/webhook/tu-id-webhook
```

## Contribución
Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## Licencia
MIT

## Contacto
- GitHub: [@Corinaldesign](https://github.com/Corinaldesign)