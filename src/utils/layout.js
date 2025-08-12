function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}
function lerp(t, a, b) {
  return a + (b - a) * t;
}
function seedFn(key) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return (salt) => {
    let x = (h ^ Math.imul(Math.floor(salt * 1e6), 2246822519)) >>> 0;
    x ^= x >>> 16;
    x = Math.imul(x, 2246822519) >>> 0;
    x ^= x >>> 13;
    x = Math.imul(x, 3266489917) >>> 0;
    x ^= x >>> 16;
    return (x >>> 0) / 4294967295;
  };
}

export function computePlacements(previews, layout = {}, seedKey = "seed") {
  const cols = 12;
  const perRow = layout.perRow ?? 3;
  const n = previews.length;
  const placed = Array(n).fill(null);
  const rowsDef = Array.isArray(layout.rows) ? layout.rows : null;

  if (rowsDef && rowsDef.length) {
    rowsDef.forEach((rowArr, r) => {
      const count = Math.max(1, rowArr.length);
      const slot = Math.floor(cols / Math.max(1, count));
      rowArr.forEach((origIdx, p) => {
        if (previews[origIdx]) {
          placed[origIdx] = {
            row: 1 + r,
            colStart: 1 + p * slot,
            colSpan: Math.max(2, slot),
          };
        }
      });
    });
    let r = rowsDef.length;
    const rest = [];
    for (let i = 0; i < n; i++) if (!placed[i]) rest.push(i);
    if (rest.length) {
      const slot = Math.floor(cols / Math.max(1, perRow));
      rest.forEach((origIdx, k) => {
        const pos = k % perRow;
        const row = 1 + r + Math.floor(k / perRow);
        placed[origIdx] = {
          row,
          colStart: 1 + pos * slot,
          colSpan: Math.max(2, slot),
        };
      });
    }
  } else {
    const slot = Math.floor(cols / Math.max(1, perRow));
    for (let i = 0; i < n; i++) {
      const pos = i % perRow;
      const row = 1 + Math.floor(i / perRow);
      placed[i] = { row, colStart: 1 + pos * slot, colSpan: Math.max(2, slot) };
    }
  }

  const s = seedFn(String(seedKey));
  const vars = placed.map((p, i) => {
    const rot = lerp(s(i + 0.3), -0.9, 0.9);
    const y = Math.round(lerp(s(i + 0.6), -4, 4));
    return {
      "--col-start": p.colStart,
      "--col-span": p.colSpan,
      "--row": p.row,
      "--rot": `${rot}deg`,
      "--y": `${y}px`,
    };
  });

  return placed.map((b, i) => ({ base: b, vars: vars[i] }));
}
