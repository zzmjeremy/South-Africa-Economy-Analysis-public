import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {key: "national_sars", label:"National SARS"},
  {key: "national_trade", label:"National Trade"},
  {key: "national_census", label:"National Census"},
  { key: "prov_naics", label: "Provincial NAICS" },
  { key: "prov_nocs", label: "Provincial NOCS" },
  { key: "city_naics", label: "City NAICS" },
  { key: "city_nocs", label: "City NOCS" },
  { key: "city_naics_employment", label: "City NAICS Employment" }
];

const plotsData = {
  // ... your existing plot data (same as you provided) ...
  national_sars: [
    {
      name: "FTE Distribution",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      file: "national_sars/Municipalities by FTE Distribution.png",
    },
  ],
  prov_naics: [
    {
      name: "Alberta",
      description:
        "NAICS complexity and density for Alberta (Provincial level).",
      file: "prov_naics/Alberta.html",
    },
    {
      name: "British Columbia",
      description:
        "NAICS complexity and density for British Columbia (Provincial level).",
      file: "prov_naics/British_Columbia.html",
    },
    {
      name: "Manitoba",
      description:
        "NAICS complexity and density for Manitoba (Provincial level).",
      file: "prov_naics/Manitoba.html",
    },
    {
      name: "New Brunswick",
      description:
        "NAICS complexity and density for New Brunswick (Provincial level).",
      file: "prov_naics/New_Brunswick.html",
    },
    {
      name: "Newfoundland and Labrador",
      description:
        "NAICS complexity and density for Newfoundland and Labrador (Provincial level).",
      file: "prov_naics/Newfoundland_and_Labrador.html",
    },
    {
      name: "Northwest Territories",
      description:
        "NAICS complexity and density for Northwest Territories (Provincial level).",
      file: "prov_naics/Northwest_Territories.html",
    },
    {
      name: "Nova Scotia",
      description:
        "NAICS complexity and density for Nova Scotia (Provincial level).",
      file: "prov_naics/Nova_Scotia.html",
    },
    {
      name: "Nunavut",
      description:
        "NAICS complexity and density for Nunavut (Provincial level).",
      file: "prov_naics/Nunavut.html",
    },
    {
      name: "Ontario",
      description:
        "NAICS complexity and density for Ontario (Provincial level).",
      file: "prov_naics/Ontario.html",
    },
    {
      name: "Prince Edward Island",
      description:
        "NAICS complexity and density for Prince Edward Island (Provincial level).",
      file: "prov_naics/Prince_Edward_Island.html",
    },
    {
      name: "Quebec",
      description:
        "NAICS complexity and density for Quebec (Provincial level).",
      file: "prov_naics/Quebec.html",
    },
    {
      name: "Saskatchewan",
      description:
        "NAICS complexity and density for Saskatchewan (Provincial level).",
      file: "prov_naics/Saskatchewan.html",
    },
    {
      name: "Yukon",
      description: "NAICS complexity and density for Yukon (Provincial level).",
      file: "prov_naics/Yukon.html",
    },
  ],
  prov_nocs: [
    {
      name: "Alberta",
      description:
        "NOCS complexity and density for Alberta (Provincial level).",
      file: "prov_nocs/Alberta.html",
    },
    {
      name: "British Columbia",
      description:
        "NOCS complexity and density for British Columbia (Provincial level).",
      file: "prov_nocs/British_Columbia.html",
    },
    {
      name: "Manitoba",
      description:
        "NOCS complexity and density for Manitoba (Provincial level).",
      file: "prov_nocs/Manitoba.html",
    },
    {
      name: "New Brunswick",
      description:
        "NOCS complexity and density for New Brunswick (Provincial level).",
      file: "prov_nocs/New_Brunswick.html",
    },
    {
      name: "Newfoundland and Labrador",
      description:
        "NOCS complexity and density for Newfoundland and Labrador (Provincial level).",
      file: "prov_nocs/Newfoundland_and_Labrador.html",
    },
    {
      name: "Northwest Territories",
      description:
        "NOCS complexity and density for Northwest Territories (Provincial level).",
      file: "prov_nocs/Northwest_Territories.html",
    },
    {
      name: "Nova Scotia",
      description:
        "NOCS complexity and density for Nova Scotia (Provincial level).",
      file: "prov_nocs/Nova_Scotia.html",
    },
    {
      name: "Nunavut",
      description:
        "NOCS complexity and density for Nunavut (Provincial level).",
      file: "prov_nocs/Nunavut.html",
    },
    {
      name: "Ontario",
      description:
        "NOCS complexity and density for Ontario (Provincial level).",
      file: "prov_nocs/Ontario.html",
    },
    {
      name: "Prince Edward Island",
      description:
        "NOCS complexity and density for Prince Edward Island (Provincial level).",
      file: "prov_nocs/Prince_Edward_Island.html",
    },
    {
      name: "Quebec",
      description: "NOCS complexity and density for Quebec (Provincial level).",
      file: "prov_nocs/Quebec.html",
    },
    {
      name: "Saskatchewan",
      description:
        "NOCS complexity and density for Saskatchewan (Provincial level).",
      file: "prov_nocs/Saskatchewan.html",
    },
    {
      name: "Yukon",
      description: "NOCS complexity and density for Yukon (Provincial level).",
      file: "prov_nocs/Yukon.html",
    },
  ],
  city_naics: [
    {
      name: "Central Okanagan",
      description:
        "NAICS complexity and density for Central Okanagan (City level).",
      file: "city_naics/Central_Okanagan.html",
    },
    {
      name: "Central Okanagan West",
      description:
        "NAICS complexity and density for Central Okanagan West (City level).",
      file: "city_naics/Central_Okanagan_West.html",
    },
    {
      name: "Duck Lake 7",
      description: "NAICS complexity and density for Duck Lake 7 (City level).",
      file: "city_naics/Duck_Lake_7.html",
    },
    {
      name: "Kelowna (City)",
      description: "NAICS complexity and density for Kelowna (City level).",
      file: "city_naics/Kelowna_(City).html",
    },
    {
      name: "Lake Country",
      description:
        "NAICS complexity and density for Lake Country (City level).",
      file: "city_naics/Lake_Country.html",
    },
    {
      name: "Peachland",
      description: "NAICS complexity and density for Peachland (City level).",
      file: "city_naics/Peachland.html",
    },
    {
      name: "Tsinstikeptum 9",
      description:
        "NAICS complexity and density for Tsinstikeptum 9 (City level).",
      file: "city_naics/Tsinstikeptum_9.html",
    },
    {
      name: "Tsinstikeptum 10",
      description:
        "NAICS complexity and density for Tsinstikeptum 10 (City level).",
      file: "city_naics/Tsinstikeptum_10.html",
    },
    {
      name: "Vernon",
      description: "NAICS complexity and density for Vernon (City level).",
      file: "city_naics/Vernon.html",
    },

    {
      name: "West Kelowna",
      description:
        "NAICS complexity and density for West Kelowna (City level).",
      file: "city_naics/West_Kelowna.html",
    },
  ],
  city_nocs: [
    {
      name: "Cranbrook (CA), B.C.",
      description:
        "NOCS complexity and density for Cranbrook (City level, BC).",
      file: "city_nocs/Cranbrook_(CA),_B.C..html",
    },
    {
      name: "Kamloops (CMA), B.C.",
      description: "NOCS complexity and density for Kamloops (City level, BC).",
      file: "city_nocs/Kamloops_(CMA),_B.C..html",
    },
    {
      name: "Kelowna",
      description: "NOCS complexity and density for Kelowna (City level, BC).",
      file: "city_nocs/Kelowna.html",
    },
    {
      name: "Kelowna (CMA), B.C.",
      description:
        "NOCS complexity and density for Kelowna (CMA, City level, BC).",
      file: "city_nocs/Kelowna_(CMA),_B.C..html",
    },
    {
      name: "Nelson (CA), B.C.",
      description: "NOCS complexity and density for Nelson (City level, BC).",
      file: "city_nocs/Nelson_(CA),_B.C..html",
    },
    {
      name: "Penticton",
      description:
        "NOCS complexity and density for Penticton (City level, BC).",
      file: "city_nocs/Penticton.html",
    },
    {
      name: "Penticton (CA), B.C.",
      description:
        "NOCS complexity and density for Penticton (CA, City level, BC).",
      file: "city_nocs/Penticton_(CA),_B.C..html",
    },
    {
      name: "Salmon Arm",
      description:
        "NOCS complexity and density for Salmon Arm (City level, BC).",
      file: "city_nocs/Salmon_Arm.html",
    },
    {
      name: "Salmon Arm (CA), B.C.",
      description:
        "NOCS complexity and density for Salmon Arm (CA, City level, BC).",
      file: "city_nocs/Salmon_Arm_(CA),_B.C..html",
    },
    {
      name: "Trail (CA), B.C.",
      description: "NOCS complexity and density for Trail (City level, BC).",
      file: "city_nocs/Trail_(CA),_B.C..html",
    },
    {
      name: "Vernon",
      description: "NOCS complexity and density for Vernon (City level, BC).",
      file: "city_nocs/Vernon.html",
    },
    // {
    //   name: "Vernon (CA), B.C.",
    //   description: "NOCS complexity and density for Vernon (CA, City level, BC).",
    //   file: "city_nocs/Vernon_(CA),_B.C..html"
    // }
  ],
  city_naics_employment: [
    {
      name: "Central Okanagan",
      description:
        "Employment counts by NAICS for Central Okanagan (City level).",
      file: "city_naics_employment/Central_Okanagan.html",
    },
    {
      name: "Central Okanagan West",
      description:
        "Employment counts by NAICS for Central Okanagan West (City level).",
      file: "city_naics_employment/Central_Okanagan_West.html",
    },
    {
      name: "Duck Lake 7",
      description: "Employment counts by NAICS for Duck Lake 7 (City level).",
      file: "city_naics_employment/Duck_Lake_7.html",
    },
    {
      name: "Kelowna (City)",
      description: "Employment counts by NAICS for Kelowna (City level).",
      file: "city_naics_employment/Kelowna_(City).html",
    },
    {
      name: "Lake Country",
      description: "Employment counts by NAICS for Lake Country (City level).",
      file: "city_naics_employment/Lake_Country.html",
    },
    {
      name: "Peachland",
      description: "Employment counts by NAICS for Peachland (City level).",
      file: "city_naics_employment/Peachland.html",
    },
    {
      name: "Tsinstikeptum 9",
      description:
        "Employment counts by NAICS for Tsinstikeptum 9 (City level).",
      file: "city_naics_employment/Tsinstikeptum_9.html",
    },
    {
      name: "Tsinstikeptum 10",
      description:
        "Employment counts by NAICS for Tsinstikeptum 10 (City level).",
      file: "city_naics_employment/Tsinstikeptum_10.html",
    },
    {
      name: "Vernon",
      description: "Employment counts by NAICS for Vernon (City level).",
      file: "city_naics_employment/Vernon.html",
    },

    {
      name: "West Kelowna",
      description: "Employment counts by NAICS for West Kelowna (City level).",
      file: "city_naics_employment/West_Kelowna.html",
    },
  ],
};

function Results() {
  const [activeTab, setActiveTab] = useState("prov_naics");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter plots based on search query (case insensitive)
  const filteredPlots = plotsData[activeTab]?.filter(plot =>
    plot.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{
      maxWidth: "1160px",
      margin: "0 auto",
      padding: "0 1rem 3rem 1rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#223a4e"
    }}>
      <h1 style={{ fontWeight: 700, fontSize: "2.8rem", marginBottom: "0.2rem" }}>Results</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "1.8rem", color: "#555" }}>
        Explore interactive plots by category. Click a plot name to open the full interactive visualization in a viewer page (with custom scaling).
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search regions..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        style={{
          padding: "0.5rem 1rem",
          marginBottom: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "100%",
          maxWidth: "400px",
          fontSize: "1rem"
        }}
      />

      {/* Tabs */}
      <div style={{ display: "flex", gap: "2.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveTab(cat.key);
              setSearchQuery(""); // clear search when tab changes
            }}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "1.05rem",
              fontWeight: activeTab === cat.key ? 700 : 400,
              color: activeTab === cat.key ? "#1151b8" : "#445566",
              borderBottom: activeTab === cat.key ? "3px solid #1151b8" : "3px solid transparent",
              paddingBottom: "4px",
              transition: "color 0.3s, border-bottom-color 0.3s"
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Plot list */}
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {filteredPlots?.length === 0 && (
          <li style={{ color: "#888", fontStyle: "italic" }}>
            No plots found for "{searchQuery}".
          </li>
        )}
        {filteredPlots?.map(plot => (
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
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgb(0 0 0 / 0.15)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 4px rgb(0 0 0 / 0.1)"}
          >
            <Link
              to={`/view/${plot.file}`}
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "#1151b8",
                textDecoration: "underline",
                cursor: "pointer"
              }}
            >
              {plot.name}
            </Link>
            <p style={{ marginTop: "0.3rem", color: "#4a5364" }}>{plot.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
