function Home() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #f0f4ff 0%, #d9e2ff 40%, #e5ecff 100%)",
      minHeight: "100vh",
      padding: "3rem 0 1rem 0",    // reduced bottom padding from 3rem to 1rem
      boxShadow: "inset 0 0 80px 20px #cbdcff",
      display: "flex",
      justifyContent: "center",
      alignItems: "start"
    }}>
      <div style={{
        maxWidth: "720px",
        margin: "0 1rem",
        padding: "32px 40px 0 40px",  // removed bottom padding, set to 0
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(60, 80, 150, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left",
        color: "#21374A",
        backgroundColor: "#fff"
      }}>
        <h1 style={{ fontWeight: "900", fontSize: "2.5rem", marginBottom: "1rem" }}>
          RIX – Regional Industry Explorer
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>
          Discover how regional industries align with workforce skills across Canadian provinces and cities. Navigate rich visualizations designed to inform economic development and workforce planning.
        </p>
        <h2 style={{ fontWeight: "700", fontSize: "1.5rem", marginTop: "2rem" }}>
          What You Can Do Here
        </h2>
        <ul style={{ fontSize: "1.1rem", marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
          <li>Explore industry and skill fit at provincial and city levels</li>
          <li>Visualize employment and workforce capability trends</li>
          <li>Support data-driven decision-making for regional growth</li>
        </ul>
        <p style={{ marginTop: "2rem", fontSize: "1.1rem" }}>
          To learn more about our mission and team, visit the <a href="/about" style={{ color: "#1151b8", textDecoration: "underline" }}>About page</a>. For questions or collaboration, see our <a href="/contact" style={{ color: "#1151b8", textDecoration: "underline" }}>Contact page</a>.
        </p>
      </div>
    </div>
  );
}

export default Home;
