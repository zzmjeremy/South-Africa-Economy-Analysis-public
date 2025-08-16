import React from "react";
import PageContainer from "../components/PageContainer";
import "./About.css";

function About() {
  return (
    <PageContainer>
      <div className="about-container">
        <h1>About USE</h1>
        <p>
          USE is developed by the <b>UBC South Africa Economy Analysis Group</b>
          , a multidisciplinary team focused on advancing economic resilience
          and workforce development across South Africa, with a special emphasis
          on the eThekwini metro. Our mission is to deliver data-driven insights
          that help policymakers, communities, and businesses understand the fit
          between industry demand and local labor capabilities in both national
          and city contexts.
        </p>

        <h2>Our Focus Areas</h2>
        <ul>
          <li>
            Mapping workforce skills and industrial employment across South
            African regions and the eThekwini metro
          </li>
          <li>
            Identifying gaps and opportunities for sustainable economic growth
          </li>
          <li>
            Developing interactive visualization tools tailored to South African
            data
          </li>
          <li>
            Partnering with stakeholders to support informed, evidence-based
            decision-making
          </li>
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
