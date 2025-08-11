import React from "react";
import PageContainer from "../components/PageContainer";
import "./About.css";

function About() {
  return (
    <PageContainer>
      <div className="about-container">
        <h1>About RIX</h1>
        <p>
          RIX is developed by the <b>Regional Industry Research Group (RIG)</b>,
          a multidisciplinary team dedicated to advancing regional economic
          resilience and workforce development across Canada. Our mission is to
          provide data-driven insights that help communities, policymakers, and
          businesses understand the fit between industry demands and local labor
          capabilities.
        </p>

        <h2>Our Focus Areas</h2>
        <ul>
          <li>Mapping workforce skills and industry employment by region</li>
          <li>Analyzing gaps and opportunities for economic growth</li>
          <li>Developing interactive visualization tools</li>
          <li>Collaborating with stakeholders for informed decision-making</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For inquiries or collaboration opportunities, please visit our
          <a href="/contact"> Contact page</a>.
        </p>
      </div>
    </PageContainer>
  );
}

export default About;
