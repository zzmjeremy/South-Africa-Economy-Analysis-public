import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>RIX – Regional Industry Explorer</h1>
        <p>
          Discover how regional industries align with workforce skills across
          Canadian provinces and cities. Navigate rich visualizations designed
          to inform economic development and workforce planning.
        </p>
        <h2>What You Can Do Here</h2>
        <ul>
          <li>Explore industry and skill fit at provincial and city levels</li>
          <li>Visualize employment and workforce capability trends</li>
          <li>Support data-driven decision-making for regional growth</li>
        </ul>
        <p>
          To learn more about our mission and team, visit the{" "}
          <a href="/about">About page</a>. For questions or collaboration, see
          our <a href="/contact">Contact page</a>.
        </p>
      </div>
    </div>
  );
}

export default Home;
