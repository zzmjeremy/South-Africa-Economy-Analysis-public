import { useState } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import plotsData from "../data/plotsRaw.json";

const categories = [
  { key: "national", label: "National Data" },
  { key: "eth", label: "eThekwini Data" },
];

function Results() {
  const [activeTab, setActiveTab] = useState("national");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlots = plotsData[activeTab]?.filter((plot) =>
    plot.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="results-container">
      <h1 className="results-title">Results</h1>
      <p className="results-description">
        Explore interactive plots by category. Click a plot name to open the
        full interactive visualization in a viewer page (with custom scaling).
      </p>

      <input
        type="text"
        placeholder="Search regions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="results-search"
      />

      <div className="results-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveTab(cat.key);
              setSearchQuery("");
            }}
            className={`results-tab-btn ${
              activeTab === cat.key ? "active" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ul className="results-list">
        {filteredPlots?.length === 0 && (
          <li className="results-empty">No plots found for "{searchQuery}".</li>
        )}
        {filteredPlots?.map((plot) => (
          <li key={plot.name} className="results-item">
            <Link
              to={`/view/${encodeURIComponent(encodeURIComponent(plot.name))}`}
              className="results-item-link"
            >
              {plot.name}
            </Link>
            <p className="results-item-desc">{plot.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
