import { useParams, useNavigate } from "react-router-dom";
import raw from "../data/plotsRaw.json"; 
import "./PlotViewer.css";

function PlotViewer() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(decodeURIComponent(name));
  const navigate = useNavigate();

  const allPlots = [...(raw.national || []), ...(raw.eth || [])];
  const plot = allPlots.find((p) => p.name === decodedName);

  if (!plot) {
    return (
      <div className="pv-wrap">
        <button className="pv-back" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <p className="pv-not-found">Plot not found.</p>
      </div>
    );
  }

  const files = Array.isArray(plot.files)
    ? plot.files
    : plot.file
    ? [plot.file]
    : [];

  return (
    <div className="pv-wrap">
      <button className="pv-back" onClick={() => navigate(-1)}>
        ← Back to Results
      </button>

      <h2 className="pv-title">{plot.name}</h2>
      <p className="pv-desc">{plot.description}</p>

      {files.map((file, idx) =>
        /\.html?$/i.test(file) ? (
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
