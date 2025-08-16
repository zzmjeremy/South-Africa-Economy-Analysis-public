import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-title">
          <strong>USE</strong> — UBC South Africa Economy Analysis
        </div>
        <nav className="footer-nav">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </nav>
        <div className="footer-copy">USE. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
