Este es un proyecto de [Next.js](https://nextjs.org/) generado mediante [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ¿Qué es Next.js?

Next.js es un framework React de código abierto creado por Vercel para desarrollar aplicaciones web modernas. Ofrece funcionalidades como renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG), regeneración estática incremental (ISR), rutas API, enrutamiento basado en archivos, además de optimizaciones integradas para imágenes, fuentes y el rendimiento general. Al gestionar de forma predeterminada gran parte de la complejidad relacionada con el renderizado, el enrutamiento y el despliegue de las aplicaciones, Next.js permite a los desarrolladores crear sitios web y aplicaciones full-stack rápidas, optimizadas para SEO y escalables, con una configuración mínima.

## Primeros pasos

En primer lugar, ejecute el servidor de desarrollo:

```bash
npm run dev
# o bien
yarn dev
# o también
pnpm dev
# o finalmente
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) en su navegador para ver los resultados.

Puede comenzar a editar la página modificando el archivo `pages/index.tsx`. La página se actualizará automáticamente al realizar cambios en dicho archivo.

Se puede acceder a las [rutas de API](https://nextjs.org/docs/api-routes/introduction) en [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este punto de conexión se edita en el archivo `pages/api/hello.ts`.

El directorio `pages/api` se asigna a `/api/*`. Los archivos que se encuentran en este directorio se consideran [rutas de API](https://nextjs.org/docs/api-routes/introduction) y no páginas de React.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente la fuente Inter, una fuente personalizada de Google.

## Más información

Para obtener más información sobre Next.js, consulte los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs): descubra las características y el API de Next.js.
- [Aprenda Next.js](https://nextjs.org/learn): un tutorial interactivo sobre Next.js.

También puede consultar [el repositorio de GitHub de Next.js](https://github.com/vercel/next.js/); sus comentarios y contribuciones son bienvenidos.

## Despliegue en Vercel

La forma más sencilla de desplegar su aplicación de Next.js es utilizando la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), creada por los desarrolladores de Next.js.

Consulte nuestra [documentación sobre despliegue de Next.js](https://nextjs.org/docs/deployment) para obtener más detalles.
