import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDirectory = resolve(repositoryRoot, "public");
const inputUrl = process.env.SITE_URL?.trim();

if (!inputUrl) {
  console.error(
    "Falta SITE_URL. Ejemplo PowerShell: $env:SITE_URL='https://dominio-real.mx'; npm run seo:generate",
  );
  process.exitCode = 1;
} else {
  const parsedUrl = new URL(inputUrl);
  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new Error("SITE_URL debe comenzar con http:// o https://");
  }

  const baseUrl = `${parsedUrl.origin}${parsedUrl.pathname.replace(/\/$/, "")}`;
  const updatedAt = new Date().toISOString().slice(0, 10);
  const routes = [
    { path: "/", changefreq: "monthly", priority: "1.0" },
    { path: "/aviso-de-privacidad", changefreq: "yearly", priority: "0.3" },
    { path: "/politica-de-cookies", changefreq: "yearly", priority: "0.3" },
    { path: "/terminos-de-servicio", changefreq: "yearly", priority: "0.3" },
  ];

  const sitemapEntries = routes
    .map(
      ({ path, changefreq, priority }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${updatedAt}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

  const robotsPath = resolve(publicDirectory, "robots.txt");
  const currentRobots = await readFile(robotsPath, "utf8");
  const sitemapDirective = `Sitemap: ${baseUrl}/sitemap.xml`;
  const directivePattern = /(?:# PENDIENTE_DOMINIO:.*|Sitemap:.*)$/m;
  const robots = directivePattern.test(currentRobots)
    ? currentRobots.replace(directivePattern, sitemapDirective)
    : `${currentRobots.trimEnd()}\n\n${sitemapDirective}\n`;

  const llms = `# BÚNKER SERVICIOS INTEGRALES DE TECNOLOGÍA

> Diseño, instalación y monitoreo de soluciones de seguridad electrónica para hogares, empresas e instalaciones en México.

## Páginas principales

- [Inicio](${baseUrl}/)
- [Aviso de privacidad](${baseUrl}/aviso-de-privacidad)
- [Política de cookies](${baseUrl}/politica-de-cookies)
- [Términos de servicio](${baseUrl}/terminos-de-servicio)

## Servicios descritos

- Videovigilancia CCTV e IP.
- Centro de monitoreo.
- Control de acceso.
- Sistemas de alarma.
- Analítica inteligente.
- Instalación y mantenimiento.

## Notas

- Las marcas mencionadas no implican partnership o certificación.
- Los proyectos y fotografías identificados como muestra no acreditan casos reales.
- Reglas de rastreo: ${baseUrl}/robots.txt

Actualizado: ${updatedAt}
`;

  await Promise.all([
    writeFile(resolve(publicDirectory, "sitemap.xml"), sitemap),
    writeFile(robotsPath, robots),
    writeFile(resolve(publicDirectory, "llms.txt"), llms),
  ]);

  console.log(`Archivos SEO actualizados para ${baseUrl}`);
}
