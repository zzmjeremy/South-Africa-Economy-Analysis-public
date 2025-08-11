// src/components/PageContainer.jsx
import React from "react";
import "./PageContainer.css";

function PageContainer({ children }) {
  return (
    <div className="page-container">
      <div className="page-content">{children}</div>
    </div>
  );
}

export default PageContainer;
