
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPagesBuild = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
  vite: {
    base: isGitHubPagesBuild ? "/bunker/" : "/",
    server: {
      allowedHosts: [".trycloudflare.com"],
    },
  },
});
