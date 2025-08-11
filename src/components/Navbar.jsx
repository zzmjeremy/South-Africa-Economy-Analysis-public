import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/results", label: "Results" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">
          <span className="navbar-logo-highlight">RIX</span>
        </span>
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
