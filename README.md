# Frutería

Proyecto de pre-entrega para practicar React, componentes, `useEffect`, `fetch` y navegación con React Router. Representa una frutería de productos de estación. Nombres, integrantes, sedes, precios e imágenes son contenido de muestra y deben adaptarse antes de publicar.

## Requisitos

- Node.js 20.19+ (o una versión compatible con Vite actual)
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Para generar una compilación de producción: `npm run build`. Para previsualizarla: `npm run preview`.

## Rutas

- `/`: inicio
- `/productos`: catálogo completo
- `/categoria/frutas`: frutas de estación
- `/categoria/verduras`: verduras y hortalizas
- `/contacto`: sedes y contacto
- `/producto/:id`: detalle de producto
- Cualquier ruta inexistente muestra la página 404

## Datos

El catálogo está en `public/productos.json`. `ItemListContainer.jsx` lo solicita con `fetch` dentro de `useEffect`; `Item.jsx` presenta cada producto. Las imágenes de ejemplo se sirven desde Unsplash y requieren conexión a internet.

El footer incluye enlaces de contacto, privacidad, términos, sedes y un formulario de newsletter demostrativo. El formulario confirma localmente la suscripción, pero no almacena correos ni se conecta a un servicio externo. Las tres tarjetas de equipo también son de ejemplo.

El carrito y Context API quedan fuera de esta pre-entrega, según la consigna.
