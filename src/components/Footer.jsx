import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-title">
          <strong>RIX</strong> — Regional Industry Explorer
        </div>
        <nav className="footer-nav">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </nav>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} RIX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
