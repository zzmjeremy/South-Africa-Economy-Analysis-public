import React from "react";
import PageContainer from "../components/PageContainer";

function About() {
  return (
    <PageContainer>
      <div style={{
        maxWidth: "720px",
        margin: "0 auto 0 auto",
        padding: "0.2rem 40px 1rem 40px",  // add top padding instead of margin
        borderRadius: "16px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#21374A",
        lineHeight: 1.6,
        minHeight: "calc(100vh - 160px)"
      }}>
        <h1 style={{ fontWeight: 900, fontSize: "2.8rem", marginBottom: "1rem" }}>
          About RIX
        </h1>
        <p>
          RIX is developed by the <b>Regional Industry Research Group (RIG)</b>, a multidisciplinary team dedicated to advancing regional economic resilience and workforce development across Canada.  
          Our mission is to provide data-driven insights that help communities, policymakers, and businesses understand the fit between industry demands and local labor capabilities.
        </p>

        <h2 style={{ fontWeight: 700, fontSize: "1.6rem", marginTop: "2rem", marginBottom: "0.5rem" }}>
          Our Focus Areas
        </h2>
        <ul style={{ color: "#445" }}>
          <li>Mapping workforce skills and industry employment by region</li>
          <li>Analyzing gaps and opportunities for economic growth</li>
          <li>Developing interactive visualization tools</li>
          <li>Collaborating with stakeholders for informed decision-making</li>
        </ul>

        <h2 style={{ fontWeight: 700, fontSize: "1.6rem", marginTop: "2rem", marginBottom: "0.5rem" }}>
          Contact Us
        </h2>
        <p>
          For inquiries or collaboration opportunities, please visit our <a href="/contact" style={{ color: "#1151b8", textDecoration: "underline" }}>Contact page</a>.
        </p>
      </div>
    </PageContainer>
  );
}

export default About;


  
        {/* <h2 style={{ fontWeight: 700, fontSize: "1.6rem", marginTop: "2rem", marginBottom: "0.5rem" }}>
          Meet the Team
        </h2>
        <p>
          Led by Dr. Wouter Bam and Rohan Sharma, our team combines expertise in engineering, economics, and data science to produce actionable regional insights.
        </p> */}
  