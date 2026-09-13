import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist/client");

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "_next") continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findHtmlFiles(entryPath));
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(entryPath);
  }

  return files;
}

const htmlFiles = await findHtmlFiles(outputDirectory);
let generatedRoutes = 0;

for (const sourcePath of htmlFiles) {
  const relativePath = path.relative(outputDirectory, sourcePath);
  if (relativePath === "index.html" || relativePath === "404.html" || path.basename(sourcePath) === "index.html") continue;

  const routeDirectory = path.join(outputDirectory, relativePath.slice(0, -".html".length));
  const targetPath = path.join(routeDirectory, "index.html");
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(sourcePath, targetPath);
  generatedRoutes += 1;
}

console.log(`Prepared ${generatedRoutes} clean static routes for GitHub Pages.`);
