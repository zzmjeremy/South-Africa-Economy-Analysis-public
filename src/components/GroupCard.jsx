import { useMemo, useRef, useState } from "react";
import { computePlacements } from "../utils/layout.js";
import PreviewCard from "./PreviewCard.jsx";
import { LAYOUT_OVERRIDES } from "../config/layoutOverrides.js";

export default function GroupCard({ group }) {
  const key = group.id;
  const ovr = LAYOUT_OVERRIDES[key] || {};
  const [side, setSide] = useState("right");

  const decideSide = (panelW = 640, gap = 12) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const vw = window.innerWidth || document.documentElement.clientWidth;
    const fitsRight = rect.right + gap + panelW <= vw;
    const fitsLeft = rect.left - gap - panelW >= 0;
    setSide(fitsRight ? "right" : fitsLeft ? "left" : "right");
  };

  const cardRef = useRef(null);

  const mergedLayout = useMemo(() => {
    return { ...(group.layout || {}), ...ovr, side };
  }, [group.layout, ovr, side]);

  const placements = useMemo(
    () => computePlacements(group.previews, mergedLayout, `${key}-${side}`),
    [group, mergedLayout, key, side]
  );

  const idx =
    Array.isArray(mergedLayout.rows) &&
    mergedLayout.rows.length > 0 &&
    Array.isArray(mergedLayout.rows[0]) &&
    mergedLayout.rows[0].length > 0
      ? mergedLayout.rows[0][0]
      : 0;

  const first = group.previews[idx] || group.previews[0];
  const conceptSrc = first ? first.thumb || `/plots/${first.file}` : "";

  return (
    <div
      className="gcard"
      data-side={side}
      ref={cardRef}
      onMouseEnter={() => decideSide()}
    >
      <div className="gcard-main">
        <img className="gcard-concept" src={conceptSrc} alt="" />
        <div className="gcard-body">
          <h3 className="gcard-title">{group.title}</h3>
          <p className="gcard-desc">{group.desc}</p>
          <div className="gcard-tags">
            {group.tags?.map((t) => (
              <span className="gc-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="gc-previews gc-12cols gc-tight"
        data-side={side}
        style={{
          "--panel-w": mergedLayout.panelWidth || "640px",
          "--row-h": mergedLayout.rowHeight || "160px",
        }}
      >
        {group.previews.map((p, i) => (
          <PreviewCard key={i} preview={p} cssVars={placements[i].vars} />
        ))}
      </div>
    </div>
  );
}
