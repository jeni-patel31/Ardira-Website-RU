function CTA() {
  return (
    <section className="responsive-section" style={{ background: "linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-dark) 100%)", paddingTop: 80, paddingBottom: 80, textAlign: "center", color: "#fff" }}>
      <h2 style={{ color: "#fff", marginBottom: 12 }}>Ready to Transform Your Salesforce Org?</h2>
      <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 32, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>Join 400+ organizations already using Ardira's native applications</p>
      <a href="#contact" className="cta-btn-primary" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 16, fontWeight: 600, padding: "16px 48px", borderRadius: 8, background: "#fff", color: "var(--primary-green)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", border: "2px solid transparent", textDecoration: "none", transition: "var(--transition)" }}>Book a Demo Today →</a>
    </section>
  );
}

export default CTA;
