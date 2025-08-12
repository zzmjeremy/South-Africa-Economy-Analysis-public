import { useState } from "react";
import "./Gallery.css";
import DATA from "../data/galleryData.json";
import GroupCard from "./GroupCard.jsx";

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
