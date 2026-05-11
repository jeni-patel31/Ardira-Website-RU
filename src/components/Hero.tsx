function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "80px 40px 100px", background: "linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%)", textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, width: "100%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--primary-green)", border: "none", background: "rgba(57,180,74,0.1)", padding: "10px 20px", borderRadius: 20, marginBottom: 32, animation: "fadeInDown 0.8s ease" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--primary-green)", animation: "pulse 2s ease-in-out infinite", display: "inline-block" }} />
          100% Salesforce-Native Applications
        </div>
        <h1 style={{ margin: "32px 0 24px 0", color: "var(--navy)", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.3, animation: "fadeInDown 0.8s ease 0.1s backwards", letterSpacing: "-0.02em" }}>
          Your Salesforce org<br />is only as powerful as<br />what's <span style={{ color: "var(--primary-green)" }}>native</span> to it.
        </h1>
        <p style={{ fontSize: 16, margin: "28px auto 44px", maxWidth: 700, color: "var(--text-secondary)", lineHeight: 1.6, animation: "fadeInDown 0.8s ease 0.2s backwards", fontWeight: 400 }}>
          Ardira builds applications that live entirely inside Salesforce — no integrations to maintain, no data leaving your org, no hidden costs. Intelligence and action, where your team already works.
        </p>
        <div className="hero-buttons-col" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 64, flexWrap: "wrap" as const, animation: "fadeInDown 0.8s ease 0.3s backwards" }}>
          <a href="#products" className="btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 16, fontWeight: 700, padding: "14px 40px", borderRadius: 12, background: "var(--primary-green)", color: "#fff", boxShadow: "0 4px 14px rgba(57,180,74,0.3)", border: "none", textDecoration: "none", transition: "var(--transition)", cursor: "pointer" }}>Explore our products →</a>
          <a href="#features" className="btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 16, fontWeight: 600, padding: "14px 40px", borderRadius: 12, background: "#fff", color: "var(--navy)", border: "2px solid var(--border-color)", textDecoration: "none", transition: "var(--transition)", cursor: "pointer" }}>Why native matters</a>
        </div>
        <div className="trust-indicators-col" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" as const, fontSize: 14, fontWeight: 500, color: "var(--text-secondary)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M8 1L10 5.5L15 6.2L11.5 9.6L12.4 14.5L8 12.2L3.6 14.5L4.5 9.6L1 6.2L6 5.5Z" fill="var(--primary-green)"/></svg>
            5-star AppExchange rating
          </div>
          <div className="trust-sep" style={{ width: 1, height: 24, background: "var(--border-color)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--primary-blue)" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            400+ organizations worldwide
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
