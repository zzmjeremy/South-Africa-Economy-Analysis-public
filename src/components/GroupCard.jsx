import { useMemo } from "react";
import { computePlacements } from "../utils/layout.js";
import PreviewCard from "./PreviewCard.jsx";

export default function GroupCard({ group }) {
  const placements = useMemo(
    () =>
      computePlacements(group.previews, group.layout, group.id || group.title),
    [group]
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
          "--panel-w": group.layout?.panelWidth || "640px",
          "--row-h": group.layout?.rowHeight || "160px",
        }}
      >
        {group.previews.map((p, i) => (
          <PreviewCard key={i} preview={p} cssVars={placements[i].vars} />
        ))}
      </div>
    </div>
  );
}
