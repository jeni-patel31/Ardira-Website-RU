import { Link } from "react-router-dom";
import ArdiraFooterLogo from "@assets/ArdiraFooterLogo.webp";
import SalesForcePartnerLogo from "@assets/SalesForcePartnerLogo.webp";

function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.85)", padding: "60px 40px 32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="footer-grid" style={{ maxWidth: "var(--max-width)", margin: "0 auto 48px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
        <div className="footer-col">
          <div style={{ marginBottom: 16 }}>
            <img src={ArdiraFooterLogo} alt="Ardira" style={{ height: 40, width: "auto", display: "block" }} />
          </div>
          <p style={{ fontSize: 13.5, fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>Building 100% Salesforce-native applications that turn your CRM into an intelligence and action engine.</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, marginTop: 16 }}>
            <img src={SalesForcePartnerLogo} alt="Salesforce Partner" style={{ height: 40, width: "auto", objectFit: "contain" }} />
          </div>
        </div>
        <div className="footer-col">
          <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", marginBottom: 18 }}>Products</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["SurveyVista", "FormVista", "ComplianceVista", "AgentVista", "RelationshipVista"].map(p => (
              <li key={p} style={{ marginBottom: 12 }}><a href="#" className="footer-col" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "var(--transition)" }}>{p}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", marginBottom: 18 }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 12 }}><a href="#" className="footer-col" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "var(--transition)" }}>About Us</a></li>
            <li style={{ marginBottom: 12 }}><a href="#" className="footer-col" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "var(--transition)" }}>Join Us</a></li>
            <li style={{ marginBottom: 12 }}><Link to="/partner-hub" className="footer-col" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "var(--transition)" }}>Partner Hub</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", marginBottom: 18 }}>Resources</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Documentation", "Case Studies", "Contact", "Support"].map(r => (
              <li key={r} style={{ marginBottom: 12 }}><a href="#" className="footer-col" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "var(--transition)" }}>{r}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom-col" style={{ maxWidth: "var(--max-width)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap" as const, gap: 12 }}>
        <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", margin: 0 }}>&copy; 2026 Ardira Corporation. All rights reserved.</p>
        <div className="footer-links footer-links-col" style={{ display: "flex", gap: 24 }}>
          <Link to="/privacy-policy" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "var(--transition)" }}>Privacy Policy</Link>
          <Link to="/terms" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "var(--transition)" }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
