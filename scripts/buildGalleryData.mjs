import fs from "node:fs";
import path from "node:path";

const RAW_PATH = path.join("src", "data", "plotsRaw.json");
const THUMBS_DIR = path.join("public", "thumbs");

function thumbFor(relFile) {
  const base = path.basename(relFile).replace(/\.[^.]+$/, "");
  const cands = [
    path.join(THUMBS_DIR, `${base}.png`),
    path.join(THUMBS_DIR, `${base}.jpg`),
    path.join(THUMBS_DIR, `${base}.webp`),
    path.join(THUMBS_DIR, `${base}.PNG`),
    path.join(THUMBS_DIR, `${base}.JPG`),
    path.join(THUMBS_DIR, `${base}.WEBP`),
  ];
  const hit = cands.find((p) => fs.existsSync(p));
  return hit ? `/thumbs/${path.basename(hit)}` : undefined;
}

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");

const toPreview = (f, i) => ({
  idx: i,
  file: f,
  thumb: thumbFor(f),
  type: /\.html?$/i.test(f) ? "html" : "image",
});

const raw = JSON.parse(fs.readFileSync(RAW_PATH, "utf8"));

let natIdx = 1;
let ethIdx = 1;

const national = (raw.national || []).map((g) => ({
  id: `nat-${natIdx++}`,
  title: g.name,
  desc: g.description || "",
  tags: Array.isArray(g.tags) ? g.tags : [], 
  conceptImg: `/concepts/${slug(g.name)}.png`,
  previews: (g.files ? g.files : [g.file]).map(toPreview),
}));

const ethekwini = (raw.eth || []).map((g) => ({
  id: `eth-${ethIdx++}`,
  title: g.name,
  desc: g.description || "",
  tags: Array.isArray(g.tags) ? g.tags : [], 
  conceptImg: `/concepts/${slug(g.name)}.png`,
  previews: (g.files ? g.files : [g.file]).map(toPreview),
}));

const DATA = { national, ethekwini };
process.stdout.write(JSON.stringify(DATA, null, 2));
