import React from "react";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "#223a4e",
      color: "#f0f0f0",
      padding: "2rem 1rem",
      // marginTop: "3rem", // remove this
      fontSize: "0.9rem",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <strong>RIX</strong> — Regional Industry Explorer
        </div>
        <nav style={{ marginBottom: "1rem" }}>
          <a href="#" style={{ color: "#f0f0f0", margin: "0 1rem", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ color: "#f0f0f0", margin: "0 1rem", textDecoration: "none" }}>Terms of Service</a>
          <a href="#" style={{ color: "#f0f0f0", margin: "0 1rem", textDecoration: "none" }}>Contact</a>
          <a href="#" style={{ color: "#f0f0f0", margin: "0 1rem", textDecoration: "none" }}>Help</a>
        </nav>
        <div>
          &copy; {new Date().getFullYear()} RIX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
