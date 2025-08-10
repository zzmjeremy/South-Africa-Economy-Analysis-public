import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div
      style={{
        maxWidth: "1160px",
        margin: "0 auto",
        padding: "0 1rem 3rem 1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#223a4e",
      }}
    >
      <h1
        style={{ fontWeight: 700, fontSize: "2.8rem", marginBottom: "0.2rem" }}
      >
        Results
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "1.8rem", color: "#555" }}>
        Explore interactive plots by category. Click a plot name to open the
        full interactive visualization in a viewer page (with custom scaling).
      </p>

      <input
        type="text"
        placeholder="Search regions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "0.5rem 1rem",
          marginBottom: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "100%",
          maxWidth: "400px",
          fontSize: "1rem",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveTab(cat.key);
              setSearchQuery("");
            }}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "1.05rem",
              fontWeight: activeTab === cat.key ? 700 : 400,
              color: activeTab === cat.key ? "#1151b8" : "#445566",
              borderBottom:
                activeTab === cat.key
                  ? "3px solid #1151b8"
                  : "3px solid transparent",
              paddingBottom: "4px",
              transition: "color 0.3s, border-bottom-color 0.3s",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {filteredPlots?.length === 0 && (
          <li style={{ color: "#888", fontStyle: "italic" }}>
            No plots found for "{searchQuery}".
          </li>
        )}
        {filteredPlots?.map((plot) => (
          <li
            key={plot.name}
            style={{
              backgroundColor: "#f9fbff",
              borderRadius: "12px",
              padding: "1rem 1.2rem",
              marginBottom: "1.25rem",
              boxShadow: "0 1px 4px rgb(0 0 0 / 0.1)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 12px rgb(0 0 0 / 0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 1px 4px rgb(0 0 0 / 0.1)")
            }
          >
            <Link
              to={`/view/${encodeURIComponent(encodeURIComponent(plot.name))}`}
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "#1151b8",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {plot.name}
            </Link>
            <p style={{ marginTop: "0.3rem", color: "#4a5364" }}>
              {plot.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
