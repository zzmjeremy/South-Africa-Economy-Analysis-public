export default function PreviewCard({ preview, cssVars }) {
  const open = () =>
    window.open(`/plots/${preview.file}`, "_blank", "noopener,noreferrer");

  return (
    <button
      className="pv-card"
      style={cssVars}
      onClick={open}
      title="Open in new tab"
    >
      <div
        className="pv-inner"
        style={{
          "--base-transform": `translateY(var(--y,0px)) rotate(var(--rot,0deg))`,
        }}
      >
        <img
          src={preview.thumb || `/plots/${preview.file}`}
          alt=""
          loading="lazy"
        />
        <span className="pv-type">{preview.type}</span>
      </div>
    </button>
  );
}
