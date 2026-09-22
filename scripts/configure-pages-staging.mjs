import { rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("dist/client");

await Promise.all([
  writeFile(resolve(outputDirectory, "robots.txt"), "User-agent: *\nDisallow: /\n"),
  rm(resolve(outputDirectory, "sitemap.xml"), { force: true }),
]);

console.log("GitHub Pages artifact configured as noindex staging.");
