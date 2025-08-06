import React from "react";
import PageContainer from "../components/PageContainer";

function Contact() {
  return (
    <PageContainer>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto 0 auto",
          padding: "0.2rem 40px 1rem 40px", // same padding as About page
          borderRadius: "16px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#21374A",
          lineHeight: 1.6,
          minHeight: "calc(100vh - 160px)", // same minHeight for consistent footer positioning
        }}
      >
        <h1 style={{ fontWeight: 900, fontSize: "2.8rem", marginBottom: "1rem" }}>
          Contact
        </h1>
        <div
          style={{
            display: "flex",
            gap: "6rem",
            flexWrap: "wrap",
            alignItems: "flex-start",
            fontSize: "1.1rem",
            color: "#21374A",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.5 }}>
            <strong>Wouter Bam</strong>
            <span>School of Engineering</span>
            <span>The University of British Columbia, Canada</span>
            <a
              href="mailto:wouter.bam@ubc.ca"
              style={{ color: "#1151b8", textDecoration: "underline", marginTop: "0.3rem" }}
            >
              wouter.bam@ubc.ca
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.5 }}>
            <strong>Rohan Sharma</strong>
            <span>MASc in Engineering</span>
            <span>The University of British Columbia, Canada</span>
            <a
              href="mailto:rohan.s@ubc.ca"
              style={{ color: "#1151b8", textDecoration: "underline", marginTop: "0.3rem" }}
            >
              rohan.s@ubc.ca
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Contact;
