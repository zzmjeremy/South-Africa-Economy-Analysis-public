import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/results", label: "Results" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  const deepRed = "#8B0000";

  return (
    <nav style={{
      width: "100%",
      background: "transparent",
      borderBottom: "none",
      marginBottom: 0,
      padding: 0,
      boxShadow: "none"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        maxWidth: "1160px",
        margin: "0 auto",
        padding: "0 30px",
        height: "60px",
        background: "#fafbfc"
      }}>
        <span style={{
          fontWeight: 900,
          fontSize: "2rem",
          letterSpacing: "-2px",
          color: "#223a4e",
          marginRight: "36px",
          fontFamily: "Montserrat, Inter, Arial, sans-serif"
        }}>
          <span style={{
            display: "inline-block",
            borderBottom: `4px solid ${deepRed}`,
            paddingBottom: "1px"
          }}>
            RIX
          </span>
        </span>
        <div style={{ display: "flex", gap: "38px", marginLeft: "16px", flexGrow: 1 }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: "none",
                color: "#23384e",
                fontWeight: location.pathname === link.path ? 700 : 400,
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
                borderBottom: location.pathname === link.path ? `2px solid ${deepRed}` : "2px solid transparent",
                paddingBottom: "2px",
                transition: "border 0.18s"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Removed theme toggle button */}
      </div>
    </nav>
  );
}

export default Navbar;
