import { useState } from "react";
import "./Gallery.css";
import DATA from "../data/galleryData.json";

const TABS = [
  { key: "national", label: "National" },
  { key: "ethekwini", label: "eThekwini" },
];

export default function Gallery() {
  const [tab, setTab] = useState("national");
  return (
    <div className="gal-wrap">
      <div className="gal-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`gal-tab ${tab === t.key ? "active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="gal-groups">
        {DATA[tab].map((g) => (
          <GroupCard key={g.id} group={g} />
        ))}
      </div>
    </div>
  );
}

function GroupCard({ group }) {
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
        className="gc-previews"
        style={{ height: "auto", maxHeight: 520, overflow: "hidden" }}
      >
        {group.previews.map((p, i) => (
          <Preview key={i} preview={p} idx={i} />
        ))}
      </div>
    </div>
  );
}

function Preview({ preview, idx }) {
  const open = () =>
    window.open(`/plots/${preview.file}`, "_blank", "noopener,noreferrer");

  const colStarts = [1, 4, 2, 4, 3, 5];
  const colSpans = [3, 3, 2, 2, 2, 2];
  const baseRow = [1, 1, 2, 2, 3, 3];
  const rotate = [-1.5, 1.2, -0.6, 0.9, -1, 0.6];
  const yNudge = [-2, 0, -6, 8, 0, -4];

  const k = idx % 6;
  const layer = Math.floor(idx / 6);
  const style = {
    gridColumn: `${colStarts[k]} / span ${colSpans[k]}`,
    gridRow: baseRow[k] + layer * 3,
    transform: `translateY(${yNudge[k]}px) rotate(${rotate[k]}deg)`,
  };

  return (
    <button
      className="pv-card"
      style={style}
      onClick={open}
      title="Open in new tab"
    >
      <img
        src={preview.thumb || `/plots/${preview.file}`}
        alt=""
        loading="lazy"
      />
      <span className="pv-type">{preview.type}</span>
    </button>
  );
}
