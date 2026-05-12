const ShieldIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const StarIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>);
const BuildingIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>);
const CloudIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>);

const iconColors: Record<string, { bg: string; color: string }> = {
  blue: { bg: "#e8f0fe", color: "#1a73e8" },
  green: { bg: "#e6f4ea", color: "#1e8e3e" },
  yellow: { bg: "#fef7e0", color: "#f29900" },
  purple: { bg: "#f3e8fd", color: "#9333ea" },
};

const stats = [
  { number: "50", symbol: "+", label: "Years of Combined Experience", icon: <ShieldIcon />, c: "blue" },
  { number: "250", symbol: "+", label: "AppExchange Reviews", icon: <StarIcon />, c: "green" },
  { number: "450", symbol: "+", label: "Enterprise Clients", icon: <BuildingIcon />, c: "yellow" },
  { number: "5", symbol: "", label: "Native Salesforce Products", icon: <CloudIcon />, c: "purple" },
];

function Stats() {
  return (
    <section style={{ width: "100%", padding: "80px 5%", background: "#fff", display: "flex", justifyContent: "center" }}>
      <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, maxWidth: 1200, width: "100%" }}>
        {stats.map((s, i) => (
          <div 
            key={i} 
            className="stat-card" 
            style={{ 
              background: iconColors[s.c].bg,
              padding: "40px 24px",
              textAlign: "center",
              borderRadius: 16,
              border: `1px solid ${iconColors[s.c].bg}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "all 0.3s ease",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
              boxShadow: `0 4px 12px ${iconColors[s.c].color}12`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = iconColors[s.c].color;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${iconColors[s.c].color}20`;
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = iconColors[s.c].bg;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px ${iconColors[s.c].color}12`;
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div 
              style={{ 
                width: 64,
                height: 64,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                background: iconColors[s.c].bg,
                color: iconColors[s.c].color,
                flexShrink: 0,
              }}
            >
              {s.icon}
            </div>
            <div 
              style={{ 
                fontSize: 44,
                fontWeight: 700,
                color: iconColors[s.c].color,
                lineHeight: 1,
                marginBottom: 8,
                letterSpacing: "-0.01em",
              }}
            >
              {s.number}{s.symbol}
            </div>
            <div 
              style={{ 
                fontSize: 14,
                fontWeight: 500,
                color: "#64748b",
                lineHeight: 1.6,
                maxWidth: 150,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
