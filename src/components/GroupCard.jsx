import { useMemo } from "react";
import { computePlacements } from "../utils/layout.js";
import PreviewCard from "./PreviewCard.jsx";
import { LAYOUT_OVERRIDES } from "../config/layoutOverrides.js";

export default function GroupCard({ group }) {
  const key = group.id;
  const ovr = LAYOUT_OVERRIDES[key] || {};
  const mergedLayout = { ...(group.layout || {}), ...ovr };

  const placements = useMemo(
    () => computePlacements(group.previews, mergedLayout, key),
    [group, key]
  );

  return (
    <div className="gcard">
      <div className="gcard-main">
        <img className="gcard-concept" src={group.conceptImg} alt="" />
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
