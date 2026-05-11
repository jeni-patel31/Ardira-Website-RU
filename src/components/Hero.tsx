function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "60px 40px 50px", background: "linear-gradient(135deg, #fff 0%, var(--primary-green-light) 100%)", textAlign: "center", minHeight: "45vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, width: "100%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--primary-green)", border: "1.5px solid var(--primary-green-light)", background: "var(--primary-green-light)", padding: "8px 16px", borderRadius: 100, marginBottom: 32, animation: "fadeInDown 0.8s ease" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary-green)", animation: "pulse 2s ease-in-out infinite", display: "inline-block" }} />
          100% Salesforce-Native Applications
        </div>
        <h1 style={{ margin: "24px 0", color: "var(--navy)", animation: "fadeInDown 0.8s ease 0.1s backwards" }}>
          Your Salesforce org<br />is only as powerful as<br />what's <span style={{ color: "var(--primary-green)" }}>native</span> to it.
        </h1>
        <p style={{ fontSize: 17, margin: "24px auto 36px", maxWidth: 600, animation: "fadeInDown 0.8s ease 0.2s backwards" }}>
          Ardira builds applications that live entirely inside Salesforce — no integrations to maintain, no data leaving your org, no hidden costs. Intelligence and action, where your team already works.
        </p>
        <div className="hero-buttons-col" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 52, flexWrap: "wrap" as const, animation: "fadeInDown 0.8s ease 0.3s backwards" }}>
          <a href="#products" className="btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 15, fontWeight: 600, padding: "13px 34px", borderRadius: 8, background: "var(--primary-green)", color: "#fff", boxShadow: "0 4px 14px rgba(57,180,74,0.3)", border: "2px solid transparent", textDecoration: "none", transition: "var(--transition)" }}>Explore Products →</a>
          <a href="#features" className="btn" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 15, fontWeight: 600, padding: "13px 34px", borderRadius: 8, background: "#fff", color: "var(--text-secondary)", border: "2px solid var(--border-color)", textDecoration: "none", transition: "var(--transition)" }}>Why Native Matters</a>
        </div>
        <div className="trust-indicators-col" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" as const, fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L10 5.5L15 6.2L11.5 9.6L12.4 14.5L8 12.2L3.6 14.5L4.5 9.6L1 6.2L6 5.5Z" fill="#39B44A"/></svg>
            5-star AppExchange rating
          </div>
          <div className="trust-sep" style={{ width: 1, height: 20, background: "var(--border-color)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#27AAE1" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#27AAE1" strokeWidth="1.5" strokeLinecap="round"/></svg>
            400+ organizations worldwide
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
