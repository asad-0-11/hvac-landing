import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { watch } from "node:fs";
import path from "node:path";

const WATCH_DIRS = ["app", "public"];
const WATCH_EXTS = new Set([
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".css",
  ".scss",
  ".md",
  ".mdx",
  ".ico",
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".json",
]);

function run(cmd, { inherit = false } = {}) {
  return execSync(cmd, {
    stdio: inherit ? "inherit" : ["ignore", "pipe", "pipe"],
    encoding: "utf8",
  });
}

function getCurrentBranch() {
  return run("git rev-parse --abbrev-ref HEAD").trim();
}

function hasWatchedChanges() {
  const out = run("git status --porcelain -- app public").trim();
  return out.length > 0;
}

const branch = getCurrentBranch();
const watchers = [];
let timer = null;
let running = false;
let rerun = false;

function log(message) {
  console.log(`[auto-push] ${message}`);
}

function commitAndPush() {
  if (running) {
    rerun = true;
    return;
  }

  running = true;
  try {
    if (!hasWatchedChanges()) return;

    run("git add app public");
    try {
      run("git diff --cached --quiet");
      return;
    } catch {
      // staged changes exist
    }

    const stamp = new Date().toISOString().replace("T", " ").replace("Z", " UTC");
    const msg = `chore: auto-sync app/public changes (${stamp})`;
    run(`git commit -m ${JSON.stringify(msg)}`, { inherit: true });
    run(`git push origin ${branch}`, { inherit: true });
    log(`pushed commit to origin/${branch}`);
  } catch (err) {
    const details = err?.stderr?.toString?.() || err?.message || String(err);
    log(`push failed: ${details.trim()}`);
  } finally {
    running = false;
    if (rerun) {
      rerun = false;
      schedule("queued change");
    }
  }
}

function schedule(reason) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    log(`detected change (${reason}), syncing...`);
    commitAndPush();
  }, 1200);
}

for (const dir of WATCH_DIRS) {
  const fullDir = path.resolve(process.cwd(), dir);
  if (!existsSync(fullDir)) continue;
  try {
    const watcher = watch(fullDir, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      const ext = path.extname(filename).toLowerCase();
      if (!WATCH_EXTS.has(ext)) return;
      schedule(`${eventType}:${filename}`);
    });
    watchers.push(watcher);
    log(`watching ${dir}/`);
  } catch (err) {
    const details = err?.message || String(err);
    log(`could not watch ${dir}/: ${details}`);
  }
}

if (!watchers.length) {
  log("no watch directories available; exiting.");
  process.exit(1);
}

log(`ready on branch ${branch}. Press Ctrl+C to stop.`);

process.on("SIGINT", () => {
  for (const w of watchers) w.close();
  log("stopped.");
  process.exit(0);
});

