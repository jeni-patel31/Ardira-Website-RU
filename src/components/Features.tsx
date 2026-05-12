const features = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>, title: "No Sync Delays", description: "When feedback lives outside Salesforce, you're acting on yesterday's data. Native means every response writes instantly to your records." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6L12 2z"/><path d="M9 12l2 2 4-4"/></svg>, title: "Data Never Leaves Salesforce", description: "Every integration is an attack surface. Ardira apps inherit Salesforce's security and compliance standards." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>, title: "Eliminate Integration Tax", description: "Save $12,000–$24,000 per year per integration. No licenses, no projects, no maintenance overhead." },
];

const nonNative = ["Data syncs in batches", "Integration projects and maintenance", "Expanded security surface", "Fragmented intelligence"];
const native = ["Instant data availability", "Deploy in hours, configure instantly", "Salesforce security inherited", "Complete intelligence unified"];

function Features() {
  return (
    <section id="features" style={{ padding: "80px 40px", background: "var(--bg-light)", borderTop: "1px solid var(--border-color)" }}>
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 60px", animation: "fadeIn 0.8s ease" }}>
        <span style={{ display: "block", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--primary-green)", marginBottom: 12 }}>Why Native Matters</span>
        <h2 style={{ color: "var(--navy)", marginBottom: 16 }}>The best integration<br />is <span style={{ color: "var(--primary-green)" }}>no integration.</span></h2>
        <p style={{ maxWidth: 600, margin: "0 auto" }}>Every non-native tool in your Salesforce stack is a confession that your intelligence lives in exile — separate from where your team actually works.</p>
      </div>
      <div className="features-grid-cols" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 60 }}>
        {features.map((f, i) => (
          <div 
            key={i} 
            className="feature-card" 
            style={{ 
              background: "#fff", 
              padding: 32, 
              borderRadius: 16, 
              border: "1.5px solid var(--border-color)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              textAlign: "center", 
              cursor: "default",
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const card = e.currentTarget as HTMLElement;
              card.style.transform = "translateY(-8px)";
              card.style.boxShadow = "0 16px 32px rgba(0,0,0,0.12)";
              card.style.borderColor = "var(--primary-green)";
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget as HTMLElement;
              card.style.transform = "translateY(0)";
              card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
              card.style.borderColor = "var(--border-color)";
            }}
          >
            <div style={{ width: 56, height: 56, margin: "0 auto 20px", padding: 12, background: "var(--primary-green-light)", borderRadius: 12, border: "1.5px solid var(--primary-green)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-green)", transition: "all 0.3s ease" }}>{f.icon}</div>
            <h3 style={{ fontSize: 18, color: "var(--navy)", marginBottom: 12, transition: "color 0.3s ease" }}>{f.title}</h3>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{f.description}</p>
          </div>
        ))}
      </div>
      <div className="comparison-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, border: "1.5px solid var(--border-color)", borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-sm)", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ background: "#fff", padding: "36px 32px", borderRight: "1.5px solid var(--border-color)" }}>
          <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--border-color)", color: "var(--text-primary)" }}>Non-Native Tools</h4>
          {nonNative.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: i < nonNative.length - 1 ? "1px solid var(--border-color)" : "none", fontSize: 14, color: "var(--text-secondary)" }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#dc2626", width: 20, textAlign: "center", flexShrink: 0 }}>✕</span>
              <div>{t}</div>
            </div>
          ))}
        </div>
        <div className="native-col" style={{ background: "linear-gradient(160deg, var(--primary-green-light) 0%, rgba(255,255,255,0) 60%)", padding: "36px 32px", borderLeft: "3px solid var(--primary-green)" }}>
          <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--border-color)", color: "var(--primary-green-dark)" }}>Ardira Native Apps</h4>
          {native.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: i < native.length - 1 ? "1px solid var(--border-color)" : "none", fontSize: 14, color: "var(--text-secondary)" }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "var(--primary-green)", width: 20, textAlign: "center", flexShrink: 0 }}>✓</span>
              <div>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
