import { Link } from "react-router-dom";
import ArdiraLogo from "@assets/ArdiraLogo.webp";

function Navbar() {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border-color)", padding: "0 48px", height: 70 }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/">
          <img src={ArdiraLogo} alt="Ardira" style={{ height: 40, width: "auto", display: "block" }} />
        </Link>
        <ul className="nav-menu" style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 28 }}>
          <li className="nav-hide-mobile"><a href="/#products" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", whiteSpace: "nowrap", textDecoration: "none" }}>Products</a></li>
          <li className="nav-hide-mobile"><a href="/#features" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", whiteSpace: "nowrap", textDecoration: "none" }}>Why Native</a></li>
          <li className="nav-hide-mobile"><a href="/#contact" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", whiteSpace: "nowrap", textDecoration: "none" }}>Company</a></li>
          <li className="nav-hide-mobile"><Link to="/partner-hub" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", whiteSpace: "nowrap", textDecoration: "none" }}>Partner Hub</Link></li>
          <li><a href="/#contact" className="btn-demo" style={{ fontSize: 14, fontWeight: 600, padding: "8px 20px", background: "var(--primary-green)", color: "#fff", borderRadius: 7, boxShadow: "0 3px 10px rgba(57,180,74,0.25)", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Book Demo</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
