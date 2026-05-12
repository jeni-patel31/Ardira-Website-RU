const BriefcaseIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 7v-2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2"></path></svg>);
const StarIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>);
const UsersIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
const CubeIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>);

const iconColors: Record<string, { bg: string; color: string }> = {
  blue: { bg: "#e8f0fe", color: "#1a73e8" },
  green: { bg: "#e6f4ea", color: "#1e8e3e" },
  yellow: { bg: "#fef7e0", color: "#f29900" },
  purple: { bg: "#f3e8fd", color: "#9333ea" },
};

const stats = [
  { number: "50", symbol: "+", label: "Years of Combined Experience", icon: <BriefcaseIcon />, c: "blue" },
  { number: "250", symbol: "+", label: "AppExchange Reviews", icon: <StarIcon />, c: "green" },
  { number: "450", symbol: "+", label: "Enterprise Clients", icon: <UsersIcon />, c: "yellow" },
  { number: "5", symbol: "", label: "Native Salesforce Products", icon: <CubeIcon />, c: "purple" },
];

function Stats() {
  return (
    <section style={{ width: "100%", padding: "60px 48px", background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "auto" }}>
      <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, maxWidth: "var(--max-width)", width: "100%", margin: "0 auto" }}>
        {stats.map((s, i) => (
          <div 
            key={i} 
            className="stat-card" 
            style={{ 
              background: iconColors[s.c].bg,
              padding: "32px 20px",
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
                width: 56,
                height: 56,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                background: iconColors[s.c].bg,
                color: iconColors[s.c].color,
                flexShrink: 0,
              }}
            >
              {s.icon}
            </div>
            <div 
              style={{ 
                fontSize: 40,
                fontWeight: 700,
                color: iconColors[s.c].color,
                lineHeight: 1,
                marginBottom: 6,
                letterSpacing: "-0.01em",
              }}
            >
              {s.number}{s.symbol}
            </div>
            <div 
              style={{ 
                fontSize: 13,
                fontWeight: 500,
                color: "#64748b",
                lineHeight: 1.5,
                maxWidth: 140,
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
