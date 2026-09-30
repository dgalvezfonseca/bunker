# Despliegue NEUBOX

Producción: `https://bunkermexico.com.mx/`. El sitio es estático: NEUBOX no requiere Node, Bun, npm ni procesos persistentes.

## Generar el paquete

```powershell
npm run build:neubox
```

El comando prerenderiza las rutas y crea `release/neubox/` y `release/bunker-neubox-production.zip`. El ZIP contiene directamente `index.html`, `assets/`, las rutas prerenderizadas, `.htaccess`, `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt` y `404.html`.

## Subir mañana en cPanel

1. Confirma que el dominio apunta a este hosting y que SSL está activo.
2. Descarga un respaldo completo del contenido actual de `public_html/`.
3. Sube `bunker-neubox-production.zip` a `public_html/` y extráelo allí. No subas la carpeta contenedora ni el código fuente.
4. Verifica `https://bunkermexico.com.mx/`, una ruta profunda, `404.html`, `robots.txt`, `sitemap.xml` y que `www`/HTTP redirijan al dominio HTTPS sin `www`.
5. Para actualizar, repite el build, guarda respaldo y sustituye sólo el contenido de `public_html/`. Para revertir, restaura el respaldo.

## Pendiente: Web3Forms

Antes de generar el paquete definitivo con formulario activo, define localmente `VITE_WEB3FORMS_ACCESS_KEY` con la clave real y ejecuta `npm run build:neubox`. La clave quedará visible en el JavaScript publicado por diseño de Web3Forms; no debe guardarse como valor fijo en el repositorio. Sin esa variable, el formulario conserva validación y muestra un mensaje de preparación sin enviar datos. No se agregará CAPTCHA adicional.

## Archivos técnicos

`.htaccess` aplica redirección canónica HTTPS/no-www, 404 estática, compresión prudente, caché de assets versionados y headers básicos. No incluye CSP ni fallback SPA. `robots.txt`, `sitemap.xml`, `llms.txt` y `llms-full.txt` se generan dentro del paquete.
