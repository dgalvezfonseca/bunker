import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve("dist/client");
const release = resolve("release/neubox");
const zip = resolve("release/bunker-neubox-production.zip");
const origin = "https://bunkermexico.com.mx";
const files = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = resolve(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else files.push(file);
  }
}

// The static host serves each page as a directory (<route>/index.html) and answers
// "/route" with a 301 to "/route/", so canonical, og:url and the sitemap use the
// trailing-slash form to point at the final URL instead of a redirect.
function urlFor(file) {
  const relativeFile = relative(root, file).split(sep).join("/");
  const route = relativeFile === "index.html" ? "" : relativeFile.replace(/\/index\.html$/, "");
  return `${origin}${route ? `/${route}/` : "/"}`;
}

function attribute(html, expression) {
  return html.match(expression)?.[1]?.replaceAll("&amp;", "&") ?? "";
}

await walk(root);
const ogImageFile = files.find((file) => /[/\\]logo-og-[^/\\]+\.png$/.test(file));
if (!ogImageFile) throw new Error("No se encontró la imagen Open Graph generada.");
const ogImage = `${origin}/assets/${ogImageFile.split(sep).at(-1)}`;
const htmlFiles = files.filter((file) => file.endsWith(`${sep}index.html`) || file === resolve(root, "index.html"));

for (const file of htmlFiles) {
  let html = await readFile(file, "utf8");
  const url = urlFor(file);
  const title = attribute(html, /<title>([^<]+)<\/title>/i);
  const description = attribute(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const meta = [
    !/rel="canonical"/i.test(html) && `<link rel="canonical" href="${url}">`,
    !/property="og:url"/i.test(html) && `<meta property="og:url" content="${url}">`,
    !/property="og:title"/i.test(html) && `<meta property="og:title" content="${title}">`,
    !/property="og:description"/i.test(html) && `<meta property="og:description" content="${description}">`,
    !/property="og:type"/i.test(html) && '<meta property="og:type" content="website">',
    !/property="og:image"/i.test(html) && `<meta property="og:image" content="${ogImage}">`,
    !/property="og:site_name"/i.test(html) && '<meta property="og:site_name" content="BÚNKER Servicios Integrales de Tecnología">',
    !/name="twitter:card"/i.test(html) && '<meta name="twitter:card" content="summary_large_image">',
    !/name="twitter:title"/i.test(html) && `<meta name="twitter:title" content="${title}">`,
    !/name="twitter:description"/i.test(html) && `<meta name="twitter:description" content="${description}">`,
    !/name="twitter:image"/i.test(html) && `<meta name="twitter:image" content="${ogImage}">`,
  ].filter(Boolean);
  if (/\/servicios\//.test(url) && !/"@type":"Service"/.test(html)) {
    meta.push(
      `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title.replace(/\s+\|\s+BÚNKER$/, ""),
        description,
        url,
        provider: { "@type": "Organization", name: "BÚNKER Servicios Integrales de Tecnología", url: origin },
      })}</script>`,
    );
  }
  if (meta.length) html = html.replace("</head>", `${meta.join("\n")}</head>`);
  const canonical = attribute(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const ogUrl = attribute(html, /<meta\s+property="og:url"\s+content="([^"]*)"/i);
  if (canonical !== url || ogUrl !== url) {
    throw new Error(
      `URL canónica inconsistente en ${relative(root, file)}: canonical=${canonical} og:url=${ogUrl} esperado=${url}`,
    );
  }
  await writeFile(file, html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${htmlFiles
  .map((file) => `  <url><loc>${urlFor(file)}</loc></url>`)
  .join("\n")}\n</urlset>\n`;
await writeFile(resolve(root, "sitemap.xml"), sitemap);

const banned = /(^|[/\\])(\.env(?:\.|$)|\.git|node_modules|src|package\.json|bun\.lock|tsconfig\.json|.*\.map)$/i;
await walk(root);
const forbidden = files.map((file) => relative(root, file)).filter((file) => banned.test(file));
if (forbidden.length) throw new Error(`Archivos no publicables: ${forbidden.join(", ")}`);

await rm(release, { recursive: true, force: true });
await mkdir(resolve("release"), { recursive: true });
await cp(root, release, { recursive: true });
await rm(zip, { force: true });
// ZIP output needs bsdtar (Windows tar.exe). In Git Bash, "tar" resolves to GNU tar,
// which cannot write ZIP and parses "C:\..." as a remote host, so call it explicitly.
const tar =
  process.platform === "win32"
    ? resolve(process.env.SystemRoot ?? "C:\\Windows", "System32", "tar.exe")
    : "tar";
const archived = spawnSync(tar, ["-a", "-cf", zip, "-C", release, "."], { stdio: "inherit" });
if (archived.status !== 0) throw new Error("No se pudo crear el ZIP de NEUBOX.");
const listed = spawnSync(tar, ["-tf", zip], { encoding: "utf8" });
if (listed.status !== 0 || !listed.stdout.includes(".htaccess") || !listed.stdout.includes("index.html")) {
  throw new Error("El ZIP no contiene index.html y .htaccess en su raíz.");
}
console.log(`NEUBOX listo: ${htmlFiles.length} rutas prerenderizadas y ${files.length} archivos estáticos.`);
