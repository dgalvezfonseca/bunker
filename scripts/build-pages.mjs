import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const viteCli = fileURLToPath(new URL("../node_modules/vite/bin/vite.js", import.meta.url));
const build = spawn(process.execPath, [viteCli, "build", "--mode", "github-pages"], {
  env: { ...process.env, GITHUB_PAGES: "true" },
  stdio: "inherit",
});

build.on("exit", (code) => process.exit(code ?? 1));
