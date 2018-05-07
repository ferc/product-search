# Product Search

Aplicación web para búsqueda de publicaciones de Mercado Libre Argentina, con un servidor Express la cual contiene la API para mostrar la información en la página.

Cliente realizado con React, Redux y Redux Thunk, modularizado y con componentes reutilizables en la parte JavaScript, utilizado SASS como preprocesador CSS.

Servidor integrado con Next.js, para realizar el Server-Side Rendering mejorando notablemente la performance y el SEO de la aplicación.

### Usabilidad
Basado en los diseños y estilos del sitio original. Adaptado a dispositivos móviles.

### SEO
Uso de Server-Side Rendering con Next.js para mejorar la indexación de los web crawlers así como de las vistas preliminares de los sitios vía Open Graph (compartir vía Facebook, Twitter, Whatsapp, etc.).

Uso de tags semánticos para mejorar el entendimiento del sitio a los web crawlers.

Uso de tags meta para Open Graph como `og:image`.

###  Performance
Al ser renderizadas por el servidor se mejora notablemente la performance, reduciendo los request requeridos para renderizar el sitio.

Páginas cacheadas por Next.js.

Utilización de React y Redux sin otras librerías que contribuyan al peso del sitio.

### Escalabilidad
Uso de Redux y Redux Thunk para una mayor escabilidad del sitio. 

Componentes modularizados y reutilizables.

## Mejoras pendientes no incluídas en el alcance

* Unit Tests con Jest y Enzyme.
* Test de integración
* Utilización de linter
* i18n con react-intl