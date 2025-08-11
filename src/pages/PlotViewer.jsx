import { useParams, useNavigate } from "react-router-dom";
import { plotsData } from "./Results";
import "./PlotViewer.css";

function PlotViewer() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(decodeURIComponent(name));
  const navigate = useNavigate();

  const plot = Object.values(plotsData)
    .flat()
    .find((p) => p.name === decodedName);

  if (!plot) {
    return <p className="pv-not-found">Plot not found.</p>;
  }

  const files = plot.files || [plot.file];

  return (
    <div className="pv-wrap">
      <button className="pv-back" onClick={() => navigate(-1)}>
        ← Back to Results
      </button>

      <h2 className="pv-title">{plot.name}</h2>
      <p className="pv-desc">{plot.description}</p>

      {files.map((file, idx) =>
        file.endsWith(".html") ? (
          <div className="pv-frame" key={idx}>
            <iframe
              src={`/plots/${file}`}
              title={`plot-${idx}`}
              loading="lazy"
            />
          </div>
        ) : (
          <img
            key={idx}
            className="pv-image"
            src={`/plots/${file}`}
            alt={`plot-${idx}`}
            loading="lazy"
          />
        )
      )}
    </div>
  );
}

export default PlotViewer;
