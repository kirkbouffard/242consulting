/**
 * Dash lint. No em dash (U+2014) or en dash (U+2013) in project source.
 *
 * AGENTS.md is excluded: next dev rewrites that block on every run.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const SKIP_DIRS = new Set([".git", ".next", "node_modules", "out", ".vercel"]);
const SKIP_FILES = new Set(["AGENTS.md", "package-lock.json"]);
const CHECK_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".css",
  ".json",
  ".md",
  ".html",
  ".txt",
]);

const hits: string[] = [];

function walk(dir: string): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name));
      continue;
    }
    if (SKIP_FILES.has(entry.name)) continue;
    if (!CHECK_EXT.has(path.extname(entry.name))) continue;

    const file = path.join(dir, entry.name);
    const lines = fs.readFileSync(file, "utf8").split("\n");
    lines.forEach((line, index) => {
      const column = line.search(/[\u2013\u2014]/);
      if (column !== -1) {
        hits.push(`${path.relative(root, file)}:${index + 1}:${column + 1}  ${line.trim()}`);
      }
    });
  }
}

walk(root);

if (hits.length > 0) {
  for (const hit of hits) console.error(`error ${hit}`);
  console.error(`\ncheck-dashes: ${hits.length} long dash(es) found.`);
  process.exit(1);
}

console.log("check-dashes: clean.");
