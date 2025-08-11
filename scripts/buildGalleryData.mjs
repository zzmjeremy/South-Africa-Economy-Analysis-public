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

const tagsFrom = (files) => {
  const arr = Array.isArray(files) ? files : [files];
  const hasHtml = arr.some((f) => /\.html?$/i.test(f));
  const hasPng = arr.some((f) => /\.png$/i.test(f));
  const isMap = arr.some((f) => /hex|map|choropleth|geo/i.test(f));
  const isLine = arr.some((f) => /line|growth/i.test(f));
  const out = [];
  if (isMap) out.push("Map");
  if (isLine) out.push("Line");
  if (hasHtml) out.push("Interactive");
  if (hasPng) out.push("Image");
  return out.length ? out : ["Mixed"];
};

const toPreview = (f) => ({
  file: f,
  thumb: thumbFor(f),
  type: /\.html?$/i.test(f) ? "html" : "image",
});

const raw = JSON.parse(fs.readFileSync(RAW_PATH, "utf8"));

let natIdx = 1,
  ethIdx = 1;
const national = (raw.national || []).map((g) => ({
  id: `nat-${natIdx++}`,
  title: g.name,
  desc: g.description || "",
  tags: tagsFrom(g.files ?? g.file),
  conceptImg: `/concepts/${slug(g.name)}.png`,
  previews: (g.files ? g.files : [g.file]).map(toPreview),
}));

const ethekwini = (raw.eth || []).map((g) => ({
  id: `eth-${ethIdx++}`,
  title: g.name,
  desc: g.description || "",
  tags: tagsFrom(g.files ?? g.file),
  conceptImg: `/concepts/${slug(g.name)}.png`,
  previews: (g.files ? g.files : [g.file]).map(toPreview),
}));

const DATA = { national, ethekwini };
process.stdout.write(JSON.stringify(DATA, null, 2));
