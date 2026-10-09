# Byte Morón

Proyecto de pre-entrega para practicar React, componentes, `useEffect`, `fetch` y navegación con React Router. Representa un local de memorias RAM y discos rígidos en Morón. Los nombres del equipo, direcciones, contacto, precios e imágenes son datos de muestra y deben reemplazarse por los reales antes de publicar.

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
- `/categoria/memorias`: memorias RAM
- `/categoria/discos-rigidos`: discos rígidos
- `/contacto`: sedes y contacto
- `/producto/:id`: detalle de producto
- Cualquier ruta inexistente muestra la página 404

## Datos

El catálogo está en `public/productos.json`. `ItemListContainer.jsx` lo solicita con `fetch` dentro de `useEffect`; `Item.jsx` presenta cada producto. Los precios son ilustrativos y las imágenes de ejemplo se sirven desde Unsplash, por lo que requieren conexión a internet.

El footer incluye contacto, privacidad, términos, dos sedes de muestra en Morón y un formulario de newsletter demostrativo. El formulario confirma localmente la suscripción, pero no almacena correos ni se conecta a un servicio externo. Las tarjetas del equipo también son de ejemplo.

El carrito y Context API quedan fuera de esta pre-entrega, según la consigna.
