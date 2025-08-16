import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>USE – UBC South Africa Economy Analysis</h1>
        <p>
          Explore how South Africa’s national and local economies align with
          workforce capabilities, with a spotlight on eThekwini.
        </p>
        <h2>What You Can Do Here</h2>
        <ul>
          <li>
            Examine South Africa’s industry–skill fit and highlight
            opportunities for inclusive growth.
          </li>
          <li>
            Explore eThekwini’s industrial composition and its alignment with
            workforce capacity.
          </li>
          <li>
            Support data-driven decisions for economic planning, investment, and
            development.
          </li>
          <li>Visualize employment and capability trends across sectors.</li>
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
