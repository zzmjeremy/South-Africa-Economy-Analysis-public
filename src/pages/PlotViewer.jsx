import { useParams, useNavigate } from "react-router-dom";
import { plotsData } from "./Results";

function PlotViewer() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(decodeURIComponent(name));
  const navigate = useNavigate();

  const plot = Object.values(plotsData)
    .flat()
    .find((p) => p.name === decodedName);

  if (!plot) {
    return <p style={{ padding: "2rem" }}>Plot not found.</p>;
  }

  const files = plot.files || [plot.file];

  return (
    <div style={{ padding: "2rem" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "1.5rem",
          background: "#0055aa",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem 1.5rem",
          cursor: "pointer",
        }}
      >
        ← Back to Results
      </button>

      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{plot.name}</h2>
      <p style={{ color: "#444", marginBottom: "2rem" }}>{plot.description}</p>

      {files.map((file, idx) =>
        file.endsWith(".html") ? (
          <iframe
            key={idx}
            src={`/plots/${file}`}
            title={`plot-${idx}`}
            width="100%"
            height="700"
            style={{
              border: "1px solid #ccc",
              borderRadius: "1rem",
              marginBottom: "2rem",
            }}
          />
        ) : (
          <img
            key={idx}
            src={`/plots/${file}`}
            alt={`plot-${idx}`}
            style={{
              width: "100%",
              borderRadius: "1rem",
              marginBottom: "2rem",
            }}
          />
        )
      )}
    </div>
  );
}

export default PlotViewer;
