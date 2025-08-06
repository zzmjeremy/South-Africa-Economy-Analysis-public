import { useLocation, useNavigate } from "react-router-dom";

function PlotViewer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Remove the "/view/" prefix to get the actual path to the HTML file
  const plotfile = location.pathname.replace(/^\/view\//, "");

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
          cursor: "pointer"
        }}
      >
        ← Back to Results
      </button>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <iframe
          src={`/plots/${plotfile}`}
          title={plotfile}
          width="1120"
          height="640"
          style={{
            border: "1px solid #ccc",
            borderRadius: "1rem",
            transform: "scale(0.8)",
            transformOrigin: "top left",
            width: "1400px",
            height: "800px"
          }}
        />
      </div>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <a
          href={`/plots/${plotfile}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0055aa", textDecoration: "underline" }}
        >
          Open full screen in new tab
        </a>
      </div>
    </div>
  );
}

export default PlotViewer;
