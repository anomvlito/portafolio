---
description: Traer o clonar sitios webs existentes al Portafolio usando Next.js y Tailwind CSS
---
# Flujo de Trabajo: Clonar Sitios Web para el Portafolio

Este workflow se encarga de importar, estudiar y clonar un sitio web existente al entorno de Next.js. El objetivo principal no es solo copiar código sino "destilar" la arquitectura, los estilos, las imágenes y las páginas del sitio, y rehacerlo utilizando prácticas modernas: App Router de Next.js y utilidades de Tailwind CSS.

## 1. Análisis y Recuperación de Contenido
- **Captura e Inspección de la URL:** Usa `read_url_content` o las integraciones de navegador (`playwright` si están disponibles / browser_subagent) para leer el HTML del sitio objetivo. 
- **Estructura del UI:** Extrae el esquema de la interfaz gráfica y detecta secciones clave (Navbar, Hero, Features, Footer, etc).
- **Extracción de Recursos (Assets):** Encuentra las rutas de las imágenes clave, SVGs o iconos, descárgalos localmente (a `public/assets/` o `public/images/`) usando comandos como `curl`.

## 2. Traducción a Tailwind CSS y Next.js
**Usa Componentes de Servidor o Cliente (React 19 / Next.js)** apropiados.
- Transforma los estilos CSS nativos descubiertos en clases de TailwindCSS. 
- Implementa colores (ej. dark modes, paletas específicas del cliente) configurando tu archivo global `globals.css` (o `tailwind.config.ts` si corresponde). 

## 3. Implementación Estética "Premium"
No hagas la página para verse "básica" ni funcional sin más, la estética es vital:
- **Añade glassmorphism** donde calce, por ejemplo un navbar semi-transparente.
- **Transiciones y animaciones**: Haz que la página se sienta viva integrando Tailwind `transition-`, `hover:` effects e interactividad.
- **Alineación Perfecta**: Usa Flexbox y CSS Grid.

## 4. Ensamblaje e Integración en Portafolio
- Cada sitio traído se colocará típicamente dentro de una ruta (ej. `/app/projects/[project_name]/page.tsx`) en formato *App Router* si está actuando como una "demo" dentro del portafolio. O en su propio subproyecto, dependiendo de lo que el USER requiera.
- Asegúrate de actualizar el archivo `layout.tsx` (si aplica) u organizar un sistema de enrutamiento limpio (Navigation System).

## Resumen de Acción a invocar ante "trae este sitio..."
Al momento de ejecutar este workflow interactuando con el usuario:
1. Pídele la **URL** objetivo si aún no te la ha dado. Acompañada de si quiere que sea reactiva o estática.
2. Lee los datos usando `read_url_content` (y, de ser posible, toma una captura/video si es necesario renderizar con browser_subagent).
3. Construye los componentes Next.js iterativamente en `/src/components/`.
4. Ensambla y corre las pruebas.
