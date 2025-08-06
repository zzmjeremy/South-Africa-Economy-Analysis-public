// src/components/PageContainer.jsx
import React from "react";

function PageContainer({ children }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #f0f4ff 0%, #d9e2ff 40%, #e5ecff 100%)",
      minHeight: "calc(100vh - 160px)",  // Adjust for header/footer height
      padding: "3rem 0 1rem 0",
      boxShadow: "inset 0 0 80px 20px #cbdcff",
      display: "flex",
      justifyContent: "center",
      alignItems: "start"
    }}>
      <div style={{
        maxWidth: "720px",
        margin: "0 1rem",
        padding: "32px 40px 1rem 40px",
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(60, 80, 150, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left",
        color: "#21374A",
        lineHeight: 1.6,
        backgroundColor: "#fff",
        width: "100%"
      }}>
        {children}
      </div>
    </div>
  );
}

export default PageContainer;
