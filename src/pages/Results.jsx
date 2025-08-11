import { useState } from "react";
import { Link } from "react-router-dom";
import "./Results.css";

const categories = [
  { key: "national_sars", label: "National SARS" },
  { key: "national_trade", label: "National Trade" },
  { key: "eth_sars", label: "eThekwini SARS" },
  { key: "eth_hex7", label: "eThekwini Hexbins" },
  { key: "eth_change", label: "eThekwini Growth" },
];

export const plotsData = {
  national_sars: [
    {
      name: "FTE Distribution",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      files: [
        "national_sars/FTE_Change.png",
        "national_sars/Municipalities_by_FTE_Distribution.png",
        "national_sars/FTE_Boxplot_Municipalities.png",
        "national_sars/Industries_by_FTE_Distribution.png",
        "national_sars/FTE_Boxplot_Industries.png",
        "national_sars/FTE_Municipalities.png",
        "national_sars/FTE_Industries.png",
      ],
    },
    {
      name: "Industry Complexity & Income Distribution",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      files: [
        "national_sars/PCI_Industry.png",
        "national_sars/Income_Industry.png",
      ],
    },
    {
      name: "Industry Change Over Time",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      files: [
        "national_sars/NationalFTE_Change.html",
        "national_sars/NationalFTE_Change_Percent.html",
        "national_sars/Muni_HighECI_FTE_Change.html",
        "national_sars/Muni_HighECI_FTE_Change_Percent.html",
        "national_sars/Muni_MidECI_FTE_Change.html",
        "national_sars/Muni_MidECI_FTE_Change_Percent.html",
        "national_sars/Muni_LowECI_FTE_Change.html",
        "national_sars/Muni_LowECI_FTE_Change_Percent.html",
      ],
    },
    {
      name: "Complexity vs. Density",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      files: [
        "national_sars/PCI_vs_Unnormalized_Density_interactive.html",
        "national_sars/PCI_vs_SH_WD_interactive.html",
        "national_sars/FTE_High_ECI_PCI_vs_Density_interactive.html",
        "national_sars/FTE_Mid_ECI_PCI_vs_Density_interactive.html",
        "national_sars/FTE_Low_ECI_PCI_vs_Density_interactive.html",
        "national_sars/FTE_High_ECI_PCI_vs_Scaled_Hidalgo_WD_interactive.html",
        "national_sars/FTE_Mid_ECI_PCI_vs_Scaled_Hidalgo_WD_interactive.html",
        "national_sars/FTE_Low_ECI_PCI_vs_Scaled_Hidalgo_WD_interactive.html",
      ],
    },
    {
      name: "S Curve",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      files: [
        "national_sars/ECI_vs_Correlation.png",
        "national_sars/S_Curve_Cities_11years.png",
        "national_sars/S_Curve_Provinces_11years_Province.png",
      ],
    },
    {
      name: "ECI Distribution",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      file: "national_sars/Muni_ECI_Distribution.png",
    },
  ],
  national_trade: [
    {
      name: "Products Distribution",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      files: [
        "national_trade/twoDigit_Product_Counts.png",
        "national_trade/twoDigit_Product_Proportion.png",
        "national_trade/Product_Counts.png",
      ],
    },
  ],
  eth_sars: [
    {
      name: "Complexity vs. d",
      description: "NAICS complexity and density .",
      files: [
        "eth_sars/FTE_ETH_PCI_vs_Density_interactive.html",
        "eth_sars/FTE_ETH_PCI_vs_Scaled_Hidalgo_Density_interactive.html",
      ],
    },
    {
      name: "FTE Distributio",
      description: "NAICS complexity and density .",
      files: [
        "eth_sars/FTE_Change.png",
        "eth_sars/FTE_Hex7.png",
        "eth_sars/FTE_Industries.png",
      ],
    },
  ],
  eth_hex7: [
    {
      name: "ECI Hexbin Map",
      description: "NAICS complexity and density .",
      files: [
        "eth_hex7/Hex_EThekwini_ECI_byValue_All.html",
        "eth_hex7/Hex_EThekwini_ECI_byPercentage_All.html",
      ],
    },
    {
      name: "Income Hexbin Map",
      description: "NAICS complexity and density .",
      files: [
        "eth_hex7/Hex_EThekwini_MedianIncome_byValue.html",
        "eth_hex7/Hex_EThekwini_MedianIncome_byPercentage.html",
      ],
    },
    {
      name: "Gini Hexbin Map",
      description: "NAICS complexity and density .",
      files: [
        "eth_hex7/Hex_EThekwini_Gini_byValue.html",
        "eth_hex7/Hex_EThekwini_Gini_byPercentage.html",
      ],
    },
    {
      name: "Combined Hexbin Map",
      description: "NAICS complexity and density .",
      file: "eth_hex7/Hex_EThekwini_Combined.png",
    },
  ],
  eth_change: [
    {
      name: "Change With Year Growth",
      description: "NAICS complexity and density .",
      files: [
        "eth_change/GrowthVS-density.html",
        "eth_change/GrowthVS-zDensity.html",
        "eth_change/Employment_growth_vs._PCI.html",
        "eth_change/Employment growth_vs._ECI.html",
        "eth_change/Income_per_FTE_vs_ECI_2024.html",
        "eth_change/Correlation_vs._ECI.png",
      ],
    },
  ],
};

function Results() {
  const [activeTab, setActiveTab] = useState("national_sars");
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
