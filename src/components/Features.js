import React from "react";
import "./Features.css";

function Features() {
  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      ),
      title: "No Sync Delays",
      description:
        "When feedback lives outside Salesforce, you're acting on yesterday's data. Native means every response writes instantly to your records.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6L12 2z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Data Never Leaves Salesforce",
      description:
        "Every integration is an attack surface. Ardira apps inherit Salesforce's security and compliance standards.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
      ),
      title: "Eliminate Integration Tax",
      description:
        "Save $12,000–$24,000 per year per integration. No licenses, no projects, no maintenance overhead.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="section-header">
        <span className="section-eyebrow">Why Native Matters</span>
        <h2>
          The Best Integration
          <br />
          Is <span className="highlight">No Integration</span>
        </h2>
        <p>
          Every non-native tool in your Salesforce stack is a confession that
          your intelligence lives in exile.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="comparison-section">
        <div className="comparison-col non-native">
          <h4>Non-Native Tools</h4>
          <div className="comparison-row">
            <span className="icon">✕</span>
            <div>Data syncs in batches</div>
          </div>
          <div className="comparison-row">
            <span className="icon">✕</span>
            <div>Integration projects and maintenance</div>
          </div>
          <div className="comparison-row">
            <span className="icon">✕</span>
            <div>Expanded security surface</div>
          </div>
          <div className="comparison-row">
            <span className="icon">✕</span>
            <div>Fragmented intelligence</div>
          </div>
        </div>
        <div className="comparison-col native">
          <h4>Ardira Native Apps</h4>
          <div className="comparison-row">
            <span className="icon">✓</span>
            <div>Instant data availability</div>
          </div>
          <div className="comparison-row">
            <span className="icon">✓</span>
            <div>Deploy in hours, configure instantly</div>
          </div>
          <div className="comparison-row">
            <span className="icon">✓</span>
            <div>Salesforce security inherited</div>
          </div>
          <div className="comparison-row">
            <span className="icon">✓</span>
            <div>Complete intelligence unified</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
