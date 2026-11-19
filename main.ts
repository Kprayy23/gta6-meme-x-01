// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: this program only copies POST.json
// from the repository root to the output directory, where the gate
// reads it. It does no network, reads no clock, and writes the same
// bytes on every run.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The grader runs `node /bot/main.ts` from another working directory
// with MAKEFUN_BOT_DIR=/bot, so the repository is resolved from that
// env var — or from this file's own directory, which is the repo root —
// and never from process.cwd(), which points elsewhere at grade time.
const BOT_DIR = resolve(
  process.env.MAKEFUN_BOT_DIR ??
    fileURLToPath(new URL(".", import.meta.url)),
);
const OUTPUT_DIR = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, "POST.json");
const target = join(OUTPUT_DIR, "POST.json");

// Refuse to copy a POST.json that is not a JSON object naming a url:
// a bad post file must fail loudly here instead of silently passing
// an empty or unreadable file on to the gate.
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (!parsed || typeof parsed !== "object" || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url");
}
copyFileSync(source, target);
